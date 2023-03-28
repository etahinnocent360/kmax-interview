import React from 'react'

function ImgGrid() {
  return (
    <div className='grid'>
	<div className="left-grid">
		<div className="top-img">
			<img src="./assets/img/mf2.jpeg" alt="" />
		</div>
		<div className="bottom-img">
			<img src="./assets/img/wf1.jpg" alt="" />
			<img src="./assets/img/wf4.webp" alt="" />
		</div>
	</div>
	<div className="right-grid">
		<img src="./assets/img/pic3.jpg" alt="" />
	</div>
    </div>
  )
}

export default ImgGrid