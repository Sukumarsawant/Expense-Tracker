import React from "react";
import { motion } from "framer-motion";
import RecentCard from "./RecentCard";
import MyBarChart from "./BarChartHome";
import NavbarTop from "./NavbarTop";

const Main = () => {
  return (
    <>
      <div className="w-full min-h-screen mt-20 md:mt-0 md:p-4">
        <NavbarTop />

        {/* Top Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[70vw] mx-auto mt-10"
        >
          {[
            { title: "Total Expenses", amount: "$6000.09", color: "text-green-500" },
            { title: "Income", amount: "$8000.09", color: "text-green-500" },
            { title: "Expenses Limit", amount: "$8000.09", color: "text-red-600" },
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.4, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white shadow-lg p-4 rounded-3xl relative flex flex-col items-start h-[15vh]"
            >
              <h3 className="text-2xl">{item.title}</h3>
              <p className={`font-bold mt-4 text-4xl ${item.color}`}>{item.amount}</p>
              <div className="absolute top-4 right-5 text-5xl text-green-500">$</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Recent Expenses & Chart Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row w-full max-w-[70vw] h-auto lg:h-[75vh] gap-6 mt-8 mx-auto rounded-3xl shadow-lg"
        >
          {/* Recent Expenses */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 bg-white rounded-3xl p-4"
          >
            <h1 className="font-bold text-3xl ml-3">Recent Expenses</h1>
            <div className="space-y-3 mt-3">
              {[...Array(6)].map((_, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -30 }} 
                  whileInView={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <RecentCard />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Chart Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 bg-white rounded-3xl p-4 flex flex-col items-center"
          >
            <MyBarChart />
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-[20vh] w-[90%] bg-gray-300 rounded-3xl mt-4"
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Main;
