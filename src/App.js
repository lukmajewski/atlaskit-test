import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Dashboard from './components/Dashboard'
import Home from './components/Home'
import Page, {
  Grid,
  GridColumn
} from '@atlaskit/page'

import StarterNavigation from './components/StarterNavigation'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Page
          navigation={<StarterNavigation/>}>
          <Grid>
            <GridColumn medium={8}>
              <Route exact path="/" component={Home}/>
              <Route path="/dashboard" component={Dashboard}/>
            </GridColumn>
            <GridColumn medium={4}>
              Sidebar here...
            </GridColumn>
          </Grid>

        </Page>
      </div>
    );
  }
}

export default App;
