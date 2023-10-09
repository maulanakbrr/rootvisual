import React from 'react'
import CustomContainer from '@/components/CustomContainer'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import FAQContent from '@/components/FAQContent'


const FAQ = () => {
  return (
    <CustomContainer isPage>
      <div>
        <h1>FAQ</h1>
        <CustomBreadcrumb firstName='FAQ'/>
      </div>

      <FAQContent/>

      <div>
        <p style={{ textAlign: 'center' }} className='proj-p'>If your questions is not on the list, feel free to contact us on our instagram or whatsapp</p>
      </div>
    </CustomContainer>
  )
}

export default FAQ