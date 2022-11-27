import React,{Component} from 'react'
import "./wine.css"
class Wine extends Component {
  render() {
    let emoji = ""
    if (this.props.like) {
      emoji = "❤️";
    }
    return (
      <div className="wine">
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <h3>{this.props.rating}</h3>
        <div>{emoji}</div>
      </div>
    );
  }
 }

 export default Wine