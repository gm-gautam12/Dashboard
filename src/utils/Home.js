import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import Card from "../components/Card";
import Chart from "../components/Chart";
import Header from "../components/Header";
import { Navigate } from "react-router-dom";
import ProfileDetails from "../components/ProfileDetails";
import chart from "../assets/chart.svg";
import down from "../assets/downarrow.png";
import whatsapp from "../assets/whatsapp.png";
import instaPic from "../assets/insta.png";
import emailPic from "../assets/email.png";
import yt from "../assets/yt.png";
import plus from "../assets/plus.svg";

const Home = () => {
  const [authenticated, setauthenticated] = useState(false);
  const [check, setCheck] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [user, setUser] = useState({});
  const [detailsExist, setDetailsExist] = useState(false);
  const [isBasicSelected, setIsBasicSelected] = useState(false);


  const openProfileModal = async () => {
    setIsBasicSelected(true);
    setIsPopupOpen(true);
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(true);
    }
    setCheck(false);
  }, []);

/* The above code is a JavaScript function that checks if the user is authenticated and if a certain
condition is met. If the user is not authenticated and the condition is not met, it returns a
navigation component to redirect the user to the home page. Otherwise, it renders a JSX template
that includes a sidebar, header, card, chart, and user detail sections. The user detail section
displays information about the top products and the user's profile details. If the user's profile
details exist, it displays the details, otherwise it displays an option to add the profile details.
The code also includes a ProfileDetails */

  if (!authenticated && !check) {
    return <Navigate replace to="/" />;
  } else {
    return (
      <>
        <div
          className={`relative flex flex-col w-full sm:flex-row justify-between gap-4 lg:gap-6 px-2 sm:px-4 py-4 bg-[#F5F5F5] ${
            isPopupOpen ? "opacity-70" : ""
          }`}
        >
          <SideBar />
          <div className="flex flex-col justify-between w-full gap-2 md:gap-4">
            <Header />
            <Card />
            <Chart />

            {/* User Detail */}
            <div className="flex flex-col lg:flex-row w-full gap-4 justify-center">
              <div className="flex flex-col w-full lg:w-1/2 px-10 py-6 h-fit lg:px-15 lg:py-10 gap-6 justify-between text-black bg-white shadow-xl border-1 border-slate-200 rounded-3xl">
                <div className="flex justify-between items-center">
                  <h2 className="font-bold text-[18px]">Top products</h2>
                  <p className="flex items-center gap-2 text-[14px] text-[#858585]">
                    May-June 2021{" "}
                    <img src={down} className="w-[8px] h-[5px]" alt="down" />
                  </p>
                </div>
                <div className="flex justify-center items-center gap-6 md:gap-10 lg:gap-16">
                  <img
                    src={chart}
                    className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[145px] lg:h-[145px]"
                    alt="chart1"
                  />
                  <div className="flex flex-col justify-between">
                    <div className="flex justify-start items-center gap-3">
                      <div className="rounded-full w-[11px] h-[11px] bg-[#98D89E] mb-3" />
                      <div className="flex flex-col justify-between">
                        <h2 className="font-bold text-[12px] sm:text-[14px]">
                          Basic Tees
                        </h2>
                        <p className="text-[#858585] text-[12px] font-lato">
                          55%
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-start items-center gap-3">
                      <div className="rounded-full w-[11px] h-[11px] bg-[#F6DC7D] mb-3" />
                      <div className="flex flex-col justify-between">
                        <h2 className="font-bold text-[12px] sm:text-[14px]">
                          Custom Short Pants
                        </h2>
                        <p className="text-[#858585] text-[12px] font-lato">
                          31%
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-start items-center gap-3">
                      <div className="rounded-full w-[11px] h-[11px] bg-[#EE8484] mb-3" />
                      <div className="flex flex-col justify-between">
                        <h2 className="font-bold text-[12px] sm:text-[14px]">
                          Super Hoodies
                        </h2>
                        <p className="text-[#858585] text-[12px] font-lato">
                          14%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Profile Section */}
              <div className="flex w-full lg:w-1/2 h-full px-8 py-6 text-black  bg-white justify-center align-middle shadow-xl border-1 border-slate-200 rounded-3xl">
                {detailsExist === false ? (
                  <div className="w-full flex-col flex justify-center align-middle h-full">
                    <div className="flex flex-col justify-center align-middle w-20 h-20 bg-[#EBEBEB] rounded-full mx-auto">
                      <img
                        src={plus}
                        alt="Open Profile Modal Button"
                        onClick={openProfileModal}
                        className="h-10 w-10 align-middle justify-center mx-auto hover:cursor-pointer"
                      />
                    </div>
                    <h1 className="text-[#858585] font-bold mt-4 text-center ">
                      Add profile
                    </h1>
                  </div>
                ) : (
                  <div className="flex flex-col p-8 w-full">
                    <div className="text-left">
                      <p className="font-semibold text-2xl truncate">{user.name}</p>
                    </div>
                    <div className="flex flex-row mt-8 gap-4">
                      <div className="flex flex-col justify-between align-middle gap-12 w-1/2">
                        <div className="flex align-middle justify-start h-fit gap-2">
                          <img src={whatsapp} alt="whatsapp" />
                          <p className="font-normal text-sm underline mt-[2px] truncate">
                            {user.phone}
                          </p>
                        </div>
                        <div className="flex align-middle justify-start h-fit gap-2">
                          <img src={emailPic} alt="email" />
                          <p className="font-normal text-sm underline mt-[2px] truncate">
                            {user.email}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col justify-between align-middle gap-12 w-1/2">
                        <div className="flex align-middle justify-start h-fit gap-2">
                          <img src={instaPic} alt="insta" />
                          <p className="font-normal text-sm underline mt-[2px] truncate">
                            {user.insta}
                          </p>
                        </div>

                        <div className="flex align-middle justify-start h-fit gap-2">
                          <img src={yt} alt="youtube" />
                          <p className="font-normal text-sm underline mt-[2px truncate">
                            {user.youtube}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <ProfileDetails
          isPopupOpen={isPopupOpen}
          setIsPopupOpen={setIsPopupOpen}
          setUser={setUser}
          setDetailsExist={setDetailsExist}
          isBasicSelected={isBasicSelected}
          setIsBasicSelected={setIsBasicSelected}
        />
      </>
    );
  }
};

export default Home;
