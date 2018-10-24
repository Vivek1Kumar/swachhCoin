import React,{Component} from 'react'
import '../style/add.css'

class Add extends Component {
	render() {
		return(
			<div id="add">
			<div className="container " >
			<div className="text-center pt-4 pd-4"><span id="our">OUR </span><span id="patners">PARTNERS</span></div><br/>
				<div className="row">
					<div className="col-xl-3">
						<div className="card cardadd">
							<img className="mx-auto d-block img-fluid " src={require('../asset/patners/oceanchain.png')}/>
						</div>
					</div>
					<div className="col-xl-3">
						<div className="card cardadd">
							<img className="mx-auto d-block img-fluid " src={require('../asset/patners/fxe.png')}/>
						</div>
					</div>
					<div className="col-xl-3">
						<div className="card cardadd">
							<img className="mx-auto d-block img-fluid " src={require('../asset/patners/grow_360.png')}/>
						</div>
					</div>
					<div className="col-xl-3">
						<div className="card cardadd">
							<img className="mx-auto d-block img-fluid " src={require('../asset/patners/bloqchain_science.png')}/>
						</div>
					</div>
				</div>

			</div><br/>
			<div className="container add2" >
				<div className="row">
					<div className="col-xl-3">
						<div className="card cardadd">
							<img className="mx-auto d-block img-fluid " src={require('../asset/patners/roiculture.png')}/>
						</div>
					</div>
					<div className="col-xl-3">
						<div className="card cardadd">
							<img className="mx-auto d-block img-fluid " src={require('../asset/patners/Waste-Ventures-India.png')}/>
						</div>
					</div>
					<div className="col-xl-3">
						<div className="card cardadd">
							<img className="mx-auto d-block img-fluid " src={require('../asset/patners/sanjari.png')}/>
						</div>
					</div>
					<div className="col-xl-3">
						<div className="card cardadd">
							<img className="mx-auto d-block img-fluid " src={require('../asset/patners/secureblocks.png')}/>
						</div>
					</div>
			</div>
			</div>
			<br/>
			</div>

			);
	}
}
export default Add;