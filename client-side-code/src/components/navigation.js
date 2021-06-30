import { Navbar} from "react-bootstrap"
import { Button } from "@material-ui/core";
import { useAuth } from "../contexts/Authcontex";
import { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";

export const Navigation = (props) => {
  const [error, setError] = useState();
  const {logOut, currUser} = useAuth();
  const history = useHistory();

  const handleLogout = async () => {
    setError('')
    try{
      await logOut();
      history.push("/");
      window.location.reload();
    }catch(err){
      setError("Failed to Log")
    }
  }
  return (
    <Navbar id='menu' className='d-flex navbar-default navbar-fixed-top' style = {{marginBottom : "0px"}}>
      <div className = 'w-100'>
        <div className='navbar-header'>
          <a className='d-flex align-items-center justify-content-center navbar-brand page-scroll' href='/'>
            Shishu Teams
          </a>
        </div>
        {/* <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        > */}
          <ul className=' nav navbar-nav navbar-right d-flex justify-content-between'>

            <li className = 'd-flex flex-row'>
              <a href='/#features' className='page-scroll' style = {{textDecoration : "none"}}>
                Features
              </a>
              <a href='/#about' className='page-scroll' style = {{textDecoration : "none"}}>
                About
              </a>
              <a href='/videoCall' className='page-scroll' style = {{textDecoration : "none"}}>
                Let's Video Call
              </a>
              <a href='/draw' className='page-scroll' style = {{textDecoration : "none"}}>
                Let's Draw
              </a>
              <span style = {{width : "400px"}}></span>
            </li>

            <li>
              {!currUser && (<span style = {{marginRight : "10px"}}>
                <Button style = {{fontSize : "15px"}} variant="contained" color="primary" onClick={() => history.push("/login")}>
                  Log In
                </Button></span>
              )}

              {!currUser && (<span style = {{marginRight : "10px"}}>
                <Button style = {{fontSize : "15px"}} variant="contained" color="primary" onClick={() => history.push("/signup")}>
                  Sign Up
                </Button>
              </span>)}

              {currUser && (<span>
                <Button style = {{fontSize : "15px"}} variant="contained" color="primary" onClick={handleLogout}>
                  Log Out
                </Button>
              </span>)}
            </li>
          </ul>
        {/* </div> */}
      </div>
    </Navbar>
  )
}