import React from 'react'
import homeStyle from './Home.module.css'
import Product from '../Product/Product'

function Home() {
  return (
    <div className={homeStyle.home}>
      <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
        alt=''
        className={homeStyle.home__banner}
      />
      <Product id='' title={'book'} image='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Rooster03.jpg/250px-Rooster03.jpg' price={20} rating={2} />
    </div>
  )
}

export default Home;