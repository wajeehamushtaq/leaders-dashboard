import React,{Component} from 'react';
class Welcome extends Component{
render(){
    return (
    <div>
        <h1>Welcome {this.props.name}</h1>
    <p>{this.props.code}</p>
    </div>
    )}
}
export default Welcome;