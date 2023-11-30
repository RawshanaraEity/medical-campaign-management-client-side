import {  FaCheckSquare } from "react-icons/fa";


const AboutUs = () => {
    return (
        <div>
            <div className="flex gap-5 lg:gap-20 px-5 lg:px-0 flex-col md:flex-row justify-between items-center">
                <div className="flex-1 bg-lime-300">
                    <img className="p-5" src="https://i.ibb.co/5sq31nv/aboutus.jpg" alt="" />
                </div>
                <div className="flex-1 space-y-2 lg:space-y-5">
                    <p className="lg:text-xl font-bold text-lime-500">About Us</p>
                    <h2 className="text-2xl lg:text-4xl font-semibold">We are trusted The Best Healthcare Management</h2>
                    <p className="text-sm lg:text-lg font-medium text-gray-500">We Can Work Together For Create a Better Healthcare System.We can start by taking small steps and making small changes that can have a big impact on the world.</p>
                    <div className="flex gap-3 items-center">
                        <div className="bg-lime-100 w-10 h-10 flex items-center justify-center rounded-full">
                        <FaCheckSquare className="text-lime-500"></FaCheckSquare>
                        </div>
                        <p className="font-semibold">Scientific skills for getting a better result</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <div className="bg-lime-100 w-10 h-10 flex items-center justify-center rounded-full">
                        <FaCheckSquare className="text-lime-500"></FaCheckSquare>
                        </div>
                        <p className="font-semibold">A good environment for work</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <div className="bg-lime-100 w-10 h-10 flex items-center justify-center rounded-full">
                        <FaCheckSquare className="text-lime-500"></FaCheckSquare>
                        </div>
                        <p className="font-semibold">Our Intensive Care Unit</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <div className="bg-lime-100 w-10 h-10 flex items-center justify-center rounded-full">
                        <FaCheckSquare className="text-lime-500"></FaCheckSquare>
                        </div>
                        <p className="font-semibold">Professional doctors </p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <div className="bg-lime-100 w-10 h-10 flex items-center justify-center rounded-full">
                        <FaCheckSquare className="text-lime-500"></FaCheckSquare>
                        </div>
                        <p className="font-semibold">Emergency services</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;