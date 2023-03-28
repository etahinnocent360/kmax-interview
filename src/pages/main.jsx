import React from 'react'
import Cards from '../components/cards'
import Collection from '../components/collection'
import Footer from '../components/footer'
import ImgGrid from '../components/imgGrid'
import Imgtyles from '../components/styles'
import TopComponent from '../components/topComponent'

function Main() {
  return (
    <div>
	<TopComponent/>
	<ImgGrid/>
	<Cards
	title={'women Fashion'}
	desc={'Shop our new arrivals from established brands'}
	img1={'/assets/img/wf1.jpg'}
	img2={'/assets/img/wf2.jpg'}
	img3={'/assets/img/wf3.jpeg'}
	img4={'/assets/img/wf4.webp'}
	/>
	<Cards
	title={'Men Fashion'}
	desc={'Shop our new arrivals from established brands'}
	img1={'/assets/img/mf1.jpg'}
	img2={'/assets/img/mf2.jpeg'}
	img3={'/assets/img/mf3.jpeg'}
	img4={'/assets/img/mf4.jpg'}
	/>
	<Imgtyles/>
	<Collection/>
	<Footer/>
    </div>
  )
}

export default Main