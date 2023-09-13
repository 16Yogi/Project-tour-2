import React, { useState } from 'react';
// import React, { useState } from 'react';
import './Customisetour.css';
import axios from "axios"

// import axios from "axios";
export default function Customisetour() {
    // const [inputs,setInputs] = useState({})

    // const handleChange = (event) =>{
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     setInputs(values=> ({...values,[name]:value}));
    // }
    // const handleSubmit = (event) =>{
    //     event.preventDefault();

    //     axios.post('http://localhost:8888/api/user./save',inputs);
    //     console.log(inputs);
    // }
    
    
    //for input variables ritik
    // const [name,setname] = useState("");
    // const [email,setemail] = useState("");
    // const [phone,setphone] = useState("");
    // const [fromadd,setfromadd] = useState("");
    // const [toadd,settoadd] = useState("");
    // const [nummember,setnummember] = useState("");
    // const [message,setmessage] = useState("");
    
   
    //for button 
    // const [msg, setMsg] = useState('')
    const [name,setname] = useState("");
    const [email,setemail] = useState("");
    const [phone,setphone] = useState("");
    const [fromadd,setfromadd] = useState("");
    const [toadd,settoadd] = useState("");
    const [nummember,setnummember] = useState("");
    const [message,setmessage] = useState("");

    let submit=async(e)=>{
        e.preventDefault()
        try{
            alert("submitted")
            
            await axios.post("http://localhost:8000/",{
                // msg
                name,
                email,
                phone,
                fromadd,
                toadd,
                nummember,
                message
            })
        }catch(e){
            console.log(e);
        }
    }

    // ritik
    // const usersdata = async () => {
    //     try {
    //       const user = {
    //        name:name,
    //        email:email,
    //        phone:phone,
    //        fromadd:fromadd,
    //        toadd:toadd,
    //        nummember:nummember,
    //        message:message,
    //       };
    
    //       const data = await fetch("http://localhost:5000/users", {
    //         method: "post",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(user),
    //       });
    //     } catch {}
    //   };

    //for on change
    // const name1 = (e) =>{
    //     const value = e.target.value;
    //     setname(value);
    // };
    // const email1 = (e) =>{
    //     const value = e.target.value;
    //     setemail(value);
    // }
    // const phone1 = (e) =>{
    //     const value = e.target.value;
    //     setphone(value);
    // }
    // const fromadd1 = (e) =>{
    //     const value = e.target.value;
    //     setfromadd(value);
    // }
    // const toadd1 = (e) =>{
    //     const value = e.target.value;
    //     settoadd(value);
    // }
    // const nummember1 = (e) =>{
    //     const value = e.target.value;
    //     setnummember(value);
    // }
    // const message1 = (e) =>{
    //     const value = e.target.value;
    //     setmessage(value);
    // }
  return (
    <>
        <div className="container-fluid" id="Custm-tour-cf">
            <div className="container p-5">
                <div className="col p-0 mx-auto" id="Customisetour-wrap">
                    <div className="col" id="Customisetour-item">
                        <h3 className='text-center'>Perfect Holiday Packages for You</h3>
                    </div>
                    <div className="col">
                        <form action="">
                            <p>We can arrange an itinerary around your interests, dates, and special requests. ... Contact us to book a Private Expedition or let us design a customized itinerary for you.</p>
                            <p>Just give us a brief about you requirments</p>
                            {/*  */}
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Full Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Full Name" onChange={(e)=>{setname(e.target.value)}}/>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Email Address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email Address" onChange={(e)=>{setemail(e.target.value)}}/>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Phone Number</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Phone Number" onChange={(e)=>{setphone(e.target.value)}}/>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Leaving from</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Leaving from" onChange={(e)=>{setfromadd(e.target.value)}}/>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Enter Destination</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Destination" onChange={(e)=>{settoadd(e.target.value)}}/>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">No. of travellers</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="No. of travellers" onChange={(e)=>{setnummember(e.target.value)}}/>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Special requirements (Optional)</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e)=>{setmessage(e.target.value)}}></textarea>
                            </div>
                            <button type="submit" class="btn" onClick={submit} value="Submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
