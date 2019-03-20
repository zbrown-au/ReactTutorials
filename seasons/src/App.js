import React from 'react'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

class App extends React.Component {
  state ={
    latitude: null,
    errorMessage: ""
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({latitude: position.coords.latitude}),
      err => this.setState({errorMessage: err.message})
    );
  }

  render() {
    return(
      <div>
        {this.state.errorMessage && !this.state.latitude && 
          `Error: ${this.state.errorMessage}`
        }

        {!this.state.errorMessage && this.state.latitude && 
          <SeasonDisplay latitude={this.state.latitude} />
        }

        {!this.state.errorMessage && !this.state.latitude && 
          <Spinner message="Please accept location request" />
        }
      </div>
    )
  }
}

export default App;