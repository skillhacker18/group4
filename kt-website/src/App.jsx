import './assets/css/index.css';

import { BrowserRouter, Route, Routes } from 'react-router';
import { Signin } from './pages/auth/Signin';
import { Signup } from './pages/auth/Signup';
import { Layout } from './pages/Layout';
import { NotFound } from './pages/NotFound';
import { Home } from './pages/Home';
import { Upload } from './pages/Upload';
import { Contact } from './pages/Contact';
import { About } from './pages/About'
import { useToken } from './hooks/useToken';
import { TokenContext } from './contexts/TokenContext';


function AppRoutes() {
  return (
    <Routes>
      <Route element={Layout()}>
        <Route index path='/auth/signin' element={Signin()} />
        <Route path='/auth/signup' element={Signup()} />
        <Route path='/' element={Home()} />
        <Route path='/contact' element={Contact()} />
        <Route path='/upload' element= {Upload()}/>
        <Route path='/about' element= {About()}/>
        <Route path="/services" element={Services()} />
        <Route path='*' element={NotFound()} />
      </Route>
    </Routes>
  )
}

export function App() {
  const { token, setToken } = useToken();
  return (
    <TokenContext.Provider value={{ token, setToken }}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TokenContext.Provider>
  )
}

