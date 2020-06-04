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
       // console.log(data);
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
        this.setState({zip:newczipObj});
       // console.log(newczipObj)
      })
      .catch((err)=>console.log(err));
    }
    render(){
        console.log("state",this.state)
        let display;
        if(!this.state.zip.length){
            display=<p>loading</p>
        }else{
            
            display=(
                <div>
                    {this.state.zip.map((item,i) => {
                     return (
                    <div key={i}> 
                    <h2>{item.locationText}</h2>
                    <ul>
                
                    <li>State: {item.statename}</li>
                    <li>Location: ({item.lat},{item.long})</li>
                    <li>Population(estimated): {item.EstimatedPopulation}</li>
                     <li>Total Wages: {item.TotalWages}</li>
                    
                    </ul>
                </div>
                );
                })}
                </div>
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