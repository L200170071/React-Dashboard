import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { createContext, useEffect, useState } from 'react';
import Login from './pages/Login';

// merubah tampilan sidebar ketika diklik
const MyContext = createContext();
// end merubah

function App() {

  const [isToggleSidebar, setisToggleSidebar] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isHideSidebarAndHeader, setisHideSidebarAndHeader] = useState(false);

  const values={
    isToggleSidebar,
    setisToggleSidebar,
    isLogin,
    setIsLogin,
    isHideSidebarAndHeader,
    setisHideSidebarAndHeader
  }


  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <div style={{display: 'flex'}}>
          {
            isHideSidebarAndHeader !== true &&
            <Header/>
          }
        </div>
        <div className='main d-flex' style={{display: 'flex'}}>
          {
            isHideSidebarAndHeader !== true &&
            <div className={`sidebarWrapper ${isToggleSidebar===true ? 'toggle' : ''}`}>
              <Sidebar />
          </div>
          }
          <div className={`content ${isHideSidebarAndHeader === true && 'full'} ${isToggleSidebar===true ? 'toggle' : ''}`}>
            <Routes>
              <Route path="/" exact={true} element={<Dashboard/>} />
              <Route path="/dashboard" exact={true} element={<Dashboard/>} />
              <Route path="/login" exact={true} element={<Login/>} />
            </Routes>
          </div>
        </div>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export {MyContext};
