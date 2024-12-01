import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/mainpage';
import Place from './pages/place';

function App() {

  return (
    <>
      <Routes>
        <Route path = '/' element = {<MainPage/>} />
        <Route path="/Place" element={<Place />} />
      </Routes>
    </>
  )
}

export default App
