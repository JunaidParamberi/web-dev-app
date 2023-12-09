import React from 'react'
import "./intro.css"
import gitAnimation from '../Images/Git Branch Animation.png';


function Intro() {
    // const name = "Junaid Paramberi" 
  return (
    <>
    <div className='intro-container' >
     <section className='intro-section'>
        <div className="intro-text">
        <div className="vector-elements">
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
            <h2>Introduction</h2>
            <h1>Hello!, I’m {name},</h1>
            <h1>Programmer</h1>
            <h1>based on Dubai</h1>
            <p>"Welcome to my digital workspace! I'm a freelance web developer with a knack for turning ideas into responsive and user-friendly websites. Let's collaborate and bring your vision to the web."</p>
        </div>


        <div className="intro-link-contents">

            <div className="mouse-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="48" viewBox="0 0 50 48" fill="none">
                <g filter="url(#filter0_d_9_64)">
                    <path d="M4 0L46 18.0247L26.1226 23L21.2941 40L4 0Z" fill="#7C3AED"/>
                    <path d="M21.1964 38.514L4.95767 0.955092L44.4406 17.8996L26.0012 22.515L25.7207 22.5852L25.6417 22.8634L21.1964 38.514Z" stroke="white"/>
                </g>
                <defs>
                    <filter id="filter0_d_9_64" x="0" y="0" width="50" height="48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_9_64"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_9_64" result="shape"/>
                    </filter>
                </defs>
                </svg>
            </div>

            <div className="skills">
                <div className="skill-background">
                        <h1>Tech Stack</h1>
                    <div className="logos">
                        <div className="react icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                        <path d="M33.7102 14.0655C33.2849 13.9191 32.8442 13.7806 32.3904 13.6496C32.465 13.3452 32.5334 13.0447 32.5943 12.7494C33.5934 7.89969 32.9402 3.99273 30.7095 2.7064C28.5707 1.47297 25.0727 2.75902 21.5399 5.8335C21.2002 6.12914 20.8595 6.44214 20.519 6.77019C20.2921 6.55315 20.0656 6.3434 19.8396 6.14278C16.1371 2.85535 12.426 1.46998 10.1976 2.76004C8.06073 3.99704 7.42792 7.66995 8.32725 12.2661C8.41409 12.71 8.51561 13.1633 8.6304 13.6243C8.10517 13.7734 7.59811 13.9323 7.11294 14.1014C2.7722 15.6148 0 17.9866 0 20.4468C0 22.9878 2.97596 25.5363 7.49718 27.0817C7.85398 27.2036 8.2242 27.3189 8.60574 27.4284C8.48189 27.9269 8.37417 28.4155 8.28375 28.8919C7.42624 33.4083 8.0959 36.9944 10.227 38.2236C12.4283 39.493 16.1227 38.1882 19.7201 35.0437C20.0044 34.7951 20.2897 34.5315 20.5756 34.2552C20.9461 34.612 21.3161 34.9497 21.684 35.2664C25.1685 38.2649 28.61 39.4757 30.7392 38.2431C32.9383 36.97 33.6529 33.1177 32.7251 28.4306C32.6542 28.0727 32.5718 27.707 32.4791 27.3348C32.7386 27.2581 32.9933 27.1789 33.2416 27.0966C37.9419 25.5393 41 23.0217 41 20.4468C41 17.9777 38.1384 15.5899 33.7102 14.0655ZM32.6908 25.434C32.4666 25.5082 32.2366 25.58 32.0021 25.6495C31.4833 24.0068 30.783 22.2601 29.926 20.4554C30.7438 18.6936 31.417 16.9692 31.9214 15.3372C32.3408 15.4585 32.7478 15.5865 33.1401 15.7216C36.9342 17.0277 39.2485 18.9588 39.2485 20.4468C39.2485 22.0318 36.7491 24.0893 32.6908 25.434ZM31.0069 28.7708C31.4171 30.8433 31.4757 32.7172 31.204 34.182C30.9598 35.4983 30.4687 36.3758 29.8615 36.7273C28.5694 37.4752 25.8063 36.503 22.8263 33.9387C22.4847 33.6447 22.1406 33.3308 21.7954 32.9986C22.9506 31.7351 24.1053 30.2663 25.2321 28.635C27.2142 28.4591 29.0868 28.1716 30.7849 27.779C30.8686 28.1164 30.9429 28.4473 31.0069 28.7708ZM13.9778 36.5981C12.7154 37.0439 11.71 37.0567 11.1022 36.7062C9.80895 35.9603 9.27131 33.081 10.0047 29.2186C10.0887 28.7763 10.1887 28.3219 10.3039 27.8575C11.9834 28.2288 13.8423 28.4961 15.8291 28.6572C16.9636 30.2534 18.1515 31.7207 19.3487 33.0054C19.0871 33.2579 18.8266 33.4983 18.5675 33.7249C16.9768 35.1153 15.3827 36.1019 13.9778 36.5981ZM8.06365 25.4243C6.06445 24.741 4.41343 23.8529 3.28174 22.8838C2.26484 22.013 1.75143 21.1484 1.75143 20.4468C1.75143 18.9539 3.97723 17.0496 7.68948 15.7553C8.13991 15.5983 8.61143 15.4503 9.10076 15.3113C9.6138 16.9802 10.2868 18.725 11.099 20.4894C10.2763 22.2801 9.59373 24.0527 9.07565 25.7412C8.72681 25.6409 8.38884 25.5354 8.06365 25.4243ZM10.0461 11.9297C9.27561 7.99186 9.78735 5.02131 11.0751 4.2759C12.4467 3.48181 15.4798 4.61401 18.6766 7.45254C18.881 7.63397 19.0861 7.82386 19.2918 8.02032C18.1006 9.29944 16.9235 10.7557 15.7991 12.3425C13.8708 12.5213 12.025 12.8084 10.328 13.1928C10.2213 12.7636 10.1268 12.3419 10.0461 11.9297ZM27.7317 16.2967C27.326 15.596 26.9095 14.9118 26.4849 14.2463C27.7931 14.4116 29.0464 14.6312 30.2234 14.8998C29.8701 16.0323 29.4296 17.2164 28.9112 18.4303C28.5393 17.7242 28.1459 17.0123 27.7317 16.2967ZM20.5196 9.27207C21.3274 10.1473 22.1365 11.1245 22.9323 12.1848C22.1304 12.1469 21.3185 12.1272 20.5 12.1272C19.6892 12.1272 18.8834 12.1464 18.0864 12.1837C18.883 11.1333 19.699 10.1574 20.5196 9.27207ZM13.2612 16.3088C12.856 17.0115 12.4699 17.7196 12.1039 18.4289C11.5938 17.2193 11.1575 16.0298 10.801 14.8813C11.9708 14.6195 13.2183 14.4054 14.5181 14.2432C14.0875 14.9148 13.6676 15.6041 13.2612 16.3087V16.3088ZM14.5555 26.7754C13.2126 26.6256 11.9464 26.4225 10.7769 26.168C11.139 24.9989 11.585 23.784 12.1058 22.5483C12.4728 23.2572 12.8604 23.9655 13.2682 24.6698H13.2682C13.6836 25.3872 14.1139 26.09 14.5555 26.7754ZM20.568 31.7451C19.7379 30.8494 18.9099 29.8586 18.1012 28.7929C18.8862 28.8237 19.6866 28.8395 20.5 28.8395C21.3357 28.8395 22.1618 28.8206 22.975 28.7844C22.1766 29.8694 21.3704 30.8617 20.568 31.7451ZM28.9279 22.4854C29.4759 23.7344 29.9378 24.9429 30.3046 26.0921C29.1159 26.3633 27.8324 26.5817 26.4801 26.744C26.9057 26.0695 27.3258 25.3736 27.7387 24.6577C28.1563 23.9335 28.5529 23.2082 28.9279 22.4854ZM26.2215 23.7827C25.5806 24.894 24.9226 25.9548 24.2546 26.9562C23.038 27.0431 21.7811 27.088 20.5 27.088C19.2241 27.088 17.983 27.0483 16.7879 26.9708C16.093 25.9563 15.4207 24.8923 14.7839 23.7923H14.784C14.1489 22.6953 13.5643 21.589 13.0346 20.4889C13.5642 19.3862 14.1472 18.2787 14.7787 17.1836L14.7786 17.1838C15.4117 16.0859 16.0781 15.0271 16.7666 14.0189C17.9859 13.9268 19.2363 13.8787 20.4999 13.8787H20.5C21.7693 13.8787 23.0213 13.9271 24.2403 14.0201C24.9182 15.0209 25.5801 16.0762 26.2157 17.1744C26.8586 18.2848 27.4492 19.385 27.9832 20.464C27.4508 21.5615 26.8615 22.6728 26.2215 23.7827ZM29.8347 4.22379C31.2076 5.01554 31.7415 8.20868 30.8789 12.3959C30.8239 12.6631 30.7619 12.9352 30.6946 13.211C28.9936 12.8185 27.1465 12.5264 25.2126 12.345C24.0861 10.7407 22.9186 9.28221 21.7468 8.01952C22.0618 7.71644 22.3764 7.42744 22.6897 7.15472C25.7166 4.52052 28.5457 3.48049 29.8347 4.22379ZM20.5 16.7857C22.522 16.7857 24.1612 18.4248 24.1612 20.4468C24.1612 22.4688 22.522 24.108 20.5 24.108C18.478 24.108 16.8388 22.4688 16.8388 20.4468C16.8388 18.4248 18.478 16.7857 20.5 16.7857Z" fill="#00D8FF"/>
                        </svg>
                        </div>

                        <div className="javascript icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="41px" height="41px" viewBox="0 0 1052 1052"><path fill="#f0db4f" d="M0 0h1052v1052H0z"/><path d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z" fill="#323330"/></svg>
                        </div>

                        <div className="figma icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                        <path d="M13.7201 41C17.4921 41 20.5534 37.9386 20.5534 34.1666V27.3333H13.7201C9.94805 27.3333 6.88672 30.3946 6.88672 34.1666C6.88672 37.9386 9.94805 41 13.7201 41Z" fill="#0ACF83"/>
                        <path d="M6.88672 20.5C6.88672 16.728 9.94805 13.6667 13.7201 13.6667H20.5534V27.3334H13.7201C9.94805 27.3334 6.88672 24.272 6.88672 20.5Z" fill="#A259FF"/>
                        <path d="M6.88672 6.83333C6.88672 3.06133 9.94805 0 13.7201 0H20.5534V13.6667H13.7201C9.94805 13.6667 6.88672 10.6053 6.88672 6.83333Z" fill="#F24E1E"/>
                        <path d="M20.5534 0H27.3867C31.1587 0 34.22 3.06133 34.22 6.83333C34.22 10.6053 31.1587 13.6667 27.3867 13.6667H20.5534V0Z" fill="#FF7262"/>
                        <path d="M34.22 20.5C34.22 24.272 31.1587 27.3334 27.3867 27.3334C23.6147 27.3334 20.5534 24.272 20.5534 20.5C20.5534 16.728 23.6147 13.6667 27.3867 13.6667C31.1587 13.6667 34.22 16.728 34.22 20.5Z" fill="#1ABCFE"/>
                        </svg>
                        </div>

                        <div className="git icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                        <g clip-path="url(#clip0_525_17)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M39.6116 18.7251L22.198 1.31279C21.1959 0.309799 19.5693 0.309799 18.5658 1.31279L14.9499 4.92873L19.5369 9.51571C20.6029 9.15556 21.8251 9.39712 22.675 10.2469C23.5287 11.102 23.7685 12.3348 23.3996 13.4043L27.8203 17.825C28.8898 17.4565 30.1239 17.695 30.9781 18.5505C32.1719 19.7439 32.1719 21.6781 30.9781 22.8723C29.7839 24.0665 27.8497 24.0665 26.655 22.8723C25.757 21.9735 25.5352 20.6545 25.9898 19.5483L21.8671 15.4256L21.8667 26.2747C22.1577 26.4191 22.4325 26.6112 22.675 26.8528C23.8688 28.0461 23.8688 29.9803 22.675 31.1754C21.4807 32.3692 19.5456 32.3692 18.3532 31.1754C17.1594 29.9803 17.1594 28.0461 18.3532 26.8528C18.6481 26.5583 18.9894 26.3355 19.3535 26.1859V15.2357C18.9894 15.0869 18.6486 14.8654 18.3532 14.5687C17.4486 13.6655 17.2312 12.3383 17.6946 11.2276L13.1732 6.70541L1.23316 18.6446C0.229733 19.6485 0.229733 21.275 1.23316 22.278L18.6468 39.6908C19.6494 40.6938 21.2755 40.6938 22.2794 39.6908L39.6116 22.359C40.6146 21.3556 40.6146 19.7281 39.6116 18.7251" fill="#DE4C36"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_525_17">
                            <rect width="40.0391" height="39.8833" fill="white" transform="translate(0.480469 0.560547)"/>
                            </clipPath>
                        </defs>
                        </svg>
                        </div>
                    </div>
                </div>

        </div>
                <div className="git-repo">
                    <div className="git-name">
                        <h1>github / JunaidParamberi</h1>
                    </div>
                    <div className="git-model">
                        <div className="rectangle1 rectangles grey-bg"></div>
                        <div className="rectangle2 rectangles grey-bg"></div>
                        <div className="rectangle3 rectangles grey-bg"></div>
                        <div className="rectangle4 rectangles"></div>
                    </div>
                    <div className="git-model-list">
                    <div className="model-list1"></div>
                    <div className="model-list2"></div>
                    </div>
                </div>

            </div>
             <img src={gitAnimation} alt="" className="git-animation-icon" />
     </section>
    </div>
    {/* <div className="git-repo">
                    <div className="git-name">
                        <h1>github / {name}</h1>
                    </div>
                    <div className="git-model">
                        <div className="rectangle1"></div>
                        <div className="rectangle2"></div>
                        <div className="rectangle3"></div>
                        <div className="rectangle4"></div>
                    </div>
                    <div className="git-model-list">
                    <div className="model-list1"></div>
                    <div className="model-list2"></div>
                    </div>
                </div>

            <img src={gitAnimation} alt="" className="git-animation-icon" /> */}
    </>
  )
}

export default Intro
