import axios from "axios";
type DOGS ={ 
    id:number,
    image: string,
    title:string,
    text:string
   }
   
async function fetchPosts() {
    const { data } = await axios.get<DOGS[]>("http://localhost:3004/dogs")
    return data
}
    
export default fetchPosts;