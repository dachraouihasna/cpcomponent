import logo from './logo.svg';
import './App.css';
import { profilePicture, fullName, fullAdresse } from './Data/data'
import Name from './components/profile/FullName';
import Adresse from './components/profile/Adresse';
import ProfilePhoto from './components/profile/ProfilePhoto';
import { Card, Button } from 'react-bootstrap';



function App() {


  return (
    <div className="App">
      <Card style={{ width: '18rem' }}>
        <ProfilePhoto profilePicture={profilePicture} />
        <Card.Body>
          <Card.Title>

            <Name fullName={fullName} />
            <Adresse fullAdresse={fullAdresse} />
          </Card.Title>
          <Card.Text>

          </Card.Text>

        </Card.Body>
      </Card>

    </div>
  );
}

export default App;
