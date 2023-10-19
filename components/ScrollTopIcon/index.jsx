'use client'

import {FaCircleArrowUp} from 'react-icons/fa6'

const ScrollTopIcon = () => {
  const handleScrollTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  return (
    <FaCircleArrowUp className='go-to-top' onClick={handleScrollTop}/>
  )
}

export default ScrollTopIcon