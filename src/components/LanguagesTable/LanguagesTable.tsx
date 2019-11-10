import {
  Button,
  Chip,
  CircularProgress,
  colors,
  Divider,
  Typography,
  Grid
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import DoneIcon from "@material-ui/icons/Done";
import MaterialTable, { MTableToolbar } from "material-table";
import React, { forwardRef, useEffect, useState } from "react";
import { Add, Undo } from "@material-ui/icons";

import { Link as RouterLink } from "react-router-dom";
import {
  LanguagesQuery,
  useLanguagesQuery,
  useTranslationResetAllMutation
} from "../../graphql/generated/graphql";
import Flag from "../Flag";

interface Props {
  className?: string;
}

export interface State {
  data: LanguagesQuery[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    chip: {
      margin: theme.spacing(0.25)
    },
    nameContainer: {
      display: "flex",
      alignItems: "center"
    },
    avatar: {
      marginRight: theme.spacing(2)
    },
    progress: {
      width: "56px",
      height: "56px"
    },
    progressContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      marginBottom: theme.spacing(1)
    },
    progressLabel: {
      whiteSpace: "nowrap",
      marginRight: theme.spacing(1)
    },
    actionButton: {
      display: "block"
    },
    break: {
      flexBasis: "100%",
      height: "0"
    }
  })
);

const LanguagesTable: React.FC<Props> = ({ className }) => {
  const classes = useStyles();
  const { loading, error, data } = useLanguagesQuery();
  const [tableData, setTableData] = useState();

  useEffect(() => {
    if (!loading && data) {
      setTableData(data.languages);
    }
    if (error) {
      setTableData([]);
    }
  }, [data, error, loading]);

  const [translationResetAllMutation] = useTranslationResetAllMutation();

  const locales: any = {
    en: "EN",
    de: "DE",
    es: "MX"
  };

  return (
    <div className={classes.root}>
      <MaterialTable
        title={
          <Typography variant="h5" component="span">
            All Languages
          </Typography>
        }
        columns={[
          {
            title: "Name",
            field: "name",
            render: rowData => (
              <div className={classes.nameContainer}>
                <Flag languageKey={rowData.key} />
                <Typography variant="body1">{rowData.name}</Typography>
              </div>
            )
          },
          {
            title: "Locale",
            field: "key",
            render: rowData => `${rowData.key}-${locales[rowData.key]}`
          },
          {
            title: "Status",
            field: "isActive",
            sorting: false,
            render: rowData => (
              <div>
                <Chip
                  size="small"
                  color={rowData.isActive ? "secondary" : "default"}
                  variant="outlined"
                  label="Active"
                  className={classes.chip}
                />
                {rowData.isDefault && (
                  <Chip
                    size="small"
                    color={rowData.isDefault ? "secondary" : "default"}
                    variant="default"
                    clickable={false}
                    label="Default"
                    className={classes.chip}
                    deleteIcon={<DoneIcon />}
                    onDelete={() => null}
                  />
                )}
              </div>
            )
          },
          {
            field: "isDefault",
            hidden: true
          },
          {
            title: "Translations",
            headerStyle: {
              textAlign: "right"
            },
            sorting: false,
            render: rowData => (
              <Grid container className={classes.progressContainer} spacing={2}>
                <Grid item className={classes.progressLabel}>
                  <Typography variant="h6" align="right">
                    {rowData.key === "es" ? "92%" : "100%"}
                  </Typography>
                  <Typography variant="body1" align="right">
                    Translation Rate
                  </Typography>
                </Grid>
                <CircularProgress
                  className={classes.progress}
                  variant="static"
                  color="secondary"
                  value={rowData.key === "es" ? 92 : 100}
                />
                <Grid item>
                  <Button
                    color="primary"
                    component={RouterLink}
                    size="small"
                    to={`/translations/${rowData.key}`}
                    variant="outlined"
                  >
                    Edit Translations
                  </Button>
                </Grid>
              </Grid>
            )
          }
        ]}
        isLoading={loading}
        data={tableData}
        editable={{
          onRowDelete: oldData =>
            new Promise(resolve => {
              translationResetAllMutation({
                update: (proxy, mutationResult) => {
                  const updateData = [...tableData];
                  const { data } = mutationResult;
                  if (data && data) {
                    updateData[tableData.indexOf(oldData)] = oldData;
                    setTableData(updateData);
                    resolve();
                  }
                },
                variables: {
                  languageKey: oldData.key
                }
              });
            })
        }}
        actions={[
          {
            icon: "more_vert",
            tooltip: "More actions",
            isFreeAction: true,
            onClick: event => alert("More...")
          }
        ]}
        components={{
          Toolbar: props => (
            <div>
              <MTableToolbar {...props} />
              <Divider />
            </div>
          )
        }}
        icons={{
          Add: forwardRef((props, ref) => <Add {...props} ref={ref} />),
          Delete: forwardRef((props, ref) => <Undo {...props} ref={ref} />)
        }}
        localization={{
          header: {
            actions: "Reset"
          },
          body: {
            addTooltip: "Add",
            deleteTooltip: "Reset",
            editTooltip: "Edit",
            editRow: {
              deleteText:
                "Are you sure you want to reset the default translations?"
            },
            emptyDataSourceMessage: "No translations to display"
          }
        }}
        options={{
          search: false,
          showTitle: true,
          actionsColumnIndex: -1,
          pageSize: 5,
          pageSizeOptions: [5, 10, 30],
          headerStyle: {
            backgroundColor: colors.grey[50]
          }
        }}
      />
    </div>
  );
};

export default LanguagesTable;
