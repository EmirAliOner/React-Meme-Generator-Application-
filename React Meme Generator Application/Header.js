import React from 'react'
import './Header.css';

export default function Header(props) {
  return (
   <header>
    <p>{props.name}</p>
    </header>
  )
}