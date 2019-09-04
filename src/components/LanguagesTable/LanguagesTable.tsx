import { Button, Chip, CircularProgress, colors, Divider, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import DoneIcon from '@material-ui/icons/Done';
import MaterialTable, { MTableToolbar } from 'material-table';
import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { LanguagesQuery, useLanguagesQuery } from '../../graphql/generated/graphql';
import Flag from '../Flag';

interface Props {
  className?: string;
}

export interface State {
  data: LanguagesQuery[],
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
    },
    chip: {
      margin: theme.spacing(0.25),
    },
    nameContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    avatar: {
      marginRight: theme.spacing(2)
    },
    progress: {
      width: '56px',
      height: '56px'
    },
    progressContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      marginBottom: theme.spacing(1)
    },
    progressLabel: {
      whiteSpace: 'nowrap',
      marginRight: theme.spacing(1)
    }
  }));


const LanguagesTable: React.FC<Props> = ({ className }) => {
  const classes = useStyles();
  const { loading, data } = useLanguagesQuery();
  const [tableData, setTableData] = useState();

  useEffect(() => {
    if (!loading && data) {
      setTableData(data.languages);
    }
  }, [data, loading]);

  return (
    <div className={classes.root} >
      <MaterialTable
        title={
          <Typography variant="h5" component="span">All Languages</Typography>
        }
        columns={
          [
            {
              title: 'Name',
              field: 'languageName',
              render: rowData => (
                <div className={classes.nameContainer}>
                  <Flag languageKey={rowData.languageKey} />
                  <Typography variant="body1">{rowData.languageName}</Typography>
                </div>
              )
            },
            {
              title: 'Locle',
              field: 'languageKey',
              render: rowData => `${rowData.languageKey}-${rowData.languageKey!.toUpperCase()}`
            },
            {
              title: 'Status',
              field: 'isActive',
              sorting: false,
              render: rowData => (
                <div>

                  <Chip size="small" color={rowData.isActive ? 'secondary' : 'default'} variant="outlined"
                    label="Active" className={classes.chip} />
                  {rowData.isDefault &&
                    <Chip size="small" color={rowData.isDefault ? 'secondary' : 'default'} variant="default" clickable={false}
                      label="Default" className={classes.chip} deleteIcon={<DoneIcon />} onDelete={() => (null)} />}
                </div>
              )
            },
            {
              field: 'isDefault',
              hidden: true
            },
            {
              title: 'Translations',
              headerStyle: {
                textAlign: 'right'
              },
              sorting: false,
              render: rowData => (
                <div className={classes.progressContainer}>
                  <div className={classes.progressLabel}>
                    <Typography variant="h6" align="right">
                      99%
                    </Typography>
                    <Typography variant="body1" align="right">
                      Translation Rate
                    </Typography>
                  </div>
                  <CircularProgress className={classes.progress} variant="static" color="secondary" value={99} />
                </div>
              )
            },
            {
              title: 'Actions',
              headerStyle: {
                textAlign: 'right'
              },
              cellStyle: {
                textAlign: 'right'
              },
              sorting: false,
              render: rowData => (
                <Button
                  color="primary"
                  component={RouterLink}
                  size="small"
                  to={`/translations/${rowData.languageKey}`}
                  variant="outlined"
                >
                  Edit Translations
                </Button>
              )
            }
          ]
        }
        isLoading={loading}
        data={tableData}
        actions={[
          {
            icon: 'more_vert',
            tooltip: 'More actions',
            isFreeAction: true,
            onClick: (event) => alert("More...")
          }
        ]}
        components={{
          Toolbar: props => (
            <div>
              <MTableToolbar {...props} />
              <Divider />
            </div>
          ),
        }}
        options={{
          search: false,
          showTitle: true,
          pageSize: 5,
          pageSizeOptions: [5, 10, 30],
          headerStyle: {
            backgroundColor: colors.grey[50]
          }
        }}
      />
    </div >
  );
};

export default LanguagesTable;
