import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Banner from '../components/MainPage/Banner/Banner'
import Cultura from '../components/MainPage/Cultura/Cultura'
import Galeria from '../components/MainPage/Galeria/Galeria'
import Historia from '../components/MainPage/Historia/Historia'
import HistoriasAncestrales from '../components/MainPage/HistoriasAncestrales/HistoriasAncestrales'
import ScrollUpButton from '../components/ScrollUpButton'

export default function mainpage() {
  
  
  return (
    <>
      <Header></Header>
      <Banner texto={'Sahagún Tierra Querida'}></Banner>
      <article className='my-[8rem] space-y-[12rem] text-green-900'>
        <Historia></Historia>
        <Cultura></Cultura>
        <HistoriasAncestrales></HistoriasAncestrales>
        <Galeria></Galeria>
      </article>
      <Footer></Footer>
      <ScrollUpButton></ScrollUpButton>
    </>
  )
}
