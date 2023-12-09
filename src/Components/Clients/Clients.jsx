import React from 'react'
import "./Clients.css"
import windowLine from "../Images/Windowline 1.webp"
import hotelierProLogo from "../Images/HotelierPro_Logo.svg"
import alMadinaLogo from "../Images/al-madina.png"
import reehynLogo from "../Images/Reehyn-Logo.webp"
import arrowForward from "../Images/arrow_forward.svg"

function Clients() {
  return (
    <div className='clients'>
      <div className="clients-container">
        <div className="text"> 
            <h1>Clients & Companies i’ve work with</h1>
            <p>Collaborating with a diverse range of 
                clients and esteemed companies, I bring a 
                wealth of experience and creativity to every project.</p>
                <div className="vector-bg">
             <svg xmlns="http://www.w3.org/2000/svg" width="368" height="368" viewBox="0 0 368 368" fill="none">
            <g filter="url(#filter0_f_114_59)">
                <path d="M87.5 280.5H91.9661C141.414 280.5 181.5 240.414 181.5 190.966V186.5H177.034C127.586 186.5 87.5 226.586 87.5 276.034V280.5Z" stroke="#2563EB" stroke-width="5"/>
                <path d="M181.5 280.5H177.034C127.586 280.5 87.5 240.414 87.5 190.966V186.5H91.9661C141.414 186.5 181.5 226.586 181.5 276.034V280.5Z" stroke="#2563EB" stroke-width="5"/>
                <path d="M186.5 280.5H190.966C240.414 280.5 280.5 240.414 280.5 190.966V186.5H276.034C226.586 186.5 186.5 226.586 186.5 276.034V280.5Z" stroke="#2563EB" stroke-width="5"/>
                <path d="M186.5 87.5H190.966C240.414 87.5 280.5 127.586 280.5 177.034V181.5H276.034C226.586 181.5 186.5 141.414 186.5 91.9661V87.5Z" stroke="#2563EB" stroke-width="5"/>
                <rect x="87.5" y="87.5" width="94" height="94" rx="47" stroke="#2563EB" stroke-width="5"/>
            </g>
            <defs>
            <filter id="filter0_f_114_59" x="0" y="0" width="368" height="368" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="42.5" result="effect1_foregroundBlur_114_59"/>
            </filter>
            </defs>
          </svg>
        </div>

        </div>
        <div className="client-info">
        <div className="client-logos">
            <img  className='logo windowline-one' src={windowLine} alt="Windowline Logo 1" />
            {/* <img className='logo' src="./src/Assets/Client Logo/Windowline 2.webp" alt="Windowline Logo 2" /> */}
            <img className='logo' src={hotelierProLogo} alt="hotelier pro logo" />
            <img className='logo almadina' src={alMadinaLogo} alt="al madina" />
            <img className='logo reehyn ' src={reehynLogo} alt="reehyn" />

            <div className="you-are-next">
            <h3>You're next?</h3>
            <img src={arrowForward} alt="" />
            </div>

        </div>
        </div>
      </div>
    </div>
  )
}

export default Clients
