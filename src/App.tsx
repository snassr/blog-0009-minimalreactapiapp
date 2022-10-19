import './App.css'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { PostsPage } from './routes/posts/PostsPage'
import { PostPage } from './routes/posts/PostPage'

// setup routes for root (posts) and param w/ id path (post)
const router = createBrowserRouter([
  {
    path: "/",
    element: <PostsPage />,
    errorElement: <h1>500!</h1>,
  },
  {
    path: "/posts/:postId",
    element: <PostPage />,
  }
])


function App() {
  return <RouterProvider router={router} />
}

export default App
