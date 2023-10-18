import { Box, Img, Spacer, Stack, Text } from '@chakra-ui/react'
import homeActive from 'assets/menuIcon/home_black.svg'
import home from 'assets/menuIcon/home_white.svg'
import messageActive from 'assets/menuIcon/message_black.svg'
import message from 'assets/menuIcon/message_white.svg'
import friendActive from 'assets/menuIcon/people_white.svg'
import friend from 'assets/menuIcon/people_black.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
  <Box className='border bg-gray-800 text-white flex px-4 py-3'>
    <Stack>
      <Text className='text-xl font-bold'>Gorengan</Text>
    </Stack>
    <Spacer />
    <Stack direction="row" gap="4">
      <Link to="/" className={`${location.pathname === "/" ? "bg-white" : ""} px-2 py-2 rounded-full text-gray-900 `}><Img src={location?.pathname === "/" ? homeActive : home} width="20px" /></Link>
      <Link to="/message" className={`${location.pathname === "/message" ? "bg-white" : ""} px-2 py-2 rounded-full text-gray-900 `}><Img src={location?.pathname === "/message" ? messageActive : message} width="20px" /></Link>
      <Link to="/friend" className={`${location.pathname === "/friend" ? "bg-white" : ""} px-2 py-2 rounded-full text-gray-900 `}><Img src={location?.pathname === "/friend" ? friend : friendActive} width="20px" /></Link>
    </Stack>
    <Spacer />
  </Box>
  )
}

export default Navbar