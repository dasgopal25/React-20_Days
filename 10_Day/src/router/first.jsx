import {BrowserRouter,Routes,Route,Link} from"react-router";
import Github from "../components/Github";
import Card from "../components/Card";

export default function 
GithubRouter(){
     return(
        <BrowserRouter>
         <nav>
            <Link to="Github">GitHub</Link>
            <Link to="/Github/dasgopal25" >Gopal Das</Link>
         </nav>
        <Routes>
            <Route path="/Github" element={<Github/>}>
                <Route path="/Github/:name" element={<Card/>}></Route>
            </Route>
        </Routes>
        </BrowserRouter>
     )
}