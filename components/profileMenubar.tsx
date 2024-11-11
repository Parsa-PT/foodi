"use client";
import React, { useEffect , useState } from "react";
import Image from "next/image";
import { userProfile, adminProfile } from "@/constants";
import Link from "next/link";

const ProfileMenubar = () => {
  const [userinfo, setNavData] = useState<any | null>('');

  useEffect(() =>{
    const userinfo = localStorage.getItem("username") 

     setNavData(userinfo)

  },[])
  return (
    <div>
      <div className=" flex lg:flex-col">
        {userinfo === "admin" ? (
          <div className=" w-[400px]  overflow-x-auto sm:w-[560px] md:w-[700px]  lg:w-full overflow-hidden lg:overflow-visible flex-row lg:flex-col flex">
            {adminProfile.map((item) => (
             <Link href={item.href}>
             <div
                key={item.id}
                className="  lg:w-[141px] w-[89px] md:w-[100px] md:h-[110px] h-[89px] lg:h-[141px] hover:scale-110 transition-all ease-in duration-100  hover:shadow-xl hover:bg-white flex justify-center items-center bg-btnColor"
              >

                <Image
                  src={item.pic}
                  className=" md:w-[43px] w-[25px] "
                  alt="info "
                  width={1111}
                  height={1111}
                />
              </div>
             </Link>   
              
            ))}
          </div>
        ) : (
          <>
            {userProfile.map((item) => (
              <div
                key={item.id}
                className=" md:w-[141px] w-[89px] h-[89px] md:h-[141px] hover:scale-110 transition-all ease-in duration-100  hover:shadow-xl hover:bg-white flex justify-center  items-center bg-btnColor"
              >
                <Image
                  src={item.pic}
                  className=" md:w-[43px] w-[25px] "
                  alt="info "
                  width={1111}
                  height={1111}
                />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileMenubar;
