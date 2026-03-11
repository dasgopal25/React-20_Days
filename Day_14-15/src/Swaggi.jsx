import { Provider } from "react-redux";
import Header from "./Header";
import Card from "./Card";
import { store } from "./Stores";



function App(){

  return(
//  <>
// <Header/>
// <Card/>
//   </>
<Provider store={store}>
   <Header />
   <Card/>
</Provider>
  )
}

export default App;