import { PostLink } from "../../components/PostLink";
import useGetPostsService from "../../hooks/useGetPostsService";
import { ServiceStatus } from "../../hooks/service";

export const PostsPage = () => {
  const service = useGetPostsService();

  return (
    <div className="App">
      <h1>Posts</h1>
      <>
        {(() => {
          switch (service.status) {
            case ServiceStatus.LOADING:
              return <p>Loading...</p>
            case ServiceStatus.ERROR:
              return <p>Error...</p>
            case ServiceStatus.LOADED:
              return (
                service.payload.map((post) => {
                  return (
                    <div key={post.id}>
                      <PostLink post={post} />
                    </div>
                  )
                })
              )
            default:
              return <p>{service.status}</p>
          }
        })()}
      </>
    </div>
  );
}

export default PostsPage;
