import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store'



// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />
//   },
//   {
//     path: '/recipes',
//     element: <RecipesPage />
//   },
//   {
//     path: ":id",
//     element: <DishPage />
//   },
//   {
//     path: "/login",
//     element: <LoginPage />
//   },
//   {
//     path: "/register",
//     element: <RegisterPage />
//   },
//   {
//     path: "/reset-password",
//     element: <ResetPasswordPage />
//   },
//   {
//     path: "/account-activate",
//     element: <ActivatePage />
//   }
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <RouterProvider router={router} /> */}
      {/* <ToastContainer /> */}
      <App />
    </Provider>
    
  </React.StrictMode>,
)
