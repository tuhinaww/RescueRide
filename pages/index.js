import Head from 'next/head'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import tw from "tailwind-styled-components"
import Map from './components/Map'
import Link from 'next/link'
import { auth } from '../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'next/router'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [user, setUser] = useState(null)
  const router= useRouter()

  useEffect(() => {
    return onAuthStateChanged( auth, user => {
      if(user) {
        setUser({
          name: user.displayName,
          photoUrl: user.photoURL,
        })
      } else {
        setUser(null)
        router.push('/login')
      }
    })
  }, []) 

 
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
            <RescueRideLogo src="https://www.linkpicture.com/q/rescueridelogo.png"/>
           <Profile>
            <Name>{user}</Name>
            <UserImage 
              src= {user}
              onClick = {() => signOut(auth)}
            />
           </Profile>
           </Header>
           <ActionButtons>
           
            <ActionButton className='bg-cyan-200 w-20'>
            Ambulance
            <ActionButtonImage src="https://www.linkpicture.com/q/ambulance_1.png"/>
            </ActionButton>
           <ActionButton className='bg-cyan-200 w-20'>
           Reserve
           <ActionButtonImage src="https://www.linkpicture.com/q/reserve.png"/>
            

           </ActionButton>
           </ActionButtons>
      <Link href="/search">
      <Abutton className='bg-cyan-300 '>
      <Input>
      Hospitals Nearby
      </Input>
      </Abutton>
      </Link>
      </ActionItems>
    </Wrapper>
      
  )
}

const Wrapper = tw.div`
flex flex-col bg-white h-screen
`
const ActionItems = tw.div`
flex-1 p-4 items-center
`
const Header = tw.div`
flex justify-between items-centre
`
const RescueRideLogo = tw.img`
h-700 w-40
`

const Profile = tw.div`
flex items-center
`

const Name = tw.div`
mr-4 w-20 text-sm text-right text-black
` 

const UserImage = tw.img`
h-12 w-12 rounded-full border border-gray-200 p-px
`
const ActionButtons = tw.div`
flex
22  
`
const ActionButton = tw.div`
bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl text-center text-white
`
const ActionButtonImage = tw.img`
h-30 items-center w-20
`
const Input = tw.div`
h-20 bg-gray text-2xl p-4 flex items-center mt-8 text-center
`
const Abutton = tw.div`
bg-gray-200 items-center flex-1 text-white text-center 
`