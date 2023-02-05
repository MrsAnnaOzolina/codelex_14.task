import axios from "axios";
type DOGS ={ 
    id:number,
    image: string,
    title:string,
    text:string
   }
   
async function fetchDog( id:number ) {
    const { data } = await axios.get<DOGS[]>(`http://localhost:3004/dogs/${id}`)
    return data
}
    
export default fetchDog;