import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainPage from './pages/MainPage'
import 'bootstrap/dist/css/bootstrap.min.css'
import RecipesPage from './pages/RecipesPage'
import DishPage from './pages/DishPage'
import ActivatePage from './pages/ActivatePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ResetPasswordPage from './pages/ResetPasswordPage'
import Header from "./components/Header/Header";
import NotFoundPage from "./pages/NotFountPage";



function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/account-activate" element={<ActivatePage />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path=":id" element={<DishPage />} />

          <Route path="*" element={<NotFoundPage />}/>
        </Routes>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
