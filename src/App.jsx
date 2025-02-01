
import 'bootstrap/dist/css/bootstrap.min.css';
import Blogs from './components/Blogs';
import { Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Create from './components/Create';
import { ToastContainer,   } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BlogsDetail from './components/BlogsDetail';
import Editblogs from './components/Editblogs';
function App() {

  return (
    <>
      <div className="bg-dark p-2 text-light text-center showdow-lg">
      <h1>laravle-blog-app</h1>
      </div>
       {/* <Blogs/> */}
       <Routes>
          <Route path='/' element={<Blogs/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/detail/:id' element={<BlogsDetail/>}/>
          <Route path='/edidt-blogs/:id' element={<Editblogs/>}/>
       </Routes>
       <ToastContainer />
    
    </>
  )
}

export default App
