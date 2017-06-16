import React,{Component} from 'react'
import {
    View,ART,Text
}from 'react-native'
const {Shape,Path}=ART
export default class Sector extends Component{
    componentWillMount(){
        let O=this.props.O;
        let Angle=this.props.endAngle-this.props.startAngle
        let startLocation=this.getLocationByAngle(this.props.startAngle);
        let endLocation=this.getLocationByAngle(this.props.endAngle);
        console.log(startLocation,endLocation);
        this.path=new Path().moveTo(O.x,O.y).lineTo(startLocation.x,startLocation.y).arcTo(endLocation.x,endLocation.y,O.r,O.r,Angle>180?1:0).close();
    }
    render(){
        return (<Shape d={this.path} strokeWidth={0.5} fill={this.props.color}/>)
    }
    getLocationByAngle(Angle){
let arc=Angle*Math.PI/180;
let O=this.props.O;
let x=O.x+(Math.cos(arc))*O.r;
let y=O.y+(Math.sin(arc))*O.r;
return {x:x,y:y}
    }
    
}
Sector.defaultProps={
    startAngle:0,
    endAngle:150,
    O:{x:50,y:50,r:50},
    color:'#552233'
}