"use client";
import { motion } from "framer-motion";

const Divider: React.FC = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 1.5 }}
      className="h-px max-w-4xl bg-slate-300"
    />
  );
};
export default Divider;
