import { useEffect, useState } from "react"
import { Service, ServiceStatus } from "./service"
import { Posts } from "../types/post"


// useGetPostsService returns all blog posts from the service.
const useGetPostsService = () => {
  const [result, setResult] = useState<Service<Posts>>({ status: ServiceStatus.LOADING })

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        return response.json()
      })
      .then(response => {
        setResult({ status: ServiceStatus.LOADED, payload: response })
      })
      .catch(error => {
        setResult({ status: ServiceStatus.ERROR, error })
      })
  }, [])

  return result
}


export default useGetPostsService;
