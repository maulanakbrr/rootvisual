import HomeCarousel from "@/components/HomeCarousel"
import HomeAbout from "@/components/HomeAbout"
import HomeGallery from "@/components/HomeGallery"
import HomeTestimonies from "@/components/HomeTestimonies"
import HomeContact from "@/components/HomeContact"

const Home = () => {
  return (
    <section>
      <HomeCarousel/>
      <HomeAbout/>
      <HomeGallery/>
      <HomeTestimonies/>
      <HomeContact/>
    </section>
  )
}

export default Home
