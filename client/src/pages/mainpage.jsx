import Header from '../components/Header/Header'
import Banner from '../components/MainPage/Banner/Banner'
import Cultura from '../components/MainPage/Cultura/Cultura'
import Historia from '../components/MainPage/Historia'

export default function mainpage() {
  
  
  return (
    <>
      <Header></Header>
      <Banner texto={'Sahagún Tierra Querida'}></Banner>
      <section className='w-[65%] mx-auto my-[8rem] space-y-[12rem] text-green-900'>
        <Historia></Historia>
        <Cultura></Cultura>
      </section>
    </>
  )
}
