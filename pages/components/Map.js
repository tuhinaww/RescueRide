import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl';
import { useEffect } from "react";

mapboxgl.accessToken = "pk.eyJ1IjoidHJvamFuc3BpZGV5IiwiYSI6ImNsZjl6M25zZjI2cXkzcm50ZW91N3R2bW8ifQ.5sU5jXqICYXNGiPOPlS_HA";

const Map = (props) => {
  console.log(props)
    useEffect(() => {
        const map = new mapboxgl.Map({
          container: "map",
          style: 'mapbox://styles/mapbox/navigation-day-v1',
          center: [80.041618, 12.815330],
          zoom: 3,
        });
        if(props.pickupCoordinates){
          addToMap(map, props.pickupCoordinates)
        }
        if(props.dropoffCoordinates){
          addToMap(map, props.dropoffCoordinates)
        }
        if(props.pickupCoordinates && props.dropoffCoordinates)
        map.fitBounds([
        props.dropoffCoordinates,
        props.pickupCoordinates
        ],{
          padding: 60
        })
        
      }, [props.pickupCoordinates,props.dropoffCoordinates]);

      const addToMap = (map, coordinates) => { 
        if (Array.isArray(coordinates) && coordinates.length === 2 && !isNaN(coordinates[0]) && !isNaN(coordinates[1])) {
          const marker1 = new mapboxgl.Marker()
            .setLngLat(coordinates)
            .addTo(map);
        } else {
          console.error("Invalid coordinates: ", coordinates);
        }
      }
      



       
  return (
    <Wrapper id='map'> 

    </Wrapper>
  )

}

export default Map

const Wrapper = tw.div`
flex-1 h-1/2
`