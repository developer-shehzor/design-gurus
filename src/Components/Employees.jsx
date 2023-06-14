import React from "react";

const Employees = () => {
  return (
    <div class="flex flex-col md:flex-row mt-[52px]" id="services">
      <div class="w-[414px] w-1/2 md:w-[960px] h-[428px] bg-gray-100 flex flex-col md:flex-row justify-center items-center md:items-center gap-9">
        {/* Card 1 */}
        <div class="bg-white md:w-[226px] md:h-[143px] pt-[21px] px-[9px] pb-[46px] rounded-lg shadow-custom relative">
          <img
            class="h-[64px] w-[64px] rounded-full object-cover ml-[8.63px] mr-[8.63px] mb-[8px] absolute custom_left top-[-22px] shadow-sm"
            src="https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            alt=""
          />
          <div class="flex flex-col justify-center items-center">
            <span class="flex justify-center items-center text-[#0078E7] text-[19px] font-bold leading-[23px] mt-[25px] ml-[17px]">
              Shehzor
            </span>
            <span class="text-[15px] font-normal text-center mt-[9px]">
              Award winning UI/UX designer
            </span>
          </div>
        </div>
        {/* Card 2 */}
        <div class="bg-white w-[226px] h-[143px] pt-[21px] px-[9px] pb-[46px] rounded-lg shadow-custom relative">
          <img
            class="h-[64px] w-[64px] rounded-full object-cover ml-[8.63px] mr-[8.63px] mb-[8px] absolute custom_left top-[-22px] shadow-sm"
            src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
            alt=""
          />
          <div class="flex flex-col justify-center items-center">
            <span class="flex justify-center items-center text-[#0078E7] text-[19px] font-bold leading-[23px] mt-[25px] ml-[17px]">
              Jane Doe
            </span>
            <span class="text-[15px] font-normal text-center mt-[9px]">
              Award winning UI/UX designer
            </span>
          </div>
        </div>
      </div>
      <div class="w-[414px] w-[100%] w-1/2 w-[960px] h-[428px] bg-blue-500 flex flex-wrap justify-center items-center font-normal">
        <span class="w-[70%] text-[19px] text-white leading-[31px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl vel at
          adipiscing cras id amet. Lacinia morbi eu hendrerit auctor gravida
          ipsum auctor. Dolor felis semper cras habitasse sem. Rutrum posuere
          diam quam aliquet id.
        </span>
      </div>
    </div>
  );
};

export default Employees;
