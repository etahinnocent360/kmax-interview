import { Button } from '@mui/material'
import React from 'react'
import './components.scss'

function TopComponent() {
	return (
		<div className='main'>
			<div className="back-img">
				<img src="/assets/img/pic7.png" alt="" />
			</div>
			<div className="absolute-text">
				<h4>New Trend</h4>
				<h1>Collusion</h1>
				<p>Lorem ipsum dolor sit amet consectetur</p>
				<div className="flex-btn">
					<Button className='btn'>Discover</Button>
					<Button className='btn'>Shop Now</Button>
				</div>
			</div>
		</div>
	)
}

export default TopComponent