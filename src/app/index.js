import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";


class App extends React.Component{
	render(){
		return(
			<div className="container">
			 <div className="row">
			   <div className="col-xs-10 col-xs-offset-2">
			      <Header/>
			    </div>
			  </div>
			  <div className="row">
			   <div className="col-xs-10 col-xs-offset-2">
			      <Home name={"Hitesh"} initialAge={30}/>
			    </div>
			  </div>
			</div>
			);
	}
}

render(<App/>,window.document.getElementById("app"));