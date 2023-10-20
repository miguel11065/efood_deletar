import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'
import Home from './pages/Home'
import Pratos from './pages/Restaurante'
import Footer from './components/Footer'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/pratos',
    element: <Pratos />
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <RouterProvider router={rotas} />
      <Footer />
    </>
  )
}

export default App
// |
