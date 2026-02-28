import React, { useContext } from 'react'

import {Routes,Route}from 'react-router';
import { AuthContext } from './context/authContext'

import Navbar from "../src/components/navbar/navbar"
import Footers from './components/footers/footers'
import Warning from "../src/components/warning/warning"

import Login from './components/login/login';
import Register from './components/register/register';

import Home from '../src/pages/home/home'
import Post from '../src/pages/post/post'
import Recipe from '../src/pages/recipe/recipe'
import Account from '../src/pages/account/account'

const App = () => {


const { login } = useContext(AuthContext);





  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>

        {login ?(
          <Route path='/post' element={<Post/>}/>
        ):(
           <Route path='/post' element={<Login/>}/>
          // <Route path='/post' element={<Warning warning={"You Must Login First to Post"}/>}/>
        )}
        <Route path='/recipe' element={<Recipe/>}/>
        <Route path='/account' element={<Account/>}/>
      </Routes>
      <Footers/>
    </div>
  )
}

export default App
