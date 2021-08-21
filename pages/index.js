import styles from '../styles/Home.module.css';
import Header from '../component/Header/Header';
import RegisterSection from '../component/registerSection/registerSection';
import CitySection from '../component/citySection/citySection';
import Footer from '../component/Footer/Footer';
import HeroSection from '../component/HeroSection/HeroSection';
import { useRouter } from 'next/router'


export default function Home() {
  let router = useRouter()

  
  function onClickVendor () {
        router.push('/vendor')

  }



  return (
    <>

      <Header />
      {/* <Hero /> */}
      <HeroSection onClickVendor={onClickVendor} />
      <RegisterSection />
      <CitySection />
      <Footer />
    </>
  )
}
