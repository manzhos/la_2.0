import React from 'react';
import './css/App.css';
import { laRoutes } from './routes';

function App() {
  const routes = laRoutes();
  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
