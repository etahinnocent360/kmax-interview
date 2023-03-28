import React from 'react'
import './components.scss'

function Imgtyles() {
  return (
    <div className='style-main'>
	<h3>AVONE STYLES</h3>
	<p>Choose Your Favorite Color</p>
	<div className='img-styles'>
	<div className="styles-left">
		<img src="/assets/img/wf1.jpg" alt="" />
	</div>
	<div className="styles-right">
		<img src="/assets/img/wf3.jpeg" alt="" />
		<img className='over' src="/assets/img/wf2.jpg" alt="" />
		<h4 className='over-text'>See women Dresses</h4>
		
	</div>
    </div>
    </div>
  )
}

export default Imgtyles