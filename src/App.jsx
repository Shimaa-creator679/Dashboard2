import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Classic from "./pages/Classic/Classic"
import Minimal from "./pages/minimal/Minimal"
import { Toaster, toast } from 'react-hot-toast';

import { useEffect } from "react"
import { fetchClassicData } from './Redux/Classic/classicSlice'
import { useDispatch } from 'react-redux'
import Login from "./pages/Login/Login"
import Signup from "./pages/Register/Signup"
import Passowrd from "./pages/Forgotpassowrd/password"
import MailBox from "./pages/MailBox/MailBox"
import Primary from "./pages/MailBox/Primary"

import ChatBox from "./pages/chatBox/ChatBox"
import Faq from "./pages/faq/Faq"
import Trans from "./pages/trans/Trans"
import Budgets from "./pages/Budgets/Budgets"
import Expenses from "./pages/Expenses/Expenses"

function App() {

    const dispatch= useDispatch()
useEffect(()=>{
  dispatch(fetchClassicData())
},[])



  return (
    <>
    <Toaster position="bottom-right" />
    <Routes>
    <Route path="/" element={<Layout />} >
    <Route index element={<Classic/>}/>
    <Route path="minimal" element={<Minimal />} />
    <Route path="login" element={<Login />} />
    <Route path="signup" element={<Signup />} />
    <Route path="password" element={<Passowrd />} />
    <Route path="mailbox" element={<MailBox/>}>
      <Route index element={<Primary />} />
     

    </Route>
 <Route path="chatbox" element={<ChatBox/> } />
 <Route path="faq" element={<Faq/> } />
 <Route path="trans" element={<Trans/> } />
 <Route path="Budgets" element={<Budgets/> } />
 <Route path="Expenses" element={<Expenses/> } />
    
    </Route>

  </Routes>
    </>
 
  

  )
}

export default App
