import { Link, Typography } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import React from 'react';

interface Props {
  className?: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(4),
    },
    icon: {
      fontSize: '12px',
      lineHeight: '17px'
    }
  }));

const Footer: React.FC<Props> = ({ className, ...rest }: Props) => {
  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Typography variant="body1">
        &copy;{' '}
        <Link
          component="a"
          href="http://oxidforge.org"
          target="_blank"
        >
          Oxid eSales - Oxid Projects
        </Link> 2019
      </Typography>
      <Typography variant="caption">
        Module Translations was <Icon className={classes.icon}>code</Icon> with <Icon className={classes.icon}>favorite</Icon> by
        developers who <Icon className={classes.icon}>thumb_up</Icon> to work together with OXID!
      </Typography>
    </div>
  );
};

export default Footer;
