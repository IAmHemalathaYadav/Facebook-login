import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import { Card, Image } from 'react-bootstrap';
import './App.css';

function App() {

  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState('');

  const responseFacebook = (response) => {
    console.log(response);
    setData(response);
    setPicture(response.picture.data.url);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }


  return (
    <div className="App">
      {!user ? (
        <FacebookLogin
          appId="385590541007521"
          autoLoad={true}
          fields="name,picture"
          callback={responseFacebook}
        />
      ) : (
        <div class="container">
        <Card style={{ width: '600px' }}>
          <Card.Header>
            {!login &&
              <FacebookLogin
                appId="921201001964201"
                autoLoad={true}
                fields="name,email,picture"
                scope="public_profile,user_friends"
                callback={responseFacebook}
                icon="fa-facebook" />
            }
            {login &&
              <Image src={picture} roundedCircle />
            }
          </Card.Header>
          {login &&
            <Card.Body>
              <Card.Title>{data.name}</Card.Title>
              <Card.Text>
                {data.email}
              </Card.Text>
            </Card.Body>
          }
        </Card>
      </div>
  
          )}
        </div>
      )}
export default App;
