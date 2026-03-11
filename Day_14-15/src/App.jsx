import Counter from "./Counter";
import { Provider } from "react-redux";
import store from "./Stores";
import CustomeCounter from "./CustomCounter";


function App(){

  return(
 <Provider store={store}>
    <Counter />
    <br />
    <br /><br />
    <CustomeCounter/>
  </Provider>
  )
}

export default App;