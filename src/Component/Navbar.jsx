import React from 'react'
import ticz from '../assets/ticz.png'
import logo from '../assets/logo.png'
import line5 from '../assets/Line5.png'

const Navbar = () => {
  return (
    <nav class="border border-solid  border-[#197686] rounded-[24px] py-3 px-4 flex justify-between items-center
         w-[1200px] h-[76px] bg-[#05252c66] m-auto backdrop-blur-sm">

      {/* LOGO */}
      <div class="w-[91px] h-[36px] flex justify-evenly item-center">
        <div class="border border-solid border-[#0e464f] py-1.5 px-2
           rounded-2xl w-[45px] h-[30px] bg-[#052f35] flex justify-center item-center">
          <img src={logo} alt="" />
          </div>
        <img src={ticz} alt="" />
      </div>


      {/* NAVIGATION */}
      <div class="w-[341px] h-[34px] flex justify-between items-center" >
        <span class="font-[var(--second-family)] font-[400] text-[18px] text-[#fff]">Events</span>
        <span class="font-[var(--second-family)] font-[400] text-[18px] text-[#b3b3b3]">My Tickets</span>
        <span class="font-[var(--second-family)] font-[400] text-[18px] text-[#b3b3b3]">About Project</span>
      </div>


      {/* MY TICKET */}
      <button class="w-[169px] h-[52px] border border-solid border-[#d5ea001a] rounded-[12px] flex justify-evenly 
                       items-center
                      py-4 px-6 w-[169px] h-[52px] bg-[#fff] font-[var(--second-family)]
                      font-[400] text-[16px] leading-[125%] uppercase
                   text-[#0a0c11]">My Tickets
                   <img src={line5} alt="" class="stroke-1 stroke[#0a0c11]"/>
                   </button>



    </nav>
  )
}

export default Navbar