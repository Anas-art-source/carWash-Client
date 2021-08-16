import * as React from 'react';
import { useState } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import LocalCarWashIcon from '@material-ui/icons/LocalCarWash';
import styles from './Map.module.css'
import {MAP_ACCESS_TOKEN} from '../../global.variable'

function Map() {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 24.957617128917107,
    longitude: 67.11712827023013,
    zoom: 13
  });



  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapboxApiAccessToken={MAP_ACCESS_TOKEN}
      mapStyle="mapbox://styles/anas-khan-7595/ckry4qlbo00uk18nn19jvljiu"
    > 
         <Marker latitude={24.957617128917107} longitude={67.11712827023013} draggable={true}>
            <div className={styles.marker}><LocalCarWashIcon color="inherit" /></div>
        </Marker>    
    </ReactMapGL>
  );
}

export default Map;