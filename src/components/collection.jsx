import { Button } from '@mui/material'
import React from 'react'
import './components.scss'

function Collection() {
	return (
		<div className='main-collection'>
				<div className="absolute-text">
				<h4>OWN THE DAY</h4>
				<h1>TACHEN 19</h1>
				<div className="flex-btn">
					<Button className='btn'>SHOP COLLECTION</Button>
				</div>
			</div>
			<div className="back-img">
				<img src="/assets/img/pic7.png" alt="" />
			</div>
		</div>
	)
}

export default Collection