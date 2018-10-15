import React from 'react';
import ReactDOM from 'react-dom';
import BaseContainer from './share/containers/BaseContainer';
import { AppContainer } from 'react-hot-loader';
import AppRouter from './router';

ReactDOM.render(
    <AppContainer>
        <BaseContainer component={AppRouter} />
    </AppContainer>,
    document.getElementById("root")
);
