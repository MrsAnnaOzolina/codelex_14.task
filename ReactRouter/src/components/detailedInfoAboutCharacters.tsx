import {useQuery} from "@tanstack/react-query"
import fetchDog from "./fetchDog";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

type Dogs ={ 
  id:number,
  image: string,
  title:string,
  text:string
 }

function DetailedInfoAboutCharacters() {
  let { id } = useParams<{id:string}>();
  const navigate = useNavigate();
  const goBack = () => {
		navigate(-1);
	}
const {data, isError, isLoading} = useQuery <Dogs[]>({
  queryKey:["dogs", id],
  queryFn: () =>  fetchDog(id!)
})

if (isLoading) {
  return <div>Loading...</div>
}
if (isError || !data) {
  navigate('/')
  return null
  // <div>Error!</div>
}

  return (
    <div className="dogCards__dog">
        <img src={data.image}  width="500px"/>
      <h1>
      {data.title}
      </h1>
        <p>{data.text}</p>
        <button className="waves-effect waves-light btn" onClick={goBack}>back</button>
    </div>
  )
}

export default  DetailedInfoAboutCharacters;