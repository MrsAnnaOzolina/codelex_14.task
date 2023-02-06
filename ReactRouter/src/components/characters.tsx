import {useQuery} from "@tanstack/react-query"
import fetchPosts from "./fetchPosts"
import './CSS/characters.css'

 type Dogs ={ 
  id:number,
  image: string,
  title:string,
  text:string
 }


function Characters() {
const {data, isError, isLoading} = useQuery<Dogs[]>({
  queryKey:["dogs"],
  queryFn: fetchPosts
})


if (isLoading) {
  return <div>Loading...</div>
}
if (isError || !data) {
  return <div>Error!</div>
}

  return (
    <div id="characters">
      <h1>Dogs</h1>
      <div className="dogCards">
      {data.map( dog => {
        return  <div key={dog.id} className="dogCards__dog">
                    <h1  >{dog.title}</h1>
          {/* <img src={dog.image} width="300px"/><br></br> */}
              <a  href={`characters/${dog.id}`}
              >
                Click on to find out more about dog
              </a>
          </div>
      })
      
    }
    </div>
    </div>
  )
}

export default  Characters;