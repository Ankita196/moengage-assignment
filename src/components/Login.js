import {useState,useRef } from "react";
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Link} from "react-router-dom"
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding:90,
    display:'flex',
    flexDirection:"column"
  },
  paper: {
    height:430,
    width:370,
    backgroundColor:"#eeeeee",
   padding:40,
  display:"block",
  marginLeft:"auto",
  marginRight:"auto"
  },
 
  heading :{
    color:'#002884',
     display:"block",
  marginLeft:60,
  marginRight:"auto",
   fontSize:30,
    fontWeight:"bold"

  },
  subheading:{
    color:'#002884',
   textAlign:"left",
    fontSize:15,
   
    
  },
  input:{
    backgroundColor:"white"
  },
  album :{
    color:"pink",
    fontSize:40
  },
  image:{
    height:100,
    width:100},
  div1 :{
    display:"flex",
    flexDirection:"row"
  } ,
 div2 :{
marginLeft:70
 },
  link:{
    textDecoration:"none",
    color:"white"
  },
  button:{
    width:230
  }

}));


export default function Signin(props) {
 const classes = useStyles();
 const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const routeChange = () =>{ 
    let path = `/anime`; 
    history.push(path);
  }


  return (
    
     <>
      <div className={classes.root}>
        
     
        <br/><br/>
         <div className={classes.div1}>
        <Paper className={classes.paper}>
          <div className={classes.div2}>
        <Typography className={classes.heading}>Login</Typography>
        <br /><br />
        <Typography className={classes.subheading}> Enter username or mail id </Typography>
        
        <TextField
        variant="outlined"
          type="text"
          placeholder="Enter username or mail id "
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <br /><br />
        
       
        <br />
        <Typography className={classes.subheading}> Enter Password </Typography>
        <TextField
        variant="outlined"
          type="text"
           placeholder="Enter Password "
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
        <br /><br />
       
         <Button variant="contained" color="primary" type="submit"  onClick={()=>{props.setIsAuth(true)}} className={classes.button} onClick={routeChange}> Login</Button><br/><br/>
          <Link to="/signup">
                Don't have an account? Sign Up
              </Link>
              </div>
          </Paper>  
        </div>
         
         
    </div>
   </>
  );
}

