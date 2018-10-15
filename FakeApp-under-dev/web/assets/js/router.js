import React from 'react';
import { BrowserRouter, Route, HashRouter, Switch } from 'react-router-dom';
import HomeContainer from './home/containers/HomeContainer';
import AnalyseContainer from './analyse/containers/AnalyseContainer';
import DeveloperContainer from './developer/containers/DeveloperContainer';
import ResultPageContainer from './result/containers/ResultPageContainer';
import RecordPageContainer from './records/containers/RecordPageContainer';
import LoginContainer from './login/containers/LoginContainer';

const DEV = process.env.NODE_ENV !== 'production';
const DEBUG = process.env.DEBUG === 'true';

const MyRouter = (DEV && !DEBUG) ? HashRouter : BrowserRouter;

function AppRouter() {
  return (
    <div>
      <MyRouter>
        <div style={{ height: '100%' }}>
          <Switch>
            <Route path="/" exact component={HomeContainer} />
            <Route path="/home" exact component={HomeContainer} />
            <Route path="/analyse" component={AnalyseContainer} />
            <Route path="/developer" component={DeveloperContainer} />
            <Route path="/history" component={RecordPageContainer} />
            <Route path="/result" component={ResultPageContainer} />
            <Route path="/login" component={LoginContainer} />
          </Switch>
        </div>
      </MyRouter>
    </div>
  );
}

export default AppRouter;
