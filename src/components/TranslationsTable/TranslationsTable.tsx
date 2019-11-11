import {
  colors,
  Divider,
  FormControl,
  MenuItem,
  Select,
  Typography
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Add, Undo } from "@material-ui/icons";
import MaterialTable, { MTableEditField, MTableToolbar } from "material-table";
import React, { forwardRef, useEffect, useState } from "react";
import {
  useTranslationResetMutation,
  useTranslationsQuery,
  useTranslationUpdateMutation
} from "../../graphql/generated/graphql";
import { useRouter } from "../../hooks";
import Flag from "../Flag";

interface Props {
  className?: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTableSortLabel-icon": {
        fontSize: "1rem",
        width: "1em",
        height: "1em"
      }
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 140,
      alignItems: "center"
    },
    selectEmpty: {
      width: "280px",
      "& .selectLanguage": {
        position: "absolute",
        marginTop: "1em"
      },
      "& .MuiSelect-selectMenu": {
        height: "3em"
      }
    },
    selectFlag: {
      lineHeight: "1.3 !important"
    },
    editField: {
      width: "100%"
    }
  })
);

const TranslationsTable: React.FC<Props> = ({ className, ...rest }) => {
  const classes = useStyles();
  const router = useRouter<{ id: string }>();
  const {
    match: {
      params: { id }
    }
  } = router;

  const [languageKey, setLanguageKey] = useState(id ? id : "");
  const [tableData, setTableData] = useState();
  const [tableLoading, setTableLoading] = useState();

  const { loading, error, data } = useTranslationsQuery({
    variables: { languageKey }
  });

  useEffect(() => {
    if (loading) {
      setTableLoading(loading);
    }
    if (data) {
      setTableLoading(loading);
      setTableData(data.translations);
    }
    if (error) {
      setTableData([]);
    }
  }, [data, error, loading]);

  const [translationUpdateMutation] = useTranslationUpdateMutation();
  const [translationResetMutation] = useTranslationResetMutation();

  const handleSelectChange = React.useCallback(
    (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
      router.history.push(`/translations/${event.target.value}`);
      setLanguageKey(event.target.value as string);
    },
    [router.history]
  );

  return (
    <div className={classes.root}>
      <MaterialTable
        title={
          <FormControl className={classes.formControl}>
            <Select
              value={languageKey}
              onChange={handleSelectChange}
              displayEmpty
              name="language"
              className={classes.selectEmpty}
            >
              <MenuItem value={""}>
                <Typography variant={"subtitle1"} className="selectLanguage">
                  Select a language
                </Typography>
              </MenuItem>
              <MenuItem value={"de"}>
                <Flag languageKey={"de"} className={classes.selectFlag} />
                <span className="selectLanguage">Deutsch</span>
              </MenuItem>
              <MenuItem value={"en"}>
                <Flag languageKey={"en"} className={classes.selectFlag} />
                <span className="selectLanguage">English</span>
              </MenuItem>
              <MenuItem value={"es"}>
                <Flag languageKey={"es"} className={classes.selectFlag} />
                <span className="selectLanguage">Español</span>
              </MenuItem>
            </Select>
          </FormControl>
        }
        columns={[
          {
            title: "Field",
            field: "key",
            editable: "onAdd"
          },
          {
            title: "Translation",
            field: "value"
          }
        ]}
        isLoading={tableLoading}
        data={tableData}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              translationUpdateMutation({
                update: (proxy, mutationResult) => {
                  const updateData = [...tableData];
                  const { data } = mutationResult;
                  if (data && data.translationUpdate) {
                    updateData[tableData.indexOf(newData)] =
                      data.translationUpdate;
                    resolve();
                  }
                },
                variables: {
                  languageKey: languageKey,
                  translation: { key: newData.key, value: newData.value }
                }
              });
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              translationResetMutation({
                update: (proxy, mutationResult) => {
                  const updateData = [...tableData];
                  const { data } = mutationResult;
                  if (data) {
                    updateData[tableData.indexOf(oldData)] =
                      data.translationReset;
                    setTableData(updateData);
                    resolve();
                  }
                },
                variables: {
                  languageKey: languageKey,
                  key: oldData.key
                }
              });
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              translationUpdateMutation({
                update: (proxy, mutationResult) => {
                  const updateData = [...tableData];
                  const { data } = mutationResult;
                  if (data && data.translationUpdate) {
                    updateData[tableData.indexOf(oldData)] =
                      data.translationUpdate;
                    setTableData(updateData);
                    resolve();
                  }
                },
                variables: {
                  languageKey: languageKey,
                  translation: { key: newData.key, value: newData.value }
                }
              });
            })
        }}
        components={{
          Toolbar: props => (
            <div>
              <MTableToolbar {...props} />
              <Divider />
            </div>
          ),
          EditField: props => (
            <MTableEditField className={classes.editField} {...props} />
          )
        }}
        icons={{
          Add: forwardRef((props, ref) => <Add {...props} ref={ref} />),
          Delete: forwardRef((props, ref) => <Undo {...props} ref={ref} />)
        }}
        localization={{
          body: {
            addTooltip: "Add",
            deleteTooltip: "Reset",
            editTooltip: "Edit",
            editRow: {
              deleteText: "Are you sure reset this translation?"
            },
            emptyDataSourceMessage: "No translations to display"
          }
        }}
        options={{
          search: true,
          showTitle: true,
          actionsColumnIndex: -1,
          pageSize: tableData && tableData.length ? 10 : 5,
          pageSizeOptions: [5, 10, 20, 50],
          headerStyle: {
            backgroundColor: colors.grey[50]
          },
          searchFieldStyle: {
            height: "3.9em"
          },
          addRowPosition: "first"
        }}
      />
    </div>
  );
};

export default TranslationsTable;
