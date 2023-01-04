import React from 'react'

const Footer = () => {
  return (
    <div>
        <h6 className='font-bold text-base text-center py-5'>MealApp{'  '}
            <span className='font-normal text-sm'>&copy; {new Date().getFullYear()} by Ali Aliguliyev</span></h6>
    </div>
  )
}

export default Footer