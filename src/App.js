import axios from "axios";
import { useEffect, useState } from "react";
import Card from  "./components/Card";



const App = () => {

  const [user, setUser ] = useState()
  // const [loading,setLoading] =useState(true)
  const url="https://randomuser.me/api/";

  const getUserRandom=async()=>{
    const {data}=await axios.get(url);
    setUser(data.results[0])
    // setLoading(false)
  }
  // getUserRandom()

  useEffect(()=>{
   getUserRandom()
  },[])

  // if(loading){
  //   return <h2>Loading...</h2>
  // }
 
   console.log(user);

  return (
    <div className="container text-center">
      <h1>UserList</h1>
      <div className="card-container bgColor">
    
      {user && <Card user={user}/>}
       
      </div>

      <button className="btn btn-danger mt-4" onClick={()=>getUserRandom()}>
        Random User
      </button>
    </div>
    
  )
}

export default App


//*