import {useQuery} from "@tanstack/react-query"
import fetchDog from "./fetchDog";
import { useParams } from "react-router";


function DetailedInfoAboutCharacters() {
  let { id } = useParams();
const {data,error, isError, isLoading} = useQuery({
  queryKey:["dogs", id],
  queryFn: () =>  fetchDog(id)
})

if (isLoading) {
  return <div>Loading...</div>
}
if (isError) {
  return <div>Error! {error.message}</div>
}

  return (
    <div className="dogCards__dog">
        <img src={data.image}  width="500px"/>
      <h1>
      {data.title}
      </h1>
        <p>{data.text}</p>
    </div>
  )
}

export default  DetailedInfoAboutCharacters;