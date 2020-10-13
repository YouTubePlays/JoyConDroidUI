import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Tutorial from './components/Tutorial';

function App() {
  return (
    <Router>
        <Route path='/' render={()=><Tutorial/>}/>
    </Router>
  );
}

export default App;
