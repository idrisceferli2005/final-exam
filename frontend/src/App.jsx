
import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Catalogs from './pages/Catalogs'
import Contact from './pages/Contact'
import Notfound from './pages/Notfound'
import Collection from './pages/Collection'
import AdminPanel from './pages/admin/Admin'
import Basket from './pages/basket/Basket'
import Wishlist from './pages/wishlist/Wishlist'
import Detail from './pages/deteil/Deteil'

function App() {
const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <Layout/>,
      children: [
        {
          path:"/",
          element: <Home/>
        },
        {
          path:"/shop",
          element: <Shop/>
        },
        {
          path:"/catalogs",
          element: <Catalogs/>
        },
        {
          path:"/contact",
          element: <Contact/>
        },
        {
          path:"/collection",
          element: <Collection/>
        },
        {
          path:"/admin",
          element: <AdminPanel/>
        },
        {
          path:"/basket",
          element: <Basket/>
        },
        {
          path:"/wishlist",
          element: <Wishlist/>
        },
        {
          path:"/detail/:id",
          element: <Detail/>
        },
      
      ]
    
    },
    {
      path: "*",
      element: <Notfound/>
    }
  ]
)

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
