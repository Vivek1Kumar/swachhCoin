import React,{Component} from 'react'
import '../style/home.css'
import Doc from "../component/doc.js"
import Section1 from "../component/section1.js"
import Add from "../component/add.js"




class Home extends Component
{
	render()
	{
		return(

		<section id="profile">
			<div className="container">
				<div className="row">
					<div className="col-xl-6 image">
						<img className="img-fluid" src={require("../asset/swc_globe.png")}/>
					</div>
					<div className="col-xl-6">
					</div>
				</div>			
			</div>
			<Doc/>
			<Add/><br/>
			<Section1/>
		</section>	
		);
	}
}
export default Home