import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Login } from '../features/Login/Login';
import Register from '../features/Login/Register';
import { NavDropdown } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { logout, refreshAsync, selectLogged, selectUserName } from '../features/Login/loginSlice';


const  MyNav = () => {
  const logged = useAppSelector(selectLogged);
  const userName = useAppSelector(selectUserName);
  const dispatch = useAppDispatch();
  useEffect(() => {
      const tmp: any = localStorage.getItem('refresh')
      { tmp && dispatch(refreshAsync(tmp)) }
  }, [])

  return (

    
    <div>
 <Navbar bg="dark" variant="dark" style={{
borderBottom: "solid 1px", paddingBottom: "1rem", color:"white" }} expand="lg" collapseOnSelect>
             <Nav className="me-auto">
              <Link to={"/ProductAdmin"}>ProductAdmin</Link>|{" "}
            <Link to="/Shop"><i className="fas fa-shopping-cart"></i>Cart</Link>|{" "}
            <Link to={"/Reviews"}>Reviews</Link>|{" "}  
            {logged ? (
                                <NavDropdown title={userName} id='username'>
                              
                                        <NavDropdown.Item> <Link to="/Profile">Add Profile</Link></NavDropdown.Item>
                                   

                                    <NavDropdown.Item  onClick={() => dispatch(logout())}>Logout</NavDropdown.Item>
                                  
                                </NavDropdown>
                            ) : (
                                  
                                        <Link to='/login'><i className="fas fa-user"></i>Login</Link>
                                 
                                )}
            {/* <Login></Login> */}
           
           </Nav> 
        </Navbar>






    </div>
  )
}

export default MyNav