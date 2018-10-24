import React,{Component} from 'react'
import '../style/doc.css'

class Doc extends Component
{
	render()
	{
		return(

		<section className="section1">
			<div className="container"  >
			<div className="text-center feature"><span>OUR </span><span>FEATURES</span></div><br/>
				<div className="row">
					<div className="col-xl-3">
						<div className="card">
							<img className="mx-auto d-block img-fluid " src={require('../asset/reward.svg')}/>
							<strong><p id="para">Token rewards for responsible waste disposal.</p></strong>
						</div>
					</div>
					<div className="col-xl-3">
						<div className="card">
							<img className="mx-auto d-block img-fluid " src={require('../asset/blockchain.svg')}/>
							<strong><p id="para">AI, Big Data, and IoT integrated with Blockchain.</p></strong>
						</div>
					</div>
					<div className="col-xl-3">
						<div className="card">
							<img className="mx-auto d-block img-fluid " src={require('../asset/trust.svg')}/>
							<strong><p id="para">Trustless, transparent and autonomous philanthropy mechanism.</p></strong>
						</div>
					</div>
					<div className="col-xl-3">
						<div className="card">
							<img className="mx-auto d-block img-fluid " src={require('../asset/swbin.svg')}/>
							<strong><p id="para">Decentralised micro/macro advertisement for individuals.</p></strong>
						</div>
					</div>
				</div>

			
			</div><br/>
			<div className="container" >
				<div className="row">
					<div className="col-xl-3">
						<div className="card">
							<img className="mx-auto d-block img-fluid " src={require('../asset/platform.svg')}/>
							<strong><p id="para">Region-Culture-Existing Infrastructure based exclusive platform.</p></strong>
						</div>
					</div>
					<div className="col-xl-3">
						<div className="card">
							<img className="mx-auto d-block img-fluid " src={require('../asset/broad.svg')}/>
							<strong><p id="para">Most broad processed product (output) range.</p></strong>
						</div>
					</div>
					<div className="col-xl-3">
						<div className="card">
							<img className="mx-auto d-block img-fluid " src={require('../asset/signup.svg')}/>
							<strong><p id="para">Easy user signup.</p></strong>
						</div>
					</div>
					<div className="col-xl-3">
						<div className="card">
							<img className="mx-auto d-block img-fluid " src={require('../asset/wallet.svg')}/>
							<strong><p id="para">Dedicated wallet.</p></strong>
						</div>
					</div>
				</div>

			
			</div>
	

		</section>	
			);
	}
}
export default Doc