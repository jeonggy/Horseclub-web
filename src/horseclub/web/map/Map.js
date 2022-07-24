import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      center: {
        lat: 37.4979278,
        lng: 127.0275833,
      },
      zoom: 15,
    }
  }

  render() {
    return (
      <div className="App" style={{ width: '100%', height: '60vh' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDCWti9BPvfzhm9FmPlIuq-F-J-bQigAbY' }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        ></GoogleMapReact>
      </div>
    )
  }
}

export default Map
