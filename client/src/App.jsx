import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/mainpage';
import place from './pages/place';

function App() {

  return (
    <>
      <Routes>
        <Route path = '/' element = {<MainPage/>} />
        <Route path = '/place' element = {<place/>} />
      </Routes>
    </>
  )
}

export default App
