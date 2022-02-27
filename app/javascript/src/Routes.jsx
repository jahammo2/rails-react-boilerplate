import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';

import Dashboard from 'src/pages/Dashboard';

function Routes() {
  /* eslint-disable max-len */
  return (
    <Switch>
      <Route element={ <Dashboard /> } path="/" />
    </Switch>
  );
  /* eslint-enable max-len */
}

export default Routes;
