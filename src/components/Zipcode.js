import React, {Component} from 'react';
import axios from "axios";
class Zipcode extends Component{
    constructor(props){
      super(props);
      this.state={
          zip:[],
          code:'',
        };
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        this.setState({
            code:event.target.zipcode.value,
        })
        this.componentDidMount()
    }
    componentDidMount(){
        if(this.state.code.length>4)
    {
      axios.get("http://ctp-zip-api.herokuapp.com/zip/"+this.state.code)
      .then((response)=>{
        const data=response.data;
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
        this.setState({
            zip:newczipObj,
        });
      })
      .catch((err)=>console.log(err));
    }
    }
    render(){
        //console.log("state",this.state)
        let display;
        if(!this.state.zip.length){
            display=(
                <div className="center">
                <form onSubmit={this.handleSubmit}>
                <div>Zip code:
                    <input type="text" name="zipcode"
                    onChange={e=>this.setState({code:e.target.value})}
                    value={this.state.code}
                    />
                     <button type="submit">check</button>
                </div>
                <div>No Result</div>
                </form>
                </div>
                )
        }else{
            
            display=(
                <div >
                <form className="center" onSubmit={this.handleSubmit}>
                <div>Zip code:
                    <input type="text" name="zipcode"
                    onChange={e=>this.setState({code:e.target.value})}
                    value={this.state.code}
                    />
                     <button type="submit">check</button>
                </div>
                <br/>
                </form>
                    {this.state.zip.map((item,i) => {
                     return (
                    //     <div className="card bg-light mb-3 width"  key={i}>
                    //     <div className="card-header">{item.locationText}</div>
                    //     <div className="card-body">
                    //       <h5 className="card-title">{item.statename}</h5>
                    //       <p >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    //     </div>
                    //   </div>
                    <div className="card bg-light mb-3 width mx-auto "  key={i}> 
                    <h2>{item.locationText}</h2>
                    <ul>
                
                    <li>State: {item.statename}</li>
                    <li>Location: ({item.lat},{item.long})</li>
                    <li>Population(estimated): {item.population}</li>
                     <li>Total Wages: {item.totalWages}</li>
                    
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