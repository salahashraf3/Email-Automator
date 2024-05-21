import React from 'react'
import Button from './button'
import { Link } from 'react-router-dom'

const Form = () => {
  return (
    <div className="form_container">
    <div className="form_wrapper">
    <form action="" className="form">
    <h2>Email Automator</h2>
      <div className="input_box">
        <input type="email" placeholder="Email"  />
        <i class='bx bxs-envelope'></i>
      </div>

      <div className="input_box">
        <input type="text" placeholder="Company Name" />
        <i class='bx bxs-buildings' ></i>
      </div>

      <div className="input_box">
        <input type="text" placeholder="Company Role"/>
        <i class='bx bxs-user'></i>
      </div>
      <div className="btn_group">
        <Button className="btn_send">Send</Button>
        <Link to={"/edit"}>
        <Button className="btn_edit">Edit</Button>
        </Link>
      </div>
    </form>
    </div>
  </div>
  )
}

export default Form