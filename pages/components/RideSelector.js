import React, {useEffect, useState} from 'react'
import tw from 'tailwind-styled-components'

const RideSelector = ({pickupCoordinates, dropoffCoordinates}) => {
  const [rideDuration, setRideDuration] = useState(0)

  useEffect(() => {
    rideDuration = fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=`
    )
    .then(res => res.json())
    .then(data => {
      setRideDuration(data.routes[0].duration / 100)
    })

  }, [pickupCoordinates, dropoffCoordinates])
  return (
    <Wrapper>
      Ride Selector
      <Title>Choose your Ride</Title>
      <Ambulist>
        {ambuList.map((ambu, index)=>(
        <Ambu key= {index}>

            <AmbuImage src ="Ambu.imgUrl"/>
            <AmbuDetails>
            <Service>AmbuMini</Service>
            <Time>5 min away</Time>
            </AmbuDetails>
            <Price>{'$' + (rideDuration * ambu.multiplier).toFixed(2)}</Price>
        
        </Ambu>
      ))
      }


      </Ambulist>
    </Wrapper>
  )
}

export default RideSelector

const AmbuDetails = tw.div`
flex-1
` 
const Service = tw.div`
font-medium
`
const Time = tw.div`
text-xs text-blue-500
` 
const Price = tw.div`
text-sm
` 

const AmbuImage = tw.img` 
flex-h-14 mr-2
`

const Ambu = tw.div`
flex p-4 items-center
`

const Title = tw.div`
text-gray text-center text-xs py-2 border-b
`


const Ambulist = tw.div`
overflow-y-scroll
`





const Wrapper = tw.div`
  flex-1 overflow-y-scroll flex flex-col
`