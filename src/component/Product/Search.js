import React from 'react'
import { useState } from 'react'
import{ useNavigate } from 'react-router-dom'
import {FcSearch} from 'react-icons/fc'
import './search.scss'
import MetaData from '../layout/MetaData'
const Search = () => {
    const history=useNavigate()
    const submitHandler=(e)=>{
        e.preventDefault()
        if(keyword.trim()){
            history(`/products/${keyword}`)
        }
        else{
            history('/products')
        }
        console.log()
    }
    const [keyword,setKeyword]=useState("")
  return (
    <>
    <MetaData title='Search a product --KONUKKUPOO'/>
    <form  className="searchBox" onSubmit={submitHandler}>
        <input type="text" placeholder="Search a product" onChange={e=>setKeyword(e.target.value)} />
        <button type='submit'> <FcSearch style={{fontSize:"2.5vmax"}}/>  </button>
    </form>
    </>
  )
}

export default Search