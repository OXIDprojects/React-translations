import React from "react";
import clsx from "clsx";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Emojione } from "react-emoji-render";

interface Props {
  languageKey: string;
  className?: string;
}

interface Flag {
  en: string;
  de: string;
  es: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    flagIcon: {
      fontSize: "42px",
      marginRight: theme.spacing(2),
      "& img": {
        margin: "0px !important"
      }
    }
  })
);

const Flag: React.FC<Props> = ({ languageKey, className, ...rest }: Props) => {
  const classes = useStyles();
  const flags: any = {
    en: "flag-gb",
    de: "flag-de",
    es: "flag-mx"
  };
  return (
    <Emojione
      onlyEmojiClassName={clsx(className, classes.flagIcon)}
      text={`:${flags[languageKey]}:`}
      {...rest}
    />
  );
};

export default Flag;
