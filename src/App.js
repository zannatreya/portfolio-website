import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Blogs from "./components/Blogs";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <div>
     <Header/>
     <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        {/* <Route path='/projects' element={<Projects />} ></Route> */}
        {/* <Route path='/projects/:id' element={<ProjectDetails></ProjectDetails>}></Route> */}
        <Route path='/contact' element={<ContactMe></ContactMe>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      </Routes>     <Footer/>
    </div>
  );
}

export default App;
