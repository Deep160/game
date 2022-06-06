import React,{ Component } from 'react';
import './App.css';

class App extends Component {
   Arr=[]

  fun1 = (e)=>
  {

    // alert(e.target.id)

    let D_Click = document.getElementById(e.target.id)
    let D_25 = document.getElementById('25')

    let l25 = D_25.style.left
    let t25 = D_25.style.top

    D_25.style.left = D_Click.style.left
    D_25.style.top = D_Click.style.top

    D_Click.style.left = l25
    D_Click.style.top = t25
  }

  componentWillMount() 
  {
    let val = 1
    for(let y=1; y<500; y+=100)
    {
      for(let x=1;x<=500;x+=100)
      {
        this.Arr.push(
          <div style={{
            border: '2px solid black',
            width: '80px',
            height: '80px',
            position: 'absolute',
            margin: '50px 500px',
            left: x+'px',
            top: y+'px',
            borderradius: '10px',
            background:'rgb(250,255,55)',
            fontSize :'50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer'
          }}
          
          id = {val}
          onClick = {this.fun1}
          
          
          >
              {(val === 25)? '' : val++}
          </div>
        )
      }
    }
  }

  render(){
    return (
      <div>
      <div style={{ backgroundColor: 'silver', display:'flex',justifyContent: 'center' }}><h2>PUZZLE GAME</h2></div>
        <div style={{ border: '1px solid green', position:'relative',height: '600PX' }}>
        {this.Arr}
        </div>
      </div>
    );
  }
}

export default App;

