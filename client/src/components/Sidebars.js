import React, { useState } from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import { MdDashboard } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { PiChalkboardTeacher } from "react-icons/pi";
import { BiSolidAddToQueue } from "react-icons/bi";
import { TbWriting } from "react-icons/tb";
import { SiVirustotal } from "react-icons/si";
const Sidebars = () => {
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    return (
        <>
            {sidebarVisible && (
                <div className='h-screen w-full rounded-lg flex justify-between flex-col items-center border border-yellow-500 bg-slate-500'>
                    <div className="flex justify-end items-center w-full h-10 mr-3 mb-5 " onClick={toggleSidebar}>
                        <CiMenuBurger />
                    </div>
                    <div className="flex justify-center items-center w-full h-20 mt-5">
                        <img src="../images/docsafelogo.jpeg" alt="Logo" style={{ width: "40%", borderRadius: "50%" }} />
                    </div>
                    <div className="flex justify-center flex-col items-center h-full font-sans w-full ml-1 mr-1">
                        <h3 className='mb-2 text-left inline ml-2 font-light w-full'>DASHBOARD</h3>
                        <div className='mb-1 text-white text-xl hover:bg-sky-400 w-full rounded-lg text-center h-11 font-bold flex flex-row justify-center items-center'>
                            <MdDashboard /> <span className='ml-1'>Dashboard</span>
                        </div>
                        <h3 className='mb-2 text-left inline ml-2 w-full font-light'>PAGES</h3>
                        <div className='mb-1 text-white text-xl hover:bg-sky-400 w-full rounded-lg text-center h-11 font-bold flex flex-row justify-center items-center'>
                            <PiStudent /> <span className='ml-1'>Student Details</span>
                        </div>
                        <div className='mb-1 text-white text-xl hover:bg-sky-400 w-full rounded-lg text-center h-11 font-bold flex flex-row justify-center items-center'>
                            <PiChalkboardTeacher /> <span className='ml-1'>Professor Details</span>
                        </div>
                        <div className='mb-1 text-white font-bold text-xl hover:bg-sky-400 w-full rounded-lg text-center h-11 flex flex-row justify-center items-center'>
                            <SiVirustotal /> <span className='ml-1'>Total Complaints</span>
                        </div>
                        <h3 className='mb-2 text-left inline ml-2 w-full font-light'>APPS</h3>
                        <div className='mb-1 text-white text-xl hover:bg-sky-400 w-full rounded-lg text-center h-11 font-bold flex flex-row justify-center items-center'>
                            <BiSolidAddToQueue /> <span className='ml-1'>Complaint Queue</span>
                        </div>
                        <div className='mb-1 text-white text-xl hover:bg-sky-400 w-full rounded-lg text-center h-11 font-bold flex flex-row justify-center items-center'>
                            <TbWriting /> <span className='ml-1'>Notice Writer</span>
                        </div>
                    </div>
                </div>
            )}
            {!sidebarVisible && (
                <div className="h-screen  rounded-lg flex justify-between flex-col items-center border border-yellow-500 bg-slate-500" style={{ width: "3%" }}>
                    <div className="h-10  mt-3" onClick={toggleSidebar}>
                        <CiMenuBurger />
                    </div>
                </div>
            )}
        </>
    );
};

export default Sidebars;
