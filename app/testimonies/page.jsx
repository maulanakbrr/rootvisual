import CustomBreadcrumb from "@/components/CustomBreadcrumb"
import CustomContainer from "@/components/CustomContainer"
import TestimoniesHeader from "@/components/TestimoniesHeader"
import TestimoniesContent from "@/components/TestimoniesContent"

const Testimonies = () => {
  return (
    <CustomContainer isPage>
      <div style={{ textAlign: 'center' }}>
        <h1>Testimonies</h1>
        <CustomBreadcrumb firstName='Testimonies'/>
      </div>

      <TestimoniesHeader/>

      <div>
        <h3 style={{ textAlign: 'center', marginBottom: '2rem' }}>
          These are other testimonies from our lovely customers
        </h3>
        
        <TestimoniesContent/>
      </div>
    </CustomContainer>
  )
}

export default Testimonies