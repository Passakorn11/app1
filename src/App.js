import React from 'react'
import { userContext } from './context'
import Header2 from './context-header2'
import Content2 from './context-content2'
import Router2 from "./router2"
import Router3 from "./router3"

export default function App() {
return <Router3/>
}
/*import MessageBox from './state-func'

 export default function App(){
  return <MessageBox/>
}*/
/*export default function App(){
  let[user,setUser]=React.useState('')
  return(
    <userContext.Provider value={[user,setUser]}>
     <Header2/>
     <Content2/>
    </userContext.Provider>
  )
}*/
