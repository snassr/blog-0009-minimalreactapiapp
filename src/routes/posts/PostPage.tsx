import { Post } from "../../types/post"
import { useParams } from 'react-router-dom'
import useGetPostService from "../../hooks/useGetPostService"
import { ServiceStatus } from "../../hooks/service"

export const PostPage = () => {
  const { postId } = useParams();
  const service = useGetPostService(postId);

  return (
    <>
      {(() => {
        switch (service.status) {
          case ServiceStatus.LOADING:
            return <p>Loading...</p>
          case ServiceStatus.ERROR:
            return <p>Error...</p>
          case ServiceStatus.LOADED:
            return Page(service.payload)
          default:
            return <p>{service.status}</p>
        }
      })()}
    </>
  )
}


const Page = (post: Post) => {
  return (
    <>
      <h1>Post {post.id}</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </>
  )
}
