import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {Toaster } from 'react-hot-toast';

import BlogLandingPage from './pages/Blog/BlogLandingPage';
import BlogPostview from './pages/Blog/BlogPostView';
import PostByTags from './pages/Blog/PostByTags';
import SearchPosts from './pages/Blog/SearchPosts';
import AdminLogin from './pages/Admin/AdminLogin';
import PrivateRoute from './routes/PrivateRoute';
import Dashboard from './pages/Admin/Dashboard';
import BlogPosts from './pages/Admin/BlogPosts';
import BlogPostEditor from './pages/Admin/BlogPostEditor';
import Comments from './pages/Admin/Comments';


const App = () => {
  return (
    <div >
      <Router>
        <Routes>
          {/* default routes */}
          <Route path="/" element={<BlogLandingPage/>} />
          <Route path="/:slug" element={<BlogPostview/>} />
          <Route path="/tag/:tagName" element={<PostByTags/>} />
          <Route path="/search" element={<SearchPosts/>} />

          {/* admin routes */}
          <Route element={<PrivateRoute allowedRoles={["admin"]}/>}>  
            <Route path="/admin/dashboard" element={<Dashboard/>} />
            <Route path="/admin/posts" element={<BlogPosts/>} />
            <Route path="/admin/create" element={<BlogPostEditor/>} />
            <Route 
            path="/admin/edit/:postslug" 
            element={<BlogPostEditor isEdit={true}/>} 
            />
            <Route path="/admin/comments" element={<Comments/>} />
          </Route>


            <Route path="/admin-login" element={<AdminLogin/>} />  
        </Routes>
      </Router>
    </div>
  )
}

export default App