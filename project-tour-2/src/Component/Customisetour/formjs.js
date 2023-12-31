import React, { useState } from 'react'
import axios from "axios"

export default function Formjs() {

    const [msg, setMsg] = useState('')

    let submit=async(e)=>{
        e.preventDefault()
        try{
            alert("submitted")
            
            await axios.post("http://localhost:8000/",{
                msg
            })
        }catch(e){
            console.log(e);
        }
    }
    return (
    <>
        <div className="container">
              <form action="POST">
                    <textarea name="text" onChange={(e)=>{setMsg(e.target.value)}}  id="" cols="30" rows="10"></textarea>
                    <input type="submit" onClick={submit} value="Submit"/>
              </form>
        </div>
    </>
    )
}
