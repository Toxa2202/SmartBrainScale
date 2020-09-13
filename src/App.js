import React,{Component} from 'react';
import Particles from 'react-particles-js';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import './App.css';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: '0c4ba0030e064f36b53b61c9d04c51d2'
});

const particlesOptions={
  particles: {
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 80,
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state={
      input: '',
    }
  }

  onInputChange=(event) => {
    console.log(event.target.value);
  }

  onButtonSubmit=() => {
    console.log('click');
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", "https://samples.clarifai.com/face-det.jpg").then(
      function(response) {
        console.log(response);
      },
      function(err) {
        // if error
      }
    );
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles'
          params={particlesOptions}
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        {/*<FaceRecognition />*/}
      </div>
    );
  }
}

export default App;
