import React from 'react';
import { CustomButton, FormField } from '../components';
import { money } from '../assets';

const CreateCampaign = () => {
  return (
    <div className="bg-[#1c1c24] flex flex-col p-4 rounded-[10px] justify-center items-center sm:p-10">
      <div className="flex items-center justify-center min-w-[380px] bg-[#3a3a43] p-[16px] rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">
          Start a Campaign
        </h1>
      </div>

      <form className="w-full mt-[65px] gap-[30px] flex flex-col">
        <div className="flex justify-between gap-[40px]">
          <FormField
            labelName="Your Name*"
            placeholder="Lionel Fang"
            inputType="text"
          />
          <FormField
            labelName="Campaign Title*"
            placeholder="Write a title"
            inputType="text"
          />
        </div>

        <FormField
          labelName="Story*"
          placeholder="Write your story"
          isTextArea
        />

        <div className="w-full h-[120px] bg-[#8c6dfd] rounded-[10px] flex items-center gap-[20px] p-4">
          <img
            src={money}
            alt="money"
            className="w-[40px] h-[40px] object-contain"
          />
          <h4 className="font-epilogue font-bold text-[25px] text-white">
            You will get 100% of the raised amount
          </h4>
        </div>

        <div className="flex justify-between gap-[40px]">
          <FormField
            labelName="Goal*"
            placeholder="ETH 0.50"
            inputType="text"
          />
          <FormField labelName="End Date*" inputType="date" />
        </div>

        <FormField
          labelName="Campaign image*"
          inputType="url"
          placeholder="Place image URL of your campaign"
        />

        <div className="flex justify-center mt-[40px]">
          <CustomButton
            btnType="submit"
            title="Submit new campaign"
            styles="bg-[#1dc071]"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateCampaign;
