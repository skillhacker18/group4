import './assets/css/index.css';

import { BrowserRouter, Route, Routes } from 'react-router';
import { Signin } from './pages/auth/Signin';
import { Signup } from './pages/auth/Signup';
import { Layout } from './pages/Layout';
import { NotFound } from './pages/NotFound';
import { Home } from './pages/Home';


function AppRoutes() {
  return (
    <Routes>
      <Route element={Layout()}>
        <Route index path='/auth/signin' element={Signin()} />
        <Route path='/auth/signup' element={Signup()} />
        <Route path='/' element={Home()} />
        <Route path='*' element={NotFound()} />
      </Route>
    </Routes>
  )
}

export function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

