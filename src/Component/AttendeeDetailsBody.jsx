import React from 'react'
import cloud from '../assets/cloud.png'
import { Link } from "react-router-dom";

const AttendeeDetailsBody = () => {
  return (
    <main class="bg-[#041e23] border border-solid border-[#0e464f] rounded-[40px] 
                  p-[48px] w-[700px] h-[1083px] my-[12px] mx-[auto] ">
      <header class="w-[604px]h-[48px]">
        <div class="flex justify-between w-[604px] h-[32px] font[var(--font-family)]
         font-[400] text-[16px] leading-[150%] text-[#fafafa]">
          <span class="w-[531px] h-[32px]">Attendee Details</span>
          <span>step 2/3</span>
        </div>
        <div class="w-[604px] h-[4px] rounded-[5px] bg-[#0e464f]    ">
          <div class="rounded-[5px] w-[326px] h-[4px] bg-[#24a0b5]"></div>
        </div>
      </header>

      {/* main section */}


      <section class="border border-solid border-[#0e464f] rounded-[32px] p-[24px] w-[604px]
        h-[907px] bg-[#08252b] my-[32px]">

        {/* Form Image */}
        <div class=" border-b-2 border-r-2 border-l-2 border-solid border-[#07373f] rounded-[24px]
            py-7 px-7 w-[556px] h-[328px] flex flex-col justify-between ">
        {/* IMAGE LABEL */}
        <span class="font-[var(--font-family)] font-[400] text-[16px] leading-[150%] align-center text-[#fafafa]">
          Upload profile photo
        </span>
        <div class="w-[508px] h-[200px] bg-[#00000033] flex justify-center items-center
        backdrop-blur-[14px] ">
          <div class=" border-[4px] border-solid border-[#24a0b580] bg-[#0e464f] rounded-[32px]
           p-[24px] w-[240px] h-[240px] flex flex-col justify-center items-center">
            <img src={cloud} alt="" />
            <p class="font-[var(--font-family)] font-[400] text-[16px] leading-[150%]
                 text-center text-[#fafafa]">Drag & drop or click to upload</p>
           </div>
        </div>
          

          
        </div>



        {/* Progres containiner */}

        <div class=" w-[556px] h-[4px] bg-[#07373f] my-[32px] mx-[auto]"></div>

        {/* FORM */}
          {/* FULL NAME */}
        <div class="w-[556px] h-[80px] flex flex-col">
          <span class="font-[var(--font-family)] font-[400] text-[16px]
              leading-[150%] text-[#fafafa]">Enter Your Name</span>
          <input type="text" class="border border-solid border-[#07373f] rounded-[12px] p-[12px];
         w-[556px] h-[48px]" />
        </div>
        {/* EMAIL */}
        <div class="w-[556px] h-[80px] flex flex-col my-[32px]">
          <span class="font-[var(--font-family)] font-[400] text-[16px]
              leading-[150%] text-[#fafafa]">Enter Your email *</span>
          <input type="email"  Placeholder="hello@avioflagos.io" required class="
          font-[var(--font-family)] font-[400] text-[16px] leading-[150%] text-[#fff] border border-solid 
          border-[#07373f] rounded-[12px] p-[12px] w-[556px] h-[48px]" />
        </div>
        {/* TEXTAREA */}
        <div class="w-[556px] h-[159px] flex flex-col">
          <span class="font-[var(--font-family)] font-[400] text-[16px]
              leading-[150%] text-[#fafafa]">Special Request?</span>
          <textarea name="" id="" placeholder="Textarea" class="border border-solid border-[#07373f] rounded-[12px] p-[12px]
            w-[556px] h-[127px] font-[var(--font-family)] font-[400] text-[16px] leading-[150%] text-[#aaa]"
            
            
            ></textarea>
        </div>

        {/* ACTION BUTTON */}
        <div class="w-[556px] h-[48px] flex justify-evenly items-center mt-[32px]">
        <Link to=".|SelectTicket">  <button class="border border-solid border-[#24a0b5] rounded-[8px] py-[12px] px-[24px]
                         w-[266px] h-[48px] font-[var(--font-family)] font-[400] text-[16px] leading-[150%]
                   text-[#24a0b5]">Back</button> </Link>
       <Link to="/TicketReady">  <button class=" rounded-[8px] py-[12px] px-[24px] w-[266px] h-[48px] bg-[#24a0b5]
             font-[var(--font-family)] font-[400] text-[16px] leading-[150%]
                   text-[#fff] ">
            Get My Free Ticket</button>  </Link> 
        </div>


        
    


        

        

      </section>
    </main>
  )
}

export default AttendeeDetailsBody