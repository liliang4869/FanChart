import React,{Component,PropTypes} from 'react'
import {
    View,ART,Text
}from 'react-native'
import Sector from './Sector'
const {Shape,Path,Group,Surface}=ART
export default class FanChart extends Component{
    componentWillMount(){
        this.datalist=this.props.DataList;
        let dataAmount=0;
        for(let i=0;i<this.datalist.length;i++){
             this.datalist[i].startAngle=dataAmount*360;
            dataAmount+=this.datalist[i].data;
            this.datalist[i].endAngle=dataAmount*360;
           
        }
        if(dataAmount<1)this.datalist.push({data:1-dataAmount,color:'#ff2288',startAngle:dataAmount*360,endAngle:360});

    }
    render(){
        let O=this.props.O;
        return <View style={[{height:200,width:200,justifyContent:'center',alignItems:'center'},this.props.style]}>
            <Surface height={this.props.style.height} width={this.props.style.width}>
               { this.datalist.map((data,index)=>{
                   return<Sector color={data.color} startAngle={data.startAngle} endAngle={data.endAngle} key={index} O={O}/>
               })} 
                </Surface>
        </View>
    }
}
FanChart.defaultProps={
    DataList:[{data:0.2,color:'#112233'},{data:0.3,color:'#223344'},{data:0.4,color:'#889922'}],
    style:{height:200,width:200},
    O:{x:100,y:100,r:100}
}
FanChart.propTypes={
    DataList:PropTypes.arrayOf(PropTypes.shape({data:PropTypes.number.isRequired,color:PropTypes.string.isRequired})),//data and color
    style:PropTypes.shape({height:PropTypes.number.isRequired,width:PropTypes.number.isRequired}),//style
    O:PropTypes.shape({x:PropTypes.number.isRequired,y:PropTypes.number.isRequired,r:PropTypes.number.isRequired})//location and radius
}