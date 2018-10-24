import React,{Component} from 'react'
import '../style/section1.css'

class Section1 extends Component
{
	render()
	{
		return(
			<div className="container-fluid " id="first">
			<div className="model"><h1>WORKING MODEL</h1></div>
				<img className="img-fluid mx-auto d-block" src={require('../asset/workflow.png')}/>					
			</div>
			);
	}
}
export default Section1