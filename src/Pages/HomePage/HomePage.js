import React from 'react'
import s from './HomePage.module.css'
import Represent from '../../components/Represent/Represent'
import Posts from '../../components/Posts/Posts'
import Works from '../../components/Works/Works'
import Footer from '../../components/Footer/Footer'


export default function HomePage() {
  return (
    <div className={s.container}>
        <Represent/>
        <Posts/>
        <Works/>
        <Footer/>
    </div>
  )
}
