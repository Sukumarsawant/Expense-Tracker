import React, { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import Img from '../assets/Pie.png'

const CreateExpense = () => {
  const [category, setCategory] = useState("");

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className="md:flex justify-center">
      <div className="grid grid-rows-2 md:grid-cols-2 gap-2 w-full">
        
        {/* 3D Pie Chart Animation */}
        <motion.div
  className="bg-white ml-4 md:ml-7 mt-4 md:mt-4 w-[90vw] md:w-[35vw] h-[60vh]"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  <motion.img 
    src={Img} 
    alt="" 
    className="w-full h-full object-cover" 
    initial={{ opacity: 0, y: 20 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 1, ease: "easeOut" }}
  />
</motion.div>


        {/* Expense Form Animation */}
        <motion.div
          className="bg-white shadow-2xl ml-4 md:ml-7 mt-4 w-[90vw] md:w-[35vw] h-auto md:h-[60vh] p-6 md:p-4"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <h1 className="font-bold text-3xl md:text-4xl text-center mb-6">Add New Expense</h1>

          <form className="flex flex-col">
            {/* Expense Name */}
            <input
              type="text"
              className="bg-gray-300 p-3 w-full md:w-[30vw] mx-auto rounded-lg"
              placeholder="Enter the Expense"
            />
            <br />

            {/* Amount */}
            <input
              type="text"
              className="bg-gray-300 p-3 w-full md:w-[30vw] mx-auto rounded-lg"
              placeholder="Amount"
            />
            <br />

            {/* Expense Category */}
            <div className="w-full md:w-[30vw] mx-auto">
              <label className="block text-lg font-bold mb-2">Expense Category</label>
              <select
                value={category}
                onChange={handleCategoryChange}
                className="w-full p-3 border rounded-lg shadow-sm bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled>Select a category</option>
                <option value="food">🍕 Food</option>
                <option value="travel">✈️ Travel</option>
                <option value="shopping">🛍️ Shopping</option>
                <option value="bills">📑 Bills</option>
                <option value="entertainment">🎬 Entertainment</option>
              </select>
              {category && <p className="mt-2 text-green-600">Selected: {category}</p>}
            </div>

            {/* Date Picker */}
            <input
              type="date"
              className="bg-gray-300 w-full md:w-[10vw] p-3 mx-auto mt-3 rounded-lg"
            />

            {/* Submit Button Animation */}
            <motion.button
              className="bg-cyan-200 rounded-3xl p-3 w-full md:w-[30vw] mx-auto mt-6 text-2xl font-bold text-gray-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Floating Animated Boxes */}
      <div className="grid grid-rows-3 ">
      <motion.div
        className="bg-white w-[70vw] mt-2 m-auto ml-20 md:ml-7 md:w-[20vw] h-[30vh] md:absolute bottom-10 rounded-3xl shadow-2xl left-95"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      />
      
      <motion.div
        className="bg-white w-[70vw] mt-2 m-auto ml-20 md:ml-7 md:w-[20vw] h-[30vh] md:absolute bottom-10 rounded-3xl shadow-2xl md:left-210"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      />
      
      <motion.div
        className="bg-white w-[70vw] mt-2 m-auto ml-20  md:w-[20vw] h-[30vh] md:absolute bottom-10 rounded-3xl md:right-35 shadow-2xl"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      />
      </div>
    </div>
  );
};

export default CreateExpense;
