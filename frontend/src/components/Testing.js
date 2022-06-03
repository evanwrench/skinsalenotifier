import { Container, Button, Grid } from '@mantine/core';


const Testing = () => {
  return (
    <Container 
      fluid
      style={{ backgroundColor: '#000000', }}
      >
      <Grid
      sx={(theme) => ({
        backgroundColor: "#000000",
        
      })}>
      <Grid.Col span={3}>
        <Button>Button</Button>
      </Grid.Col>
      <Grid.Col span={3}>
        <Button>Button</Button> 
      </Grid.Col>
      <Grid.Col span={3} offset={2}>
        <Button>Button</Button>
      </Grid.Col>
      </Grid>
    </Container>
    
  )
}

export default Testing