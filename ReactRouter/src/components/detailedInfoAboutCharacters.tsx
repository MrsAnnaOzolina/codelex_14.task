import {useQuery} from "@tanstack/react-query"
import fetchDog from "./fetchDog";
import { useParams } from "react-router";

type DOGS ={ 
  id:number,
  image: string,
  title:string,
  text:string
 }

function DetailedInfoAboutCharacters() {
  let { id } = useParams();
const {data, isError, isLoading} = useQuery <DOGS[]>({
  queryKey:["dogs", id],
  queryFn: () =>  fetchDog(id)
})

if (isLoading) {
  return <div>Loading...</div>
}
if (isError || !data) {
  return <div>Error!</div>
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