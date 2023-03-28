import React from 'react'

function Cards(props) {
	return (
		<div className='prod-cards'>
			<h3>
				{props.title}
			</h3>
			<p className='p-top'>{props.desc}</p>
			<div className="cards">
				<div className="card">
					<img src={props.img1} alt="" />
					<h6>IGURE</h6>
					<p className='desc'>
						GREEN MUSCLE FIT POLO SHIRT
					</p>
					<p className='price'><p>$229.00 </p> <span>$299.00</span> </p>
				</div>
				<div className="card">
					<img src={props.img2} alt="" />
					<h6>IGURE</h6>
					<p className='desc'>
						GREEN MUSCLE FIT POLO SHIRT
					</p>
					<p className='price'><p>$229.00 </p> <span>$299.00</span> </p>
				</div>
				<div className="card">
					<img src={props.img3} alt="" />
					<h6>IGURE</h6>
					<p className='desc'>
						GREEN MUSCLE FIT POLO SHIRT
					</p>
					<p className='price'><p>$229.00 </p> <span>$299.00</span> </p>
				</div>
				<div className="card">
					<img src={props.img4} alt="" />
					<h6>IGURE</h6>
					<p className='desc'>
						GREEN MUSCLE FIT POLO SHIRT
					</p>
					<p className='price'><p>$229.00 </p> <span>$299.00</span> </p>
				</div>
			</div>
		</div>
	)
}

export default Cards