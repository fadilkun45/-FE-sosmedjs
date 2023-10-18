import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from './components/layout'
import Home from './Pages/Home/Home'

function App() {

  return (
   <ChakraProvider>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout><Home /></Layout>} />
      </Routes>
    </BrowserRouter>
   </ChakraProvider>
  )
}

export default App
