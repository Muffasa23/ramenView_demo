import React from 'react';
//import ModalSwitch from './pages/ModalSwitch';
import Main from './pages/Main';
import StoreInfo from './pages/StoreInfo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={ store }>
      <Router>
        <Route exact path="/" component={ Main } />
        <Route path="/store/:id" component={ StoreInfo } />
      </Router>
    </Provider>
  );
}

export default App;
