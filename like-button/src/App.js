import React, {Component} from "react";
import "./App.css"

class Mylikebutton extends Component {
state = { count: 0, 
  label: "Likes"
}
  
handleClick = (e) => {
  this.setState({
    label: this.state.count === 0 ? "Like" : "Likes",
    count: this.state.count +1

  })
}


render (){
return(
  <div id="like" className="" htmlfor>
    <button onClick = {this.handleClick}>{this.state.count} {this.state.label}</button>
  </div>
)}
}

export default Mylikebutton 