'use client'
import { DropnavLink } from "@/constants";
  import { motion } from "framer-motion";
  import { Dispatch, SetStateAction, useState } from "react";
  import Image from "next/image";

  
  const StaggeredDropDown = () => {
    const [open, setOpen] = useState(false);
  
    return (
      <div className=" z-20 relative flex items-center justify-center bg-white">
        <motion.div animate={open ? "open" : "closed"} className="relative">
          <button
            onClick={() => setOpen((pv) => !pv)}
            className="flex items-center gap-2 px-3 py-2 rounded-md text-black  transition-colors"
          >
            <span className="font-medium text-sm">Menu</span>
            <motion.span variants={iconVariants}>
             <Image src='/icons/arrow.svg' alt="arrow" width={20} height={20}/>
            </motion.span>
          </button>
  
          <motion.ul
            initial={wrapperVariants.closed}
            variants={wrapperVariants}
            style={{ originY: "top", translateX: "-50%" }}
            className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden"
          >
            {DropnavLink.map((item)=>(
                <Option  setOpen={setOpen}  text={item.title}/>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    );
  };
  
  const Option = ({
    text,
    // Icon,
    setOpen,
  }: {
    text: string;
    // Icon: IconType;
    setOpen: Dispatch<SetStateAction<boolean>>;
  }) => {
    return (
      <motion.li
        variants={itemVariants}
        onClick={() => setOpen(false)}
        className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-green-200 text-slate-700  transition-colors cursor-pointer"
      >
        <motion.span variants={actionIconVariants}>
          {/* <Icon /> */}
        </motion.span>
        <span>{text}</span>
      </motion.li>
    );
  };
  
  export default StaggeredDropDown;
  
  const wrapperVariants = {
    open: {
      scaleY: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    closed: {
      scaleY: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
      },
    },
  };
  
  const iconVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  };
  
  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
      },
    },
    closed: {
      opacity: 0,
      y: -15,
      transition: {
        when: "afterChildren",
      },
    },
  };
  
  const actionIconVariants = {
    open: { scale: 1, y: 0 },
    closed: { scale: 0, y: -7 },
  };