import { Provider } from 'react-redux'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Cart from './components/Cart'
import Products from './components/Products'
import RootLayout from './components/RootLayout'
import store from './store/store'

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Products />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
    </Route>
  ))

  return (
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </Provider>
  )
}

export default App

