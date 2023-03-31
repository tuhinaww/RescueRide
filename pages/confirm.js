import { URLSearchParams } from 'next/dist/compiled/@edge-runtime/primitives/url';
import { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import Map from './components/Map';
import { useRouter } from 'next/Router'
import RideSelector from './components/RideSelector';
import Link from 'next/link'
import { AmbuList } from './data/AmbuList';
const Confirm = () => {
    const Router = useRouter()
    const { pickup,dropoff } = router.query

    console.log("Pickup",pickup);
    console.log("Dropoff",dropoff)

    const [pickupCoordinates, setPickupCoordinates ] =useState([0,0])
    const [dropoffCoordinates, setDropoffCoordinates ] =useState([0,0])


    
    const getPickupCoordinates = (pickup) =>{
        
        fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?' +
            new URLSearchParams({
                access_token: "pk.eyJ1IjoidHJvamFuc3BpZGV5IiwiYSI6ImNsZjl6M25zZjI2cXkzcm50ZW91N3R2bW8ifQ.5sU5jXqICYXNGiPOPlS_HA",
                limit: 1
            })
        )
        .then(response =>response.json())
        .then(data => {
            setPickupCordinates(data.features[0].center);
        })

    }

    const getDropoffCoordinates = (dropoff) => {
        
        fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?' +
            new URLSearchParams({
                access_token: "pk.eyJ1IjoidHJvamFuc3BpZGV5IiwiYSI6ImNsZjl6M25zZjI2cXkzcm50ZW91N3R2bW8ifQ.5sU5jXqICYXNGiPOPlS_HA",
                limit: 1
            })
        )
        .then(response =>response.json())
        .then(data => {

            setDropoffCoordinates(data.features[0].center)


        })

    }
    useEffect(()=>{
        getPickupCoordinates();
        getDropoffCoordinates();
    })

 


  return (
    <Wrapper>
      <ButtonContainer>
        <link href = '/search'>
        <BackButton src =''/>
        </link>
      </ButtonContainer>
      <Map 
        pickupCordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      
      />
      <RideContainer>
        <RideSelector
        pickupCordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
        />
        <ConfirmButtonContainer><ConfirmButton>Confirm RescueRide</ConfirmButton></ConfirmButtonContainer>
        
       
      </RideContainer>
    </Wrapper>
  );
};

export default Confirm;
const RideSelector = tw.div``

const ConfirmButton = tw.div`
bg-black text-white my-4 mx-4 text-center text-xl
`

const ConfirmButtonContainer = tw.div`
border-t-2
`


const RideContainer = tw.div`
flex-1 flex flex-col-1/2
`;

const Wrapper = tw.div`
flex h-screen flex-col 
`

const ButtonContainer = tw.div`
rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer  
`

const BackButton = tw.img`
h-full object-contain
`