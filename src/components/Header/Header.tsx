import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Button, Grid, Typography } from '@material-ui/core';

interface Props {
  className?: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {}
  }));

const Header: React.FC<Props> = ({ className, ...rest }: Props) => {
  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Grid
        container
        direction="row"
        spacing={3}
        justify="space-between"
        alignItems="flex-end"
      >
        <Grid
          item
        >
          <Typography
            component="h2"
            gutterBottom
            variant="overline"
          >
            Master Settings
          </Typography>
          <Typography
            component="h1"
            variant="h3"
          >
            Languages
          </Typography>
        </Grid>
        <Grid
          item
        >
          <Button
            color="primary"
            variant="contained"
          >
            Add language
            </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
