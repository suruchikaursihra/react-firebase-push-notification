import React, { Component } from 'react';
import './App.css';
import { messaging } from "./init-fcm";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toast } from 'react-bootstrap';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      notification: ""
    };
  }

  async componentDidMount() {
    messaging.requestPermission()
      .then(async function () {
        const token = await messaging.getToken();
        console.log("token:", token);
      })
      .catch(function (err) {
        console.log("Unable to get permission to notify.", err);
      });
    navigator.serviceWorker.addEventListener("message", (message) =>
      this.setState({
        notification: message.data["firebase-messaging-msg-data"].data["notification"]
      }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.notification ?
            <Toast>
              <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                <strong className="mr-auto">Notification</strong>
              </Toast.Header>
              <Toast.Body style={{color:'black'}}>{this.state.notification}</Toast.Body>
            </Toast> : ""
          }

          <link rel="manifest" href="http://localhost:3000/manifest.json" />
          <h1>React Firebase Notification </h1>
        </header>
      </div>
    );
  }
}

export default App;
