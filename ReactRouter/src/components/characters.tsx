import {useQuery} from "@tanstack/react-query"
import fetchPosts from "./fetchPosts"
import './CSS/characters.css'

 type DOGS ={ 
  id:number,
  image: string,
  title:string,
  text:string
 }


function Characters() {
const {data,error, isError, isLoading} = useQuery({
  queryKey:["dogs"],
  queryFn: fetchPosts
})

if (isLoading) {
  return <div>Loading...</div>
}
if (isError) {
  return <div>Error! {error.message}</div>
}

  return (
    <div id="characters">
      <h1>Dogs</h1>
      <div className="dogCards">
      {data.map( dog => {
        return  <div key={dog.id} className="dogCards__dog">
                    <h1  >{dog.title}</h1>
          {/* <img src={dog.image} width="300px"/><br></br> */}
              <a   target="_blank"
              href={`characters/${dog.id}`}
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