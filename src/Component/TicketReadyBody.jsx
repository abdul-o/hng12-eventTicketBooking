import React from 'react'
import { Link } from "react-router-dom";

const TicketReadyBody = () => {
  return (
    <main class="bg-[#041e23] border border-solid border-[#0e464f] rounded-[40px] 
                  p-[48px] w-[700px] h-[1025px] my-[12px] mx-[auto] ">
      <header class="w-[604px]h-[48px]">
        <div class="flex justify-between w-[604px] h-[32px] font[var(--font-family)]
         font-[400] text-[16px] leading-[150%] text-[#fafafa]">
          <span class="w-[531px] h-[32px]">Ticket Selection</span>
          <span>step 3/3</span>
        </div>
        <div class="w-[604px] h-[4px] rounded-[5px] bg-[#0e464f]    ">
          <div class="rounded-[5px] w-[604px] h-[4px] bg-[#24a0b5]"></div>
        </div>
      </header>

      {/* main section */}


      <section class="border border-solid border-[#0e464f] p-[24px] w-[604px]
        h-[849px] bg-[#08252b] my-[32px]">


        {/* Tciket Heading */}
        <div class="w-[604px] h-[81px] flex flex-col justify-evenly items-center">
          <h5 class="font-[var(--font5)] font-[400] text-[32px] text-center text-[#fff]">Your Ticket is Booked!</h5>
          <span class="font-[var(--font-family)] font-[400] text-[16px] text-center text-[#fafafa] leading-[150%]">
            check your email for a copy or you can <a href="" class="font-[700]">download</a> </span>
        </div>

        {/* TICKET body */}

        <div class="w-[604px] h-[736px] flex justify-center items-center
        ">

          {/* TICKET */}

          <div class=" w-[70%] h-[650px] border border-solid border-[#24a0b5] flex flex-col justify-start items-center
         relative bg-[#072c31] before:absolute before:inset-0 before:bg-[radial-gradient(50%_13.92%_at_50%_0%,rgba(36,160,181,0.5)_0%,
         rgba(36,160,181,0)_100%)] after:absolute after:inset-0 after:bg-[radial-gradient(50%_36.17%_at_50%_103.25%,rgba(36,160,181,0.5)_0%,rgba(36,160,181,0)_100%)]">

            <div class="border-[#24a0b5] absolute rounded-full -top-2 -left-2 border-r border-stroke rotate-45 bg-[#08252b] w-5 h-5"></div>
            <div class="border-[#24a0b5] absolute rounded-full -top-2 -right-2 border-b border-stroke rotate-45 bg-[#08252b] w-5 h-5"></div>
            <div class="border-[#24a0b5] absolute rounded-full -bottom-2 -left-2 border-l border-stroke rotate-90 bg-[#08252b] w-5 h-5"></div>
            <div class="border-[#24a0b5] absolute rounded-full -bottom-2 -right-2 border-l border-stroke rotate-90 bg-[#08252b] w-5 h-5"></div>
            <div class="border-[#24a0b5] absolute rounded-full bottom-24 -left-2 border-r border-stroke bg-[#08252b] w-5 h-5"></div>
            <div class="border-[#24a0b5] absolute rounded-full bottom-24 -right-2 border-l border-stroke bg-[#08252b] w-5 h-5"></div>


            <div class="border border-solid border-[#24a0b5] rounded-[16px] p-[14px] w-[90%] h-[500px] my-[15px]
           bg-[#031e211a] backdrop-blur-[4px] flex flex-col justify-start items-center ">

              {/* main content holder */}
              <div class="w-[90%] h-[85px] mb-[10px] ">
                <div class="w-[100%] h-[105px] flex flex-col justify-center items-center">
                  <span class="font-[var(--font3)] font-[400] text-[34px] leading-[100%] align-center]
                    text-[#fff]">Techember Fest 25</span>
                  <div class="p-[4px] w-[70%] h-[70%] text-center text-[#fff]">04 Rumens road, Ikoyi, Lagos March 15, 2025 | 7:00 PM</div>
                </div>
              </div>


              {/* IMAGE */}

              <div class=" mb-[10px] bg-[url(/public/user.png)] bg-cover bg-center border-[4px] border-solid border-[#24a0b580] rounded-[12px] w-[140px] h-[140px]"></div>

              {/* TICKET READY DETAILS */}

              <div class=" flex flex-col justify-center items-center border border-solid border-[#133d44] rounded-[8px] p-[4px] w-[90%] h-[200px] bg-[#08343c]">
                {/* first sub details */}
                <div class=" p-[8px] w-[80%] h-[25%] flex justify-center items-center">

                  {/* cell one */}
                  <div class='flex flex-col justify-between border-r-[1px] border-b-[1px] border-solid border-[#12464e] p-[4px]
                  w-[108px] h-[45px]'>
                    <span class="opacity-[0.33] font-[400] text-[10px] leading-[150%] text-[#fff]  ">Enter your Name</span>
                    <span class="font-[700] text-[12px] leading-[150%] text-[#fff]">Avi Chukwu</span>
                  </div>
                  {/* cell two */}
                  <div class='flex flex-col justify-between border-l-[1px] border-b-[1px] border-solid border-[#12464e] p-[10px]
                  w-[108px] h-[45px]'>
                    <span class="opacity-[0.33] font-[400] text-[10px] leading-[150%] text-[#fff]" >Enter Your email</span>
                    <span class="font-[700] text-[12px] leading-[150%] text-[#fff]">User@email.com</span>
                  </div>
                </div>
                {/* second sub details */}
                <div class=" p-[8px] w-[80%] h-[25%] flex justify-center items-center">

                  {/* cell one */}
                  <div class='flex flex-col justify-between border-r-[1px] border-b-[1px] border-solid border-[#12464e] p-[4px]
                  w-[108px] h-[45px]'>
                    <span class="opacity-[0.33] font-[400] text-[10px] leading-[150%] text-[#fff]  ">Enter your Name</span>
                    <span class="font-[700] text-[12px] leading-[150%] text-[#fff]">Avi Chukwu</span>
                  </div>
                  {/* cell two */}
                  <div class='flex flex-col justify-between border-l-[1px] border-b-[1px] border-solid border-[#12464e] p-[10px]
                  w-[108px] h-[45px]'>
                    <span class="opacity-[0.33] font-[400] text-[10px] leading-[150%] text-[#fff]">Enter Your email</span>
                    <span class="font-[700] text-[12px] leading-[150%] text-[#fff]">User@email.com</span>
                  </div>
                </div>
                {/* third sub details */}
                <div class=" p-[8px] w-[80%] h-[45%]">
                  <span class="opacity-[0.33] font-[var(--font-family)] font-[400] text-[10px] leading-[150%] text-[#fff]">Special request?</span>
                  <p class="font-[var(--font-family)] font-[400] text-[10px] leading-[150%] text-[#fff]">Nil ? or the user sad story they write in their gets this whole space, max or three rows</p>
                </div>
              </div>

         {/* BARS */}
        

            </div>

            <div class="flex justify-evenly items-evenly w-[100%] mt-[12px]">
         <div class="rounded-[15px] w-[15px] h-[5px] bg-[#08252b] border-[#24a0b5] border-solid border transform-[rotate(-180deg)]"></div>
         <div class="rounded-[15px] w-[15px] h-[5px] bg-[#08252b] border-[#24a0b5] border-solid border transform-[rotate(-180deg)]"></div>
         <div class="rounded-[15px] w-[15px] h-[5px] bg-[#08252b] border-[#24a0b5] border-solid border transform-[rotate(-180deg)]"></div>
         <div class="rounded-[15px] w-[15px] h-[5px] bg-[#08252b] border-[#24a0b5] border-solid border transform-[rotate(-180deg)]"></div>
         <div class="rounded-[15px] w-[15px] h-[5px] bg-[#08252b] border-[#24a0b5] border-solid border transform-[rotate(-180deg)]"></div>
         <div class="rounded-[15px] w-[15px] h-[5px] bg-[#08252b] border-[#24a0b5] border-solid border transform-[rotate(-180deg)]"></div>
         <div class="rounded-[15px] w-[15px] h-[5px] bg-[#08252b] border-[#24a0b5] border-solid border transform-[rotate(-180deg)]"></div>
         <div class="rounded-[15px] w-[15px] h-[5px] bg-[#08252b] border-[#24a0b5] border-solid border transform-[rotate(-180deg)]"></div>
         <div class="rounded-[15px] w-[15px] h-[5px] bg-[#08252b] border-[#24a0b5] border-solid border transform-[rotate(-180deg)]"></div>
         <div class="rounded-[15px] w-[15px] h-[5px] bg-[#08252b] border-[#24a0b5] border-solid border transform-[rotate(-180deg)]"></div>
         <div class="rounded-[15px] w-[15px] h-[5px] bg-[#08252b] border-[#24a0b5] border-solid border transform-[rotate(-180deg)]"></div>
         <div class="rounded-[15px] w-[15px] h-[5px] bg-[#08252b] border-[#24a0b5] border-solid border transform-[rotate(-180deg)]"></div>
         <div class="rounded-[15px] w-[15px] h-[5px] bg-[#08252b] border-[#24a0b5] border-solid border transform-[rotate(-180deg)]"></div>
         <div class="rounded-[15px] w-[15px] h-[5px] bg-[#08252b] border-[#24a0b5] border-solid border transform-[rotate(-180deg)]"></div>
         <div class="rounded-[15px] w-[15px] h-[5px] bg-[#08252b] border-[#24a0b5] border-solid border transform-[rotate(-180deg)]"></div>
         <div class="rounded-[15px] w-[15px] h-[5px] bg-[#08252b] border-[#24a0b5] border-solid border transform-[rotate(-180deg)]"></div>
         </div>


          </div>

        </div>



{/* ACTION BUTTON */}
        <div class="w-[556px] h-[48px] flex justify-evenly items-center mt-[32px]">
        <Link to="./SelectTicket"> <button class="border border-solid border-[#24a0b5] rounded-[8px] py-[12px] px-[24px]
                         w-[266px] h-[48px] font-[var(--font-family)] font-[400] text-[16px] leading-[150%]
                   text-[#24a0b5]">Book Another Ticket</button> </Link>
          <button class=" rounded-[8px] py-[12px] px-[24px] w-[266px] h-[48px] bg-[#24a0b5]
             font-[var(--font-family)] font-[400] text-[16px] leading-[150%]
                   text-[#fff] ">
            Download Ticket</button>    
        </div>




      </section>
    </main>
  )
}

export default TicketReadyBody