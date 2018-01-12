import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component{
  constructor(props){
    super();
    this.age = props.age;

}
  onMakeYounger(){
        this.age -= 1;
        console.log(this.age);
   }
	render(){
      return(
        <div>
          <p>Your Name is {this.props.name}, Your age is {this.age}</p>
          <hr/>
          <button onClick={() => this.onMakeYounger()} className="btn btn-primary">Make me younger!</button>
        </div>
      );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    age : PropTypes.number
};