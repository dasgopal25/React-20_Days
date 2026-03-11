import Card from "./Card"
import Header from "./Header"
import { Provider } from "react-redux";
import {store} from "./Store";


Header
function App() {
  return (
      <Provider store={store}>
        <Header />
        <Card />
      </Provider>
  )
}

export default App
