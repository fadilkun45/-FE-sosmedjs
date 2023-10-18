import { Box, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Navbar'



const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box className='w-full' >
      <Navbar />
      <HStack className='mx-auto' gap="3">
        <Stack className='w-1/6 border border-green-600'>
          <Text>Teman</Text>
        </Stack>
        <Stack className='w-4/6 border'>
          {children}
        </Stack>
        <Stack className='w-1/6 border border-blue-900'>
          <Text>Entahlah</Text>
        </Stack>
      </HStack>

    </Box>
  )
}

export default Layout