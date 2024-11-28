import './assets/css/index.css';


import { BrowserRouter, Route, Routes } from 'react-router';
import { Signin } from './pages/auth/Signin';
import { Signup } from './pages/auth/Signup';
import { Layout } from './pages/Layout';
import { NotFound } from './pages/NotFound';
import { Home } from './pages/Home';
import Services from './pages/Services';




function AppRoutes() {
  return (
    <Routes>
      <Route element={Layout()}>
        <Route index path='/auth/signin' element={Signin()} />
        <Route path='/auth/signup' element={Signup()} />
        <Route path='/' element={Home()} />
        <Route path='*' element={NotFound()} />
        <Route path="/services" element={<Services />} />
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

