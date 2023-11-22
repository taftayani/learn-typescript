import axios from "axios"
import { useQuery } from "react-query"

export const useListUsers = () =>
{
    return useQuery(["list"], () => { return axios.get(process.env.NEXT_PUBLIC_BASE_URL+"/posts")})
}