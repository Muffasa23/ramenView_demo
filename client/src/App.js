import React from 'react';
import ModalSwitch from './pages/ModalSwitch';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={ store }>
      <Router>
        <Route component={ ModalSwitch } />
      </Router>
    </Provider>
  );
}

export default App;
