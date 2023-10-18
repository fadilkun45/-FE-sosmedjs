import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from './components/layout'
import Home from './Pages/Home/Home'
import Message from './Pages/Message/Index'
import Friend from './Pages/Friend/Index'


function App() {

  return (
   <ChakraProvider>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout><Home /></Layout>} />
        <Route path='/message' element={<Layout><Message /></Layout>} />
        <Route path='/friend' element={<Layout><Friend /></Layout>} />
      </Routes>
    </BrowserRouter>
   </ChakraProvider>
  )
}

export default App
