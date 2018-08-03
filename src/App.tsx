import * as React from 'react'
import {
  Container,
  // Divider,
  Dropdown,
  // Grid,
  Header,
  // Image,
  // List,
  Menu,
  // Segment,
} from 'semantic-ui-react'

class App extends React.Component {
  public render() {
    const username = "jfrux"
    return (
      <div>
      <Menu fixed='top' inverted={true}>
        <Container>
          <Menu.Item as='a' header={true}>
            {/* <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} /> */}
            Configurator
          </Menu.Item>
          <Menu.Item as='a'>Home</Menu.Item>
          
          <Dropdown item={true} simple={true} text={username}>
            <Dropdown.Menu>
              <Dropdown.Item>Profile</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Divider />
              {/* <Dropdown.Header>My Vehicles</Dropdown.Header> */}
              <Dropdown.Item>
                <i className='dropdown icon' />
                <span className='text'>My Vehicles</span>
                <Dropdown.Menu>
                  <Dropdown.Item>2017 Honda Pilot Touring</Dropdown.Item>
                  <Dropdown.Item>2010 Honda Civic EX-L</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Menu>

      <Container text={true} style={{ marginTop: '7em' }}>
        <Header as='h1'>Configurator</Header>
        <p>This is the configurator.</p>
        
      </Container>

    {/* <Segment inverted={true} vertical={true} style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
      <Container textAlign='center'>
        <Grid divided={true} inverted={true} stackable={true}>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted={true} as='h4' content='Group 1' />
              <List link={true} inverted={true}>
                <List.Item as='a'>Link One</List.Item>
                <List.Item as='a'>Link Two</List.Item>
                <List.Item as='a'>Link Three</List.Item>
                <List.Item as='a'>Link Four</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted={true} as='h4' content='Group 2' />
              <List link={true} inverted={true}>
                <List.Item as='a'>Link One</List.Item>
                <List.Item as='a'>Link Two</List.Item>
                <List.Item as='a'>Link Three</List.Item>
                <List.Item as='a'>Link Four</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted={true} as='h4' content='Group 3' />
              <List link={true} inverted={true}>
                <List.Item as='a'>Link One</List.Item>
                <List.Item as='a'>Link Two</List.Item>
                <List.Item as='a'>Link Three</List.Item>
                <List.Item as='a'>Link Four</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted={true} as='h4' content='Footer Header' />
              <p>
                Extra space for a call to action inside the footer that could help re-engage users.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Divider inverted={true} section={true} />
        <Image centered={true} size='mini' src='/logo.png' />
        <List horizontal={true} inverted={true} divided={true} link={true}>
          <List.Item as='a' href='#'>
            Site Map
          </List.Item>
          <List.Item as='a' href='#'>
            Contact Us
          </List.Item>
          <List.Item as='a' href='#'>
            Terms and Conditions
          </List.Item>
          <List.Item as='a' href='#'>
            Privacy Policy
          </List.Item>
        </List>
      </Container>
    </Segment> */}
    </div>
    );
  }
}

export default App;
