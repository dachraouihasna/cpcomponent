import logo from './logo.svg';
import './App.css';
import Name from './components/profile/FullName';
import Adresse from './components/profile/Adresse';
import ProfilePhoto from './components/profile/ProfilePhoto';
import { Card, Button } from 'react-bootstrap';



function App() {
  return (
    <div className="App">
      <Card style={{ width: '18rem' }}>
        <ProfilePhoto />
        <Card.Body>
          <Card.Title>
            <Name />
          </Card.Title>
          <Card.Text>
            <Adresse />
          </Card.Text>
          <Button variant="primary">Buy me a coffe</Button>
        </Card.Body>
      </Card>

    </div>
  );
}

export default App;
