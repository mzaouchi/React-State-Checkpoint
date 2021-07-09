import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import React from 'react';


class App extends React.Component {
 constructor(props){
   super(props);
   this.state={
     Person:{
      fullName:"Mahmoud Zaouchi",
      bio:"I am 27",
      imgSrc : "/Photo.jpeg",
      profession :"Developper"
     },

     shows:true,
     count :0

   }
 }
  componentDidMount(){
  setInterval(()=>this.setState({count:this.state.count+1}),1000)}

  

 
  render(){
     return(
       <div style={{margin:"auto",marginTop:"10px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}> 

      <button onClick={ () =>this.setState({shows : !this.state.shows, count : this.state.count = 0})} style={{backgroundColor:"green",color:"darkgrey",fontSize:"large",fontWeight:"bold"}}>Show</button>
      
      {this.state.shows &&

      <div style={{borderStyle:"solid",borderColor:"green",borderRadius:"30px",width:"350px",height:"670px",margin:"auto",marginTop:"15px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <img src={this.state.Person.imgSrc} alt="" style={{width : "200px", height : "400px"}}/>
      <h1 style={{color:"darkgreen"}}>{this.state.Person.fullName}</h1>
      <h2 style={{color:"green"}}>{this.state.Person.bio}</h2>
      <h3 style={{color:"gray"}}>{this.state.Person.profession}</h3>
      <h4 style={{color:"darkgreen"}}>{this.state.count}</h4> 
    </div> 
      }
      

      </div>
    )
    
  }
}

export default App;
