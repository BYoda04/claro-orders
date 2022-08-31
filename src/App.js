import './App.css';
import './styles/home.css';
import './components/nav-top/navtop.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './components/ProtectedRoutes';
import Login from './pages/Login';
import Home from './pages/Home';
import User from './pages/User';
import Navtop from './components/nav-top/Navtop';

function App() {
  return (
    <HashRouter>
      <>
        <Navtop />

        <Routes>

          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>

            <Route element={<ProtectedRoutes />}>
              <Route path='/home' element={<User />}/>
            </Route>

        </Routes>
      </>
    </HashRouter>
  );
}

export default App;
