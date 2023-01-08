import './App.css';
import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
// import About from './components/About';
import OrderSummary from './components/OrderSummary';
import NoMatch from './components/NoMatch';
import Products from './components/Products';
import FeaturedProducts from './components/FeaturedProducts';
import NewProducts from './components/NewProducts';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Admin from './components/Admin';
import Profile from './components/Profile';
import { AuthProvider } from './components/Auth';
import Login from './components/Login';
import RequireAuth from './components/RequireAuth';
const LazyAbout = React.lazy(( ) => import('./components/About'));



function App() {
  return (
    <AuthProvider>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element= {<Home />} />
          <Route path='/about' element={
            <React.Suspense fallback='Loading...'>
              <LazyAbout />
            </React.Suspense>
          } />
          <Route path='products' element={<Products />}>
            <Route index element={ <FeaturedProducts /> } />
            <Route path= 'featured' element={<FeaturedProducts />}></Route>
            <Route path= 'new' element={<NewProducts />}></Route>
          </Route>
          <Route path='/order-summary' element={<OrderSummary />} />
          <Route path='users' element={<Users />}>
            <Route path=':userId' element = {<UserDetails />} />
            <Route path='admin' element = {<Admin />} />
          </Route>
          <Route path='profile' element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          } />
          <Route path ='login' element = {<Login />} />
          <Route path='*' element={ <NoMatch /> } />
        </Routes>
      </div>  
    </AuthProvider>
  );
}

export default App;
