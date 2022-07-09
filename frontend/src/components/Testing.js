import { Container, Button, Grid, Space } from '@mantine/core';



const Testing = () => {

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
        <Button>Button</Button>
      </Grid.Col>
      </Grid>
      <Space h="xs"/>
    </Container>
    
  )
}


export default Testing