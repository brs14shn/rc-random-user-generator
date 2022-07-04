import axios from "axios";
import { useEffect, useState } from "react";
import Card from  "./components/Card";
import "./App.css";



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
    <>
    <div className="container vh-100 text-center bg-info  bgColor min-container-width">
      
      <div className="container d-flex flex-column w-50 min-width bg-warning boxShadow  mt-4 bRadius vh-40">
    
     {user && <Card user={user}/>}
      </div>
      <div className="text-center mt-5">
    <button className="btn btn-danger mt-4 text-center " onClick={()=>getUserRandom()}>
        Random User
    </button>
    </div>
    </div>
    
    </>
    
  )
}

export default App


//*