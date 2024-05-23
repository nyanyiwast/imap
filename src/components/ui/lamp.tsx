"use client";
import React from 'react'
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { Button } from './button';
import { useNavigate } from 'react-router-dom';

export function LampDemo() {
  const navigateTo = useNavigate()

  return (
    <div className='md:pt-5 py-5'>
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-white py-5 bg-clip-text text-center text-md font-medium tracking-tight text-transparent md:text-3xl"
      >
        <img src="/img/mopse.jpg" className='w-1/2 mx-auto rounded-full'/>
        {/* Goodbye Waiting Periods, <span className="font-bold">{" 👋🏽 "} Hello iMAP </span> */}
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 30 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-white pt-0 bg-clip-text text-center text-4xl font-extrabold tracking-tight text-black md:text-7xl"
      >
        Streamline High School Enrollment
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-white py-4 bg-clip-text text-center font-medium tracking-tight text-black"
      >
        <span className='text-xl font-light'>Our SaaS platform automates the entire high school enrollment process, 
          <br/>
          saves TIME, reduce ERRORS and add TRANSPARENCY for both SCHOOLS and FAMILIES. 
        </span>
        <br/>
        <div className="flex justify-center items-center space-x-4 pt-10 px-5">
          <Button onClick={()=>navigateTo("/form-one")}>Apply For Form 1</Button>
          <Button onClick={()=> navigateTo("/coming-soon")}>Apply For Form 5</Button>
        </div> 
        <div className="flex justify-center items-center space-x-4 pt-10">
          <Button onClick={()=> navigateTo("/coming-soon")} variant="secondary">University <span className="text-xs"> (TBA)</span></Button>
          <Button onClick={()=> navigateTo("/coming-soon")} variant="secondary">Internship <span className="text-xs"> (TBA)</span></Button>
        </div>
        <div className='pt-5 font-light'>
          <h1>Ministry Of Primary And Secondary Education</h1>
        </div>
      </motion.h1>
    </LampContainer>
    </div>
  );
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white w-full rounded-md z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute  w-[100%] left-0 bg-white h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute  w-40 h-[100%] left-0 bg-white  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute  w-40 h-[100%] right-0 bg-white  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute  w-[100%] right-0 bg-white h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-white blur-2xl" />
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl" />
        <motion.div initial={{ width: "8rem" }}
        whileInView={{ width: "16rem" }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl" />
        <motion.div initial={{ width: "15rem" }}
        whileInView={{ width: "30rem" }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400 " />

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-white " />
      </div>

      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
