"use client";
import { motion } from "framer-motion";

export default function () {
  return (
    <div className="flex flex-col gap-1 lg:flex-row w-full xl:text-[300px] lg:text-[220px] md:text-[180px] text-[80px] xs:text-[60px] font-extrabold tracking-wider">
      <div className="bg-red-700 p-2 lg:w-1/2 w-full flex items-center justify-start text-amber-100">
        <motion.span
          className=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 ,delay: 0}}
        >
          K
        </motion.span>
        <motion.span
          className=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 ,delay: 0.2}}
        >
          A
        </motion.span>
        <motion.span
          className=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 ,delay: 0.4}}
        >
          A
        </motion.span>
        <motion.span
          className=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 ,delay: 0.6}}
        >
          F
        </motion.span>
        <motion.span
          className=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 ,delay: 0.8}}
        >
          I
        </motion.span>
      </div>
      <div className="bg-blue-700 p-2 lg:w-1/2 w-full flex items-center justify-end text-amber-100 ">
        <motion.span
          className=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          A
        </motion.span>
        <motion.span
          className=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          A
        </motion.span>
        <motion.span
          className=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          L
        </motion.span>
        <motion.span
          className=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          S
        </motion.span>
        <motion.span
          className=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0 }}
        >
          I
        </motion.span>
      </div>
    </div>
  );
}
