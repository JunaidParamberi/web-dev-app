import { useState } from "react"
import React from 'react'
import "./Contact.css"
import arrowUp from "../Images/Group 6.svg"



function Contact() {
    
    
        const [formData, setformData] = useState({
            firstName : "",
            lastName : "" ,
            email :"",
            phoneNumber : "",
            comments : "",
        })

  

    
    function handleChange(event){
        const {name, value, type, checked} = event.target

        setformData(oldFormData=> ({
            ...oldFormData,
            [name] : value
        }))
    }


    function submitHandle(event){
        event.preventDefault()
        

        console.log(formData)

        setformData (prevState => ( {
            ...prevState,
                firstName : "",
                lastName : "" ,
                email :"",
                phoneNumber : "",
                comments : "",  

             }))


    }



  return (
    <>
      <div className="contact-container">

        <div className="heading">
            <h1>Have a Project?
                Let’s Work Together</h1>
        </div>

        <div className="contact-details">
            <div className="text">
      
                <a href='#'>junaidparamberi@gmail.com</a>
                <img className='arrow-up' src={arrowUp} alt="" />
                <p>Contact : <strong>+971 58 197 6818</strong></p>
            </div>
                <div className="input">
                    <h1>Get a quote  </h1>
                <form className = "form" onSubmit={submitHandle}  >

                    <input 
                    onChange={handleChange} 
                     
                    type="text" 
                    placeholder="First Name" 
                    name="firstName"
                    value={formData.firstName}
                     />

                    <input 
                    onChange={handleChange} 
                     
                    type="text" 
                    placeholder="Last Name" 
                    name="lastName" 
                    value={formData.lastName}
                    />

                    <input 
                    onChange={handleChange} 
                     
                    type="email" 
                    placeholder="Email" 
                    name="email" 
                    value={formData.email}
                    />
                    
                    <input 
                    onChange={handleChange} 
                     
                    type="tel" 
                    placeholder="+971 00 000 0000" 
                    name="phoneNumber" 
                    value={formData.phoneNumber}
                    />
                    

                    <textarea 
                    onChange={handleChange} 
                    className="name" 
                    placeholder="Type your Comments" 
                    name="comments" 
                    value={formData.comments}
                    />

                    <button 
                     className="submit-form"> Submit </button>

                    
                    </form>
                </div>
        </div>
     
      </div>
     
    </>
  )
}

export default Contact
