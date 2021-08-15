import * as React from 'react';
import { useState } from 'react';
import ReactMapGL, {Marker, GeolocateControl} from 'react-map-gl';
import LocalCarWashIcon from '@material-ui/icons/LocalCarWash';
import styles from './Map.module.css'


const geolocateControlStyle= {
    right: 10,
    top: 10
  };

function Map(props) {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 24.957617128917107,
    longitude: 67.11712827023013,
    zoom: 13
  });

  const [userLocation, setUserLocation] = React.useState({
      latitude: "",
      longitude: ""
  })

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
        setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
      });
  },[])


  React.useEffect(() => {

    props.onCordinatesChange(userLocation)


  }, [userLocation])
  


  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapboxApiAccessToken="pk.eyJ1IjoiYW5hcy1raGFuLTc1OTUiLCJhIjoiY2tyeTQ5c3h2MDA0NDJvcGpxbGw5NXU5aSJ9.i4cVP07RyPlGB9RLYMXL_Q"
      mapStyle="mapbox://styles/anas-khan-7595/ckry4qlbo00uk18nn19jvljiu"
    > 
      <GeolocateControl
        style={geolocateControlStyle}
        positionOptions={{enableHighAccuracy: true}}
        trackUserLocation={true}
        auto

        onGeolocate={(data) => console.log(data) }

      />

         <Marker 
         latitude={userLocation.latitude || 0} 
         longitude={userLocation.longitude || 0} 
         draggable={true} 
         offsetTop={-25}
         offsetLeft={-25}
         onDragEnd={(e) => setUserLocation({
             latitude: e.lngLat[1],
             longitude: e.lngLat[0]
         })}
         
         >
            <div className={styles.marker}><LocalCarWashIcon color="inherit" /></div>
        </Marker>    
    </ReactMapGL>
  );
}

export default React.memo(Map);