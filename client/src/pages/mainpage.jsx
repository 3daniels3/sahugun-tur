import Header from '../components/Header/Header'
import Banner from '../components/MainPage/Banner'
import Cultura from '../components/MainPage/Cultura'
import Historia from '../components/MainPage/Historia'

export default function mainpage() {
  
  
  return (
    <>
      <Header></Header>
      <Banner texto={'Sahagún Tierra Querida'}></Banner>
      <section className='w-[65%] mx-auto my-[12rem] space-y-[10rem]'>
        <Historia></Historia>
        <Cultura></Cultura>
      </section>
    </>
  )
}
