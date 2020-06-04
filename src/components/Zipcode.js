import React, {Component} from 'react';
import axios from "axios";
class Zipcode extends Component{
    constructor(props){
      super(props);
      this.state={zip:[]};
    }
  
    componentDidMount(){
      axios.get("http://ctp-zip-api.herokuapp.com/zip/"+this.props.code)
      .then((response)=>{
        const data=response.data;
        console.log(data);
        //console.log(data.length)
        let newczipObj=[]
        for(let i=0;i<data.length;i++)
        {
            newczipObj[i]={
                locationText:data[i].LocationText,
                statename:data[i].State,
                lat:data[i].Lat,
                long:data[i].Long,
                population:data[i].EstimatedPopulation,
                totalWages: data[i].TotalWages,
            };
        }
        console.log(newczipObj);
        this.setState({zip:newczipObj});
      })
      .catch((err)=>console.log(err));
    }
    render(){
        // console.log(this.state.zip)
        // console.log(this.state.zip[0])
         console.log(this.state.zip[0])
        let display;
        if(!this.state.zip){
            display=<p>loading</p>
        }else{
            
            display=(
                <>
                <h2>{this.state.zip.statename}</h2>
                </>
            )
        }
    return (
        <div className='zip'>
        {display}
        
        </div>
    )
    }


  }

  export default Zipcode;