import Home from "./homepage/Home";
import Details from "./details/Details";
import { BrowserRouter, Routes, Route ,useNavigate} from "react-router-dom";

const App=()=> {
  //const navigate = useNavigate();

  

  return(

    <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;
