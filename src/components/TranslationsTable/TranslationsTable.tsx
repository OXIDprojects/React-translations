import React, { useState, useEffect, forwardRef } from 'react';
import { useTranslationsQuery, useUpdateTranslationMutation, useResetTranaslationMutation } from '../../graphql/generated/graphql';
import { useRouter } from '../../hooks';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MaterialTable, { MTableToolbar, MTableEditField } from 'material-table';
import { MenuItem, FormControl, Select, Divider, colors, Typography } from '@material-ui/core';
import Flag from '../Flag'
import { Undo, Add } from '@material-ui/icons';

interface Props {
  className?: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTableSortLabel-icon': {
        fontSize: '1rem',
        width: '1em',
        height: '1em'
      }
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 140,
      alignItems: 'center',
    },
    selectEmpty: {
      width: '280px',
      '& .selectLanguage': {
        position: 'absolute',
        marginTop: '1em'
      },
      '& .MuiSelect-selectMenu': {
        height: '3em',
      }
    },
    selectFlag: {
      lineHeight: '1.3 !important',
    },
    editField: {
      width: '100%'
    }
  }));

const TranslationsTable: React.FC<Props> = ({ className, ...rest }) => {
  const classes = useStyles();
  const router = useRouter<{ id: string }>();
  const { match: { params: { id } } } = router;

  const [languageKey, setLanguageKey] = useState(id ? id : '');
  const [tableData, setTableData] = useState();
  const [tableLoading, setTableLoading] = useState();

  const { loading, error, data } = useTranslationsQuery({
    variables: { languageKey }
  });

  useEffect(() => {
    if (loading) {
      setTableLoading(loading)
    }
    if (data) {
      setTableLoading(loading)
      setTableData(data.translations);
    }
    if (error) {
      setTableData([]);
    }
  }, [data, error, loading]);

  const [updateTranslation] = useUpdateTranslationMutation();
  const [resetTranslation] = useResetTranaslationMutation();

  const handleSelectChange = React.useCallback((
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    router.history.push(`/translations/${event.target.value}`);
    setLanguageKey(event.target.value as string);
  }, [router.history]);

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
              <MenuItem value={''}>
                <Typography variant={'subtitle1'} className='selectLanguage'>Select a language</Typography>
              </MenuItem>
              <MenuItem value={'de'}>
                <Flag languageKey={'de'} className={classes.selectFlag} />
                <span className='selectLanguage'>Deutsch</span>
              </MenuItem>
              <MenuItem value={'en'}>
                <Flag languageKey={'en'} className={classes.selectFlag} />
                <span className='selectLanguage'>English</span>
              </MenuItem>
            </Select>
          </FormControl>
        }
        columns={[
          {
            title: 'Field',
            field: 'translationKey',
            editable: 'onAdd',
          },
          {
            title: 'Translation',
            field: 'translationValue',
          },
          {
            title: 'Language',
            field: 'languageKey',
            hidden: true
          }
        ]}
        isLoading={tableLoading}
        data={tableData}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              updateTranslation({
                update: (proxy, mutationResult) => {
                  const data = [...tableData];
                  const { data: resultData } = mutationResult;
                  if (resultData && resultData.updateTranslation) {
                    data[tableData.indexOf(newData)] = resultData.updateTranslation;
                    resolve();
                  }
                },
                variables: newData
              })
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              const data = [...tableData];
              data[tableData.indexOf(oldData)] = oldData;
              setTableData(data);
              resetTranslation({
                update: (proxy, mutationResult) => {
                  const { data: resultData } = mutationResult;
                  if (resultData && resultData.resetTranslation) {
                    data[tableData.indexOf(oldData)] = resultData.resetTranslation;
                    setTableData(data);
                    resolve();
                  }
                },
                variables: oldData
              })
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              updateTranslation({
                update: (proxy, mutationResult) => {
                  const data = [...tableData];
                  const { data: resultData } = mutationResult;
                  if (resultData && resultData.updateTranslation) {
                    data[tableData.indexOf(oldData)] = resultData.updateTranslation;
                    setTableData(data);
                    resolve();
                  }
                },
                variables: newData
              })
            }),
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
          Delete: forwardRef((props, ref) => <Undo {...props} ref={ref} />),
        }}
        localization={{
          body: {
            addTooltip: 'Add',
            deleteTooltip: 'Reset',
            editTooltip: 'Edit',
            editRow: {
              deleteText: 'Are you sure reset this row?'
            },
            emptyDataSourceMessage: 'No translations to display'
          }
        }}
        options={{
          search: true,
          showTitle: true,
          actionsColumnIndex: -1,
          pageSize: tableData && tableData.length ? 10 : 5,
          pageSizeOptions: [5, 10, 20, 50],
          headerStyle: {
            backgroundColor: colors.grey[50],
          },
          searchFieldStyle: {
            height: '3.9em',
          },
          addRowPosition: 'first'
        }}
      />
    </div>
  )
};

export default TranslationsTable;
