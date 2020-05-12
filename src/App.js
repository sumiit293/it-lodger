import React, { useEffect, Fragment } from 'react';
import SearchBar from './component/layout/SearchBar'
import Logs from './component/logs/Logs'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min'
import AddBtn from './component/layout/AddBtn'
import AddLogModal from './component/logs/AddLogModal'
import EditLogModal from './component/logs/EditLogModal'
import AddTechModal from './component/techs/AddTechModal'
import TechListModal from './component/techs/TechListModal'
import { Provider } from 'react-redux';
import store from './store'
import './App.css';

const App = () => {
  useEffect(() => {
    //Init Materialize Js
    M.AutoInit();
  })
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className="container">
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </div>
      </Fragment>
    </Provider>
  );
}

export default App;
