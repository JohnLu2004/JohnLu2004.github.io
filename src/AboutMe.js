import React from 'react';
import './AboutMe.css';
import './defaults.css';

const { Component } = React
class SplitText extends Component {
  render(){
    return(
      <span aria-label={this.props.copy} role={this.props.role}>
          {this.props.copy.split("").map(function(char, index){
            let style = {"animation-delay": (0.02 + index / 30) + "s"}
            return <span
              aria-hidden="true"
              key={index}
              style={style}>
              {char}
            </span>;
          })}
        </span>
    );
  }
}

const AboutMe = () => {
    return ( 
      <div class = 'body'>
        <div class='text'>
            <h1 class='name'><SplitText copy="Hi, My name is Bob Chen " role="heading" /></h1>
            <h2 class = 'intro'><SplitText copy="I'm a Computer Science Major that loves Hollow Knight, Eating chocos, and having butterflies in ma tum tum :3" role="heading" /></h2>
          </div>
          <div class = 'inner'>
            <div id = 'image'>
              <img class="pfp" src="pfp.jpg" alt="Me" width="300" height="260"></img>
            </div>
          </div>
        </div> 
     );
}
 
export default AboutMe;