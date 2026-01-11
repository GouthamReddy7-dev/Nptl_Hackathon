import Chatbot from "./Chatbot";
import Dashboard from "./dashboard";
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Chatbot/>}/>
      <Route path="/admin" element={<Dashboard/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App


/*<Chatbot />
     <Dashboard/> */