import './App.css';
import { useEffect , useState } from 'react';
import UserList from './Component/UserList';
import { UserData } from './Data';
import LoaderHoc from './Share/LoaderHoc';
// import Greet from './Component/Greet';
// import Ref from './Ref';
const UserListWithLoader = LoaderHoc(UserList);
 function App() {
     const [users , setUsers] = useState(null)
     const [loading , setLoading] = useState(true)

     useEffect(()=>{
         setLoading(true)
     setTimeout(()=>{
        setUsers(UserData)
        setLoading(false)
     },3000)

     },[])
     return(
         <div className='App'>
            {/* <Ref /> */}
            {/* <Greet name="Bilal Khattak"/> */}
            <UserListWithLoader isLoading={loading} users={users} />
         </div>
     ) 
 }
     
     
 export default App;