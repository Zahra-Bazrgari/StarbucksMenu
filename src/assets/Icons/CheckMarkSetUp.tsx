import React from 'react'
import { useMotionValue, motion } from "framer-motion";
import CheckMark from './CheckMark';

const CheckMarkSetUp = () => {
    let progress = useMotionValue(50)
    return (
      <div className="flex justify-center items-center w-full">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: 100 }}
          style={{ x: progress }}
          transition={{ duration: 1 }}
        />
        <CheckMark progress={progress} />
      </div>
    )
}

export default CheckMarkSetUp
