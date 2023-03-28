import { Facebook, Instagram, LinkedIn, MyLocation, Twitter } from '@mui/icons-material'
import React from 'react'

export default function Footer() {
  return (
    <div>
	<div className="footer-main">
		<div className="left">
			<h2>Your Logo</h2>
			<p className='desc'>LorMolestias voluptatem voluptatibus, unde amet natus incidunt, sed officia eligendi veniam sint enim, non ut. Molestiae repellat asperiores necessitatibus ut ipsam maxime?</p>
			<div className='locate'>
				<MyLocation/>
				<span>Comilla, Bangladesh 3500</span>
			</div>
			<p className='email'>
				kawsarahmed0210@gmail.com
			</p>
			<p className='number'>
				01647470457
			</p>
			<div className="icons">
				<Facebook/>
				<Instagram/>
				<Twitter/>
				<LinkedIn/>
			</div>
		</div>
		<div className="right">
			<h2>RECIVE EMAIL UPDATES</h2>
			<div className="input">
				<input type="text" placeholder='Your email address' />
				<label htmlFor="">Join</label>
			</div>
			<div className="flex-3">
				<div className="flex">
					<h3>SHOP</h3>
					<p>Shop</p>
					<p>Collection</p>
					<p>Outlet</p>
					<p>Lookbook</p>
				</div>
				<div className="flex">
					<h3>HELP</h3>
					<p>FAQ</p>
					<p>Privacy Policy</p>
					<p>Terms and conditions</p>
					<p>Return and Exchanges</p>
				</div>
				<div className="flex">
					<h3>ABOUT</h3>
					<p>Journal</p>
					<p>Our Story</p>
					<p>Contact</p>
					<p>Store Location</p>
				</div>
			</div>
		</div>
	</div>
	<div className="footer-bottom">
		<p>Copyright &copy; 2020 . Your company name  All rights reserved</p>
	</div>
    </div>
  )
}
