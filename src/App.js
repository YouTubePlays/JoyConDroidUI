import React from 'react';
import { Route, BrowserRouter as Router, withRouter } from 'react-router-dom';
import Tutorial from './components/Tutorial';
import Faq from './components/Faq';
import Legal from './components/Legal';


function App() {
  return (
    <Router>
      <Route path='/' render={() => <PathWithRouter/>} />
    </Router>
  );
}


function Path(props) {
  const query = new URLSearchParams(props.location.search);
  const page = query.get('page');
  switch (page) {
    case 'faq': return (<Faq />);
    case 'legal': return (<Legal/>);
    default: return (<Tutorial />);
  }
}

const PathWithRouter = withRouter(Path);
export default App;
