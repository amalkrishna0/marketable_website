import React, { useEffect ,useState} from 'react';
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';

import { gapi } from 'gapi-script';
import axios from 'axios';

function Register() {
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const history = useNavigate();

    
  const clientId='415298408552-lm7migunau5123ifpofpd995aam8n3vu.apps.googleusercontent.com';
  useEffect(()=>{
    gapi.load("client:auth2",()=>{
      gapi.auth2.init({clientId:clientId})
    })
  },[])



  const responseGoogle=(response)=>{
    console.log(response['wt']);
    setName(response['wt']['Ad'])
    setEmail(response['wt']['cu'])


    axios.post('http://localhost:4000/register', { name, email })
            .then(result => {
                console.log(result.data); // Log the response data
                if (result.data.success) {
                    // Registration successful, redirect to login page
                    history('/login');
                } else {
                    // Registration failed, handle error
                    alert(result.data.message || "Registration failed"); // Show error message or a default message
                }
            })
            .catch(error => {
                console.error('Error:', error);
                // Handle any network or server errors
                alert('An error occurred. Please try again later.');
            });

    
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <GoogleLogin
        clientId="415298408552-lm7migunau5123ifpofpd995aam8n3vu.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle} // You can handle failure as well
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default Register;
