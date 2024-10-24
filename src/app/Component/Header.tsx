import React from "react";

const Header = () => {
    return (
        <div className="flex justify-between px-4 shadow-2x1 bg-grey-sea h-[70px]">
            <div className="font-bold w-[152px] h-[34px] text-4xl mt-5"> LOGO </div>

            <div className="flex gap-6 mt-5">
                <div className="cursor-pointer text-2xl">Home</div>
                <div className="cursor-pointer text-2xl">About</div>
                <div className="cursor-pointer text-2xl">Service</div>
                <div className="cursor-pointer text-2xl">Contact Us</div>
            </div>
        </div>
    );
};

export default Header;