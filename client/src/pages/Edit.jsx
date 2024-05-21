import React, { useRef, useState } from 'react'
import Main from "../components/Main"
import Button from '../components/button'
import { Link } from 'react-router-dom'



const Edit = () => {

    const [text, setText] = useState('');
    const textAreaRef =useRef(null)

    const handleSubmit =(e) =>{
        e.preventDefault()
    }

    const insertTextAtCursor = (textToInsert) => {
        const {selectionStart,selectionEnd} = textAreaRef.current

        const newText = text.slice(0,selectionStart) + textToInsert + text.slice(selectionEnd)
        setText(newText)

        const newPosition = selectionStart + textToInsert.length 

        textAreaRef.current.setSelectionRange(newPosition,newPosition)

        textAreaRef.current.focus()
    }

  return (
    <Main>
        <div className="form_container">
    <div className="form_wrapper">
    <form action="" className="form">
    <h2>Edit Details</h2>
      

      <div className="input_box">
        <textarea name="content" placeholder="Write the content of the email ....." ref={textAreaRef} value={text} onChange={(e)=> setText(e.target.value)} cols={12} rows={5}></textarea>
        <i class='bx bxs-envelope'></i>
      </div>

      <div className="selection_group">
      <button onClick={(e)=> {
        e.preventDefault()
        insertTextAtCursor("${companyName} ")}
        }>Company Name</button>
         <button onClick={(e)=> {
        e.preventDefault()
        insertTextAtCursor("${companyRole} ")}
        }>Company Role</button>
      </div>

      <div className="input_box">
        <input type="file" />
        <i class='bx bxs-file-pdf' undefined ></i>
      </div>

      <div className="btn_group">
        <button className='btn btn_send' onClick={handleSubmit}>Update</button>
     <Link to={"/"}>
     <Button className="btn_edit">Back</Button>
     </Link>     
      </div>

      

    </form>
    </div>
  </div>
    </Main>
  )
}

export default Edit