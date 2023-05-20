import { useState } from 'react'
import axios from 'axios'
import './App.css'
import { environment } from '../environment'

function App() {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [description,setDescription] = useState('')
  const [image,setImage] = useState('')
  const [address,setAddress] = useState('')
  const [city,setCity] = useState('')
  const [phone,setPhone] = useState('')

  const createAgency = async ()=>{
    await axios.post(environment.apiurl+'/agency/create',{
      name,
      email,
      password,
      description,
      image,
      address,
      city,
      phone,
    })
  }

  

  return (
    <>
    <input type="text" placeholder='name' onChange={(e)=>setName(e.target.value)}/>
    <input type="text" placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
    <input type="text" placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
    <input type="text" placeholder='description' onChange={(e)=>setDescription(e.target.value)}/>
    <input type="text" placeholder='image' onChange={(e)=>setImage(e.target.value)}/>
    <input type="text" placeholder='address' onChange={(e)=>setAddress(e.target.value)}/>
    <input type="text" placeholder='city' onChange={(e)=>setCity(e.target.value)}/>
    <input type="text" placeholder='phone' onChange={(e)=>setPhone(e.target.value)}/>
    <button className='create' onClick={createAgency}>Create</button>
    </>
  )
}

export default App
