import { ReactElement } from "react";
import { BrowserRouter , Routes,Route} from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";

function App(): ReactElement {
  return <BrowserRouter>
  <Routes>
<Route path="/" element={<Homepage />}>  </Route>
  </Routes>
  
  </BrowserRouter>
 
  
}
export default App;


