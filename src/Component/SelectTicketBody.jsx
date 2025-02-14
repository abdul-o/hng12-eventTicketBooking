import React from 'react'
import { Link } from "react-router-dom";

const SelectTicketBody = () => {
  return (
    <main class="bg-[#041e23] border border-solid border-[#0e464f] rounded-[40px] 
                p-[48px] w-[55vw] h-[858px] my[12px] mx-[auto] ">
      <header class="w-[604px]h-[48px]">
        <div class="flex justify-between w-[604px] h-[32px] font[var(--font-family)]
         font-[400] text-[16px] leading-[150%] text-[#fafafa]">
          <span class="w-[531px] h-[32px]">Ticket Selection</span>
          <span>step 1/3</span>
        </div>
        <div class="w-[604px] h-[4px] rounded-[5px] bg-[#0e464f]    ">
          <div class="rounded-[5px] w-[232px] h-[4px] bg-[#24a0b5]"></div>
        </div>
      </header>

      {/* main section */}


      <section class="border border-solid border-[#0e464f] rounded-[32px] p-[24px] w-[604px]
        h-[682px] bg-[#08252b] my-[32px]">

        {/* Section Title */}
        <div class=" border-b-2 border-r-2 border-l-2 border-solid border-[#07373f] rounded-[24px]
            py-7 px-7 w-[556px] h-[200px] backdrop-blur-[14px] 
            relative bg-opacity-10 bg-[#0A0C11] before:absolute before:inset-0 before:bg-[radial-gradient(57.42%_106.59%_at_14.02%_32.06%,rgba(24,160,181,0.2)_0%,rgba(36,160,181,0)_100%)]">

          {/* SECTION TITLE MAIN */}
          <div class="w-[508px] h-[118px] flex flex-col justify-evenly ">
            <h6 class="font-[var(--font3)] font-[400] text-[42px] leading-[100%] text-center text-[#fafafa] opacity-25" >
              Techember Fest "25</h6>
            <p class="px-[84px] font-[var(--font-family)] font-[400] text-[16px] leading-[150%] text-center text-[#fafafa]">Join us for an unforgetable experience at
              Event Name secure your spot now</p>
          </div>

          {/* section deet */}
          <div class="w-[359px] h-[24px] flex mx-[98.5px] my-[8px] justify-evenly">
            <span class="font-[var(--font-family)] font-[400] text-[16px] leading-[150%]
                   text-[#fafafa]">Event Location</span>
            <span class="font-[var(--font-family)] font-[400] text-[16px] leading-[150%]
                   text-[#fafafa]" >||</span>
            <span class="font-[var(--font-family)] font-[400] text-[16px] leading-[150%]
                   text-[#fafafa]">March 15 2025|7:00PM</span>
          </div>
        </div>



        {/* Progres containiner */}

        <div class=" w-[556px] h-[4px] bg-[#07373f] my-[32px] mx-[auto]"></div>

        {/* Ticket Type */}

        <div class="w-[556px] h-[174px]">
          <span class="font-[var(--font-family)] font-[400] text-[16px] leading-[150%]
                   text-[#fafafa]"> Select Ticket Type</span>
          <div class="border border-solid border-[#07373f] rounded-[24px] p-[16px] w-[556px];
                    h-[142px] flex justify-center items-center bg-[#052228]">
            {/* ticket wrapper */}
            <div class="w-[524px] h-[110px] flex justify-evenly items-center">
              
              {/* TICKET 1 */}
              <button class="border border-solid border-[#197686] rounded-[12px] p-[12px] hover:bg-[#12464e] focus:bg-[#12464e]
                         w-[158px] h-[110px] flex flex-col justify-evenly items-start">
                <h3 class="font-[var(--font-family)] font-[600] text-[24px] leading-[110%]
                   text-[#fff]">Free</h3>
                <div class=" w-[134px] h-[45px] flex flex-col justify-evenly items-start ">
                  <span class="font-[var(--font-family)] font-[400] text-[16px] leading-[150%]
                   text-[#fafafa] uppercase">Regular Access</span>
                  <span class="font-[var(--font-family)] font-[400] text-[14px] leading-[150%]
                   text-[#d9d9d9]">20/52</span>
                </div>
              </button>

              {/* TICKET 2 */}
              <button class="border border-solid border-[#197686] rounded-[12px] p-[12px] hover:bg-[#12464e]
                         w-[158px] h-[110px] flex flex-col justify-evenly items-start">
                <h3 class="font-[var(--font-family)] font-[600] text-[24px] leading-[110%]
                   text-[#fff]">$150</h3>
                <div class=" w-[134px] h-[45px] flex flex-col justify-evenly items-start ">
                  <span class="font-[var(--font-family)] font-[400] text-[16px] leading-[150%]
                   text-[#fafafa] uppercase">vip Access</span>
                  <span class="font-[var(--font-family)] font-[400] text-[14px] leading-[150%]
                   text-[#d9d9d9]">20/52</span>
                </div>
              </button>
              {/* TICKET 3 */}
              <button class="border border-solid border-[#197686] rounded-[12px] p-[12px] hover:bg-[#12464e]
                         w-[158px] h-[110px] flex flex-col justify-evenly items-start">
                <h3 class="font-[var(--font-family)] font-[600] text-[24px] leading-[110%]
                   text-[#fff]">$150</h3>
                <div class=" w-[134px] h-[45px] flex flex-col justify-evenly items-start ">
                  <span class="font-[var(--font-family)] font-[400] text-[16px] leading-[150%]
                   text-[#fafafa] uppercase">vvip Access</span>
                  <span class="font-[var(--font-family)] font-[400] text-[14px] leading-[150%]
                   text-[#d9d9d9]">20/52</span>
                </div>
              </button>
            </div>

          </div>
        </div>


        {/* NUMBER OF TICKET */}

        <div class="w-[556px] h-[80px] mb-[32px]">
          <label htmlFor="" class="font-[var(--font-family)] font-[400] text-[16px] leading-[150%]
                   text-[#fafafa]">Number of Ticket</label>
          <select name="" id="" class="border border-solid border-[#07373f] rounded-[12px] p-[12px] w-[556px]
                    h-[48px] font-[var(--font-family)] font-[400] text-[16px] leading-[150%]
                   text-[#fff]">
            <option value="" class="font-[var(--font-family)] font-[400] text-[16px] leading-[150%]
                   text-[#fff]">1</option>
            <option value="1">1</option>
          </select>
        </div>

        {/* ACTION BUTTON */}
        <div class="w-[556px] h-[48px] flex justify-evenly items-center mt-[32px]">
       <button class="border border-solid border-[#24a0b5] rounded-[8px] py-[12px] px-[24px]
                         w-[266px] h-[48px] font-[var(--font-family)] font-[400] text-[16px] leading-[150%]
                   text-[#24a0b5]">Cancel</button>
       <Link to="./Attendee">   <button class=" rounded-[8px] py-[12px] px-[24px] w-[266px] h-[48px] bg-[#24a0b5]
             font-[var(--font-family)] font-[400] text-[16px] leading-[150%]
                   text-[#fff] ">
            Next</button>    </Link>
        </div>

      </section>
    </main>
  )
}

export default SelectTicketBody