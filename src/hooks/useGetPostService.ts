import { useEffect, useState } from "react"
import { Service, ServiceStatus } from "./service"
import { Post } from "../types/post"


// useGetPostService returns a blog post's data given an ID.
const useGetPostService = (postId: string | undefined) => {
  const [result, setResult] = useState<Service<Post>>({ status: ServiceStatus.LOADING })

  useEffect(() => {
    if (postId) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => {
          return response.json()
        })
        .then(response => {
          setResult({ status: ServiceStatus.LOADED, payload: response })
        })
        .catch(error => {
          setResult({ status: ServiceStatus.ERROR, error })
        })
    }

  }, [])

  return result
}


export default useGetPostService;
