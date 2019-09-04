import React from 'react';
import { useRouter } from '../../hooks';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Tabs, Tab, Divider, colors } from '@material-ui/core';

import { Header, LanguagesTable, TranslationsTable } from '../../components';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(3)
  },
  tabs: {
    marginTop: theme.spacing(3)
  },
  divider: {
    backgroundColor: colors.grey[300]
  },
  content: {
    marginTop: theme.spacing(3)
  }
}));

const Languages = () => {
  const classes = useStyles();

  const router = useRouter<{ tab: string }>();
  const { match: { params: { tab } } } = router;

  const handleTabsChange = (
    event: React.ChangeEvent<{}>,
    tab: string) => {
    router.history.push(`/${tab}`);
  };

  const tabs = [
    { value: 'overview', label: 'Overview' },
    { value: 'translations', label: 'Translations' }
  ];

  return (
    <div className={classes.root}>
      <Header />
      <Tabs
        className={classes.tabs}
        onChange={handleTabsChange}
        scrollButtons="auto"
        value={tab}
        variant="scrollable"
      >
        {tabs.map(tab => (
          <Tab
            key={tab.value}
            label={tab.label}
            value={tab.value}
          />
        ))}
      </Tabs>
      <Divider className={classes.divider} />
      <div className={classes.content}>
        {tab === 'overview' && <LanguagesTable />}
        {tab === 'translations' && <TranslationsTable />}
      </div>
    </div>
  );
};

export default Languages;
