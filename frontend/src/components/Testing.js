import { Container, Button, Grid, Space } from '@mantine/core';
import Login from './Login'
import { useEffect } from 'react';
import { gapi } from 'gapi-script';


const Testing = () => {

    const clientID = "1030940212866-9kjok0j0jlsk208su1d9mochm5p5n1pg.apps.googleusercontent.com";

    const gapiInit = () => {
      gapi.load('client:auth2', initClient);
    }


  const initClient = () => {
        gapi.auth2.init({
        clientId: clientID,
        scope: 'https://www.googleapis.com/auth/userinfo.email'
      }).then(function () { gapi.auth2.getAuthInstance();
        });
      }
      
      

    gapiInit();


  return (
    <Container 
      fluid
      style={{ backgroundColor: '#000000', }}
      >
      <Space h="xs"/>
      <Grid justify = "space-between"
      sx={(theme) => ({
        backgroundColor: "#000000",
        
      })}>
      <Grid.Col span={1}>
        <Button>Button</Button>
      </Grid.Col>
      <Grid.Col span={1}>
        <Button>Button</Button> 
      </Grid.Col>
      <Grid.Col span={1} offset={5}>
        <Login />
      </Grid.Col>
      </Grid>
      <Space h="xs"/>
    </Container>
    
  )
}


export default Testing