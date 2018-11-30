import React, { Component } from 'react';

class Navigation extends Component {
	render() {
		return (
			<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
				<a className="navbar-brand" href="#">
					{this.props.titulo}
				</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarCollapse">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Navigation;