import React from 'react'
import Header from './Header'
import Footer from './Footer'

function RouteLayout() {
  return (
    <div>
        <Header />
        <div className='styles:{{minheight:90vh}}'> 
            
        </div>
        <Footer />
    </div>
  )
}

export default RouteLayout