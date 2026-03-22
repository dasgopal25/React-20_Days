import Restaurant from "./components/Restaurant"
import Home from "./components/Home"
import { BrowserRouter, Routes, Route } from "react-router";
import RestaurantMenu from "./components/RestaurantMenu";
import SearchFood from "./components/SearchFood";
import Selecter from "./components/Selecter";
import store from '../src/components/Store/Store'
import { Provider } from 'react-redux'
import CheckOut from "./components/CheckOut";


function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<Selecter />}>
            <Route path="/Restaurant" element={<Restaurant />} />
            <Route path="/city/kolkata/:id" element={<RestaurantMenu />} />
            <Route path="/city/kolkata/:id/search" element={<SearchFood />} />
            <Route path="/checkOut" element={<CheckOut />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App