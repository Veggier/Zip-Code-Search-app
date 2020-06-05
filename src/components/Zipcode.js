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
        axios.get("https://ctp-zip-api.herokuapp.com/zip/"+this.state.code)
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
        .catch((err)=>alert("this Zipcode is not exist"));
    }
    render(){
        let display;
        if(!this.state.zip.length){
            display=(
                <div >
                    <h2 className="center">Zipcode Search</h2>
                    <br/>
                <form className="card  border-light mb-3 width mx-auto" onSubmit={this.handleSubmit}>
                <div className="input-group mx-auto">
                <span className="input-group-text">Zip code:</span>
                    <input type="text" name="zipcode"  placeholder="Try 10017"
                    onChange={e=>this.setState({code:e.target.value})}
                    value={this.state.code}
                    />
                    <div className="input-group-append">
                     <button className="btn btn-info " type="submit">Search</button>
                     </div>
                </div>
                <div>No Result</div>
                </form>
                </div>
                )
        }else{
            
            display=(
                <div >
                    <h2 className="center">Zipcode Search</h2>
                    <br/>
                <form className="card  border-light mb-3 width mx-auto" onSubmit={this.handleSubmit}>
                <div className="input-group mx-auto">
                <span className="input-group-text">Zip code:</span>
                    <input type="text" name="zipcode"  placeholder="Try 10017"
                    onChange={e=>this.setState({code:e.target.value})}
                    value={this.state.code}
                    />
                    <div className="input-group-append">
                     <button className="btn btn-info " type="submit">Search</button>
                     </div>
                </div>
                </form>
                <div className="row row-cols-3">
                    {this.state.zip.map((item,i) => {
                     return (
                        <div className="col" key={i}>
                        <div className="card bg-light mb-3 width mx-auto"  key={i}>
                        <div className="card-header">{item.locationText}</div>
                        <div className="card-body">
                        <h5 className="card-title">State:{item.statename}</h5>
                        <ul> 
                            <li>Location: ({item.lat},{item.long})</li>
                            <li>Population(estimated): {item.population}</li>
                            <li>Total Wages: {item.totalWages}</li>
                        </ul>
                        </div>
                      </div>
                      </div>
                );
                })}
                </div>
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