import { Post } from "../types/post"

interface PostLinkProps {
  post: Post
}

export const PostLink = (props: PostLinkProps) => {
  const { post } = props;
  const url = `http://localhost:5173/posts/${post.id}`

  return (
    <>
      <a href={url}>
        {post.title}
      </a>
    </>
  )
}
