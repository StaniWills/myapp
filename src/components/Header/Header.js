import React from 'react'
import s from './Header.module.css'

export default function Header() {
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        <li>Home</li>
        <li>Works</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}
