import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
    <div className='footer-container'>
            <div className="social-media">
                <a className='twitter'  href="https://twitter.com/ParamberiJunaid" target='_blank' >Twitter</a>
                <a  className='facebook' href="https://www.facebook.com/junaid.raziqkundoor.7" target='_blank' >Facebook</a>
                <a className='insta' href="https://www.instagram.com/junaid_paramberi/?hl=en" target='_blank' >Instagram</a>
                <a className='linkedin' href="https://www.linkedin.com/in/junaid-paramberi-69b8512a2/" target='_blank' >Linkedln</a>
                <a className='git' href="https://github.com/JunaidParamberi" target='_blank' >Github</a>

            </div>

            <p>© 2023. Powered and secured by Junaid Paramberi </p>
    </div>
    </>
  )
}

export default Footer 
