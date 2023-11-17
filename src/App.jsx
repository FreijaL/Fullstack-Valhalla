import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SplashPage from './pages/SplashPage';
import MenuPage from './pages/MenuPage';
import ProductInfoPage from './pages/ProductInfoPage';
import LoginPage from './pages/LoginPage';

import CartPage from './pages/users/CartPage';
import PaymentPage from './pages/users/PaymentPage';
import ConfirmationPage from './pages/users/ConfirmationPage';
import SignUpPage from './pages/users/SignUpPage';
import AboutUsPage from './pages/users/AboutUsPage';

import KitchenPage from './pages/staff/KitchenPage';
import ServicePage from './pages/staff/ServicePage';
import GuidePage from './pages/staff/GuidePage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/productinfo" element={<ProductInfoPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/cart" element={<CartPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />

        <Route path="/kitchen" element={<KitchenPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/guide" element={<GuidePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
