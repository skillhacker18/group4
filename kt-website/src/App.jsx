import './assets/css/index.css';

import { BrowserRouter, Route, Routes } from 'react-router';
import { Signin } from './pages/auth/Signin';
import { Signup } from './pages/auth/Signup';
import { Layout } from './pages/Layout';
import { NotFound } from './pages/NotFound';
import { Home } from './pages/Home';
import { useToken } from './hooks/useToken';
import { TokenContext } from './contexts/TokenContext';
import { Upload } from './pages/Upload';
import { Services } from './pages/Services';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Account } from './pages/Account';
import { OrderDetails } from "./pages/OrderDetails";
import { OrderHistory } from "./pages/OrderHistory";
import { OrderTracking } from "./pages/OrderTracking";

function AppRoutes() {
  return (
    <Routes>
      <Route element={Layout()}>
        <Route index path='/auth/signin' element={Signin()} />
        <Route path='/auth/signup' element={Signup()} />
        <Route path='/' element={Home()} />
        <Route path='/upload' element={Upload()} />
        <Route path='/services' element={Services()} />
        <Route path='/about' element={About()} />
        <Route path='/contact' element={Contact()} />
        <Route path='/account' element={Account()} />
        <Route path='/orderhistory' element={OrderHistory()} />
				<Route path='/ordertracking' element={OrderTracking()} />
				<Route path='/orderdetails' element={OrderDetails()} />
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

