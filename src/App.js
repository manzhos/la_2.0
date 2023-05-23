import React from 'react';
import './css/App.css';
import { laRoutes } from './routes';
import Menu from './component/Menu'

function App() {
  const routes = laRoutes();
  return (
    <div className="App">
      <Menu />
      {routes}
    </div>
  );
}

export default App;
