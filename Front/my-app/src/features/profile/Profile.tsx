import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Button, InputGroup } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { loginAsync, logout, newLoginAsync, refreshAsync, selectAccess, selectLogged, selectUserName, selectUser_id } from "../Login/loginSlice";
import Register from "../Login/Register";
import { addProfileAsync } from "./profileSlice";


const Profile = () => {
const dispatch = useAppDispatch();
const logged = useAppSelector(selectLogged);
const [address, setadress] = useState("")
const [phone_number, setphone] = useState("")
const [age, setAge] = useState(0)

const access= useAppSelector(selectAccess)
const username= useAppSelector(selectUserName)

// useEffect(() => {
//   const tmp: any = localStorage.getItem('refresh')
//   { tmp && dispatch(refreshAsync(tmp)) }
// }, [])


      
    
     
  return (
   
    <div><div>
        <InputGroup className="mb-3">
       Adress: <input value={address} onChange={(e) => setadress(e.target.value)} />
       Phone-Number: <input value={phone_number} onChange={(e) => setphone(e.target.value)} />
       Age: <input value={age} onChange={(e) => setAge(+e.target.value)} />
        <Button variant="info"onClick={() =>dispatch(addProfileAsync(({address,phone_number,age})))} >Add</Button>
    </InputGroup></div>

    </div>
    
  )
}

export default Profile