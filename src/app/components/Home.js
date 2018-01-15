import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component{
  constructor(props){
    super();
    this.state = {
       age: props.initialAge,
       status: 0
   }

}
  onMakeYounger(){
        this.setState({
         age: this.state.age - 1
      });
   }
	render(){
      return(
        <div>
          <p>Your Name is {this.props.name}, Your age is {this.state.age}</p>
          <hr/>
          <button onClick={() => this.onMakeYounger()} className="btn btn-primary">Make me younger!</button>
        </div>
      );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    initialAge : PropTypes.number
};