import React from 'react';
import './css/App.css';
import { laRoutes } from './routes';
import Menu from './component/Menu'
import Footer from './component/Footer'
import TelegramChat from "./component/TelegramChat";

function App() {
  const routes = laRoutes();
  return (
    <div className="App">
      <Menu />
      <div id="to_top"></div>
      {routes}
      <Footer />
      <TelegramChat />
    </div>
  );
}

export default App;
