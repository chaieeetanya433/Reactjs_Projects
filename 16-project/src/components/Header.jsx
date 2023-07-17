import React from "react"
import { Link } from "react-router-dom"
import {HashLink} from "react-router-hash-link"

const Header = () => {
  return (
    <nav>
        <h1>TechStart</h1>
        <main>
            <HashLink to={"/#home"}>Home</HashLink>
            <Link to={"/contact"}>&nbsp;&nbsp;Contact</Link>
            <HashLink to={"/#about"}>&nbsp;&nbsp;About</HashLink>
            <HashLink to={"/#brands"}>&nbsp;&nbsp;Brands</HashLink>
            <Link to={"/services"}>&nbsp;&nbsp;Services</Link>
        </main>
    </nav>
  )
}
export default Header