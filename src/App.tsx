import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/scss/index.scss';

import Main from './layouts/Main';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Main />
        </ThemeProvider>
    );
};

export default App;
