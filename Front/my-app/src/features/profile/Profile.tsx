import { Box, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { InputGroup } from "react-bootstrap";
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
   
    <div>
      
       <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      
    
        <TextField
          id={address}
          label="address"
          type="adress"
          onChange={(e) => setadress(e.target.value)}
        />
         <TextField
          id={phone_number}
          label="phone-number"
          type="adressphone_number"
          onChange={(e) => setphone(e.target.value)}
        />
        <TextField
          id="outlined-number"
          label="Age"
          type="number"
          onChange={(e) => setAge(+e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        </div>
        </Box>
        <Button variant="contained"onClick={() =>dispatch(addProfileAsync(({address,phone_number,age})))} >Save</Button>
   
    
    </div>
    
  )
}

export default Profile