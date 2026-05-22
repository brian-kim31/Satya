import RevealObserver from '@/components/RevealObserver'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import MenuSection from '@/components/MenuSection'
import Catering from '@/components/Catering'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <RevealObserver />
      <Navbar />
      <Hero />
      <About />
      <MenuSection />
      <Catering />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}