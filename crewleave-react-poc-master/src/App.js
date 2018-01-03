import React, { Component } from 'react';
import './styles/styles.css';
import ShowQuota from './containers/show-quota';
require('../node_modules/crewmodules-design-system/dist/css/crewmodules-design-system.css');

class App extends Component {
  render() {
    return (
	<div>	
		<div className="app-header">
			<div className="app-heading"><h3>CREW LEAVE</h3> </div>
			<div className="cds-logo_without-boeing-margin-50-percent app-logo" > </div>
       </div>
		<ShowQuota />
	</div>	
    );
  }
}

export default App;
