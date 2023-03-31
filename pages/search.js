import { useState } from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/link'
const Search = () => {
  const [pickup,setPickup] = useState("");
  const [dropoff,setDropoff] = useState("");
  console.log(pickup)
  console.log(dropoff)
  return (
    <Wrapper>
        <ButtonContainer>
          <Link href="/">
               <BackButton src="https://www.linkpicture.com/q/arrow_10.png"/>
          </Link>
        </ButtonContainer>
        <InputContainer>
        <FromToIcons>
        <circle src="https://www.linkpicture.com/q/new-moon.png"/>
        <square src="https://www.linkpicture.com/q/square_2.png"/>
        <Line src="https://www.linkpicture.com/q/line_8.png"/>
        </FromToIcons>
        <InputBoxes>
        <Input 
        placeholder='Enter pickup location'
        value={pickup}
        onChange={(e)=> setPickup(e.targetvalue)}
        />
        <Input 
        placeholder='Where to?'
        value={dropoff}
        onChange={(e)=> setDropoff(e.targetvalue)}
        />
        </InputBoxes>
        <PlusIcon src="https://www.linkpicture.com/q/plus_5.png"/>
        </InputContainer>
        <SavedPlaces>
            <StarIcon src="https://www.linkpicture.com/q/star_12.png"/>
            Saved Places
        </SavedPlaces>
        <Link href = {{
          pathname:"/confirm",
          query: {
            pickup: pickup,
            dropoff: dropoff
          }

        }}>
        <ConfirmButtonContainer>
          Confirm Locations
        </ConfirmButtonContainer>
        </Link>
    </Wrapper>
  );
}



export default Search

const ConfirmButtonContainer = tw.div`
bg-black text-white text-center mt-2 mx-4 px-4 py-3 text-2xl cursor-pointer
`

const Wrapper = tw.div`
bg-grey-200 h-screen 
`
const ButtonContainer = tw.div`
bg-white px-4
`
const BackButton = tw.div`
h-12 cursor-pointer 
`
const FromToIcons = tw.div`
w-10 flex flex-col mr-2 items-center
`

const InputContainer = tw.div`
bg-white flex items-center px-4 mb-2
`

const circle = tw.img`
h-2.5
`
const Line = tw.img`
h-10
`
const square = tw.img`
h-3
`
const InputBoxes = tw.div`
flex flex-col flex-1
`
const Input = tw.input`
h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none
`

const PlusIcon = tw.img`
w-10 h-10 bg-gray-200 rounded-full ml-3
`

const SavedPlaces = tw.div`
flex items-center bg-white px-4 py-2
`

const StarIcon = tw.img`
bg-gray-400 w-10 h-10 p-2 rounded-full mr-2
`