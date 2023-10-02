import HomeCarousel from "@/components/HomeCarousel"
import HomeAbout from "@/components/HomeAbout"
import HomeGallery from "@/components/HomeGallery"
import HomeTestimonies from "@/components/HomeTestimonies"

const Home = () => {
  return (
    <section>
      <HomeCarousel/>
      <HomeAbout/>
      <HomeGallery/>
      <HomeTestimonies/>
    </section>
  )
}

export default Home
