"use client";
import { motion } from "framer-motion";

export default function () {
  return (
    <div className="flex w-full xl:text-[300px] lg:text-[220px] md:text-[180px] text-[80px] xs:text-[60px] font-extrabold tracking-wider">
      <div className="bg-red-700 p-2 w-1/2 flex items-center justify-center text-amber-100">
        <motion.span
          className=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1}}
        >
          KAAFI
        </motion.span>
      </div>
      <div className="bg-blue-700 p-2 w-1/2 flex items-center justify-center text-amber-100 border-l-2 border-l-amber-100">
        <motion.span
          className=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          AALSI
        </motion.span>
      </div>
    </div>
  );
}
