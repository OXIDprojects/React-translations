import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Emojione } from 'react-emoji-render';

interface Props {
  languageKey: string;
  className?: string;
}

interface Flag {
  id: string;
  locale: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    flagIcon: {
      fontSize: '42px',
      marginRight: theme.spacing(2),
      '& img': {
        margin: '0px !important',
      }
    },
  }));

const Flag: React.FC<Props> = ({ languageKey, className, ...rest }: Props) => {
  const classes = useStyles();
  const flags = [
    {
      id: 'en',
      locale: 'gb'
    },
    {
      id: 'de',
      locale: 'de'
    },
    {
      id: 'es',
      locale: 'es'
    }
  ];
  const handleFlag = (languageKey: string) => {
    const flag: string[] = flags
      .filter((flag: Flag) => flag.id === languageKey)
      .map((flag: Flag) => flag.locale);
    return flag[0];
  };
  return (
    <Emojione
      onlyEmojiClassName={clsx(className, classes.flagIcon)}
      text={`:${handleFlag(languageKey)}:`}
      {...rest}
    />
  );
};

export default Flag;
