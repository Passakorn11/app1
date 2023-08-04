import React from 'react'
import './style.css'
function App() {
  let colors = ['red','green','blue','yellow']
  let list = colors.map(c=><li>{c}</li>)

  return<ul>{list}</ul>
 /* return(
    <>
    <h2>DeveloperThai.com</h2>
    <div className='title'>React&React Native</div>
    </>
  )*/
    
}

export default App;
