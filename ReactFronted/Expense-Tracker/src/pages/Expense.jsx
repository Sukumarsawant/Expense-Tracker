import React from 'react';
import LineChart from '../components/LineChart';
import RecentCard from '../components/RecentCard';
import DoughnutChart from '../components/DoughnutChart';
import { motion } from 'framer-motion';
import BarChart from '../components/BardChart';


import RectangleGraph from '../components/RectangleGraph';

const Expense = () => {
  return (
    <div className="p-4 flex flex-col items-center space-y-6">
      {/* Line Chart Section */}
      <motion.div
        className="bg-white w-[80vw] shadow-lg p-4 rounded-xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <LineChart />
      </motion.div>

      {/* 2nd Row - List of Expenses & Doughnut Chart */}
      <div className="grid md:grid-cols-2 gap-6 w-[80vw]">
        <motion.div
          className="md:w-[38vw] md:h-[53vh] bg-white p-4 rounded-xl shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h1 className="font-bold text-3xl mb-4">List of Expenses</h1>
          <RecentCard />
          <RecentCard />
          <RecentCard />
          <RecentCard />
        </motion.div>

        <motion.div
          className="md:w-[38vw] md:h-[53vh] bg-white p-4 rounded-xl shadow-lg flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
        >
          <DoughnutChart />
        </motion.div>
      </div>

      {/* 3rd Row */}
      <div className="grid md:grid-cols-2 gap-6 w-[80vw]">
        <motion.div
          className="bg-white shadow-lg h-[53vh] w-full md:w-[41vw] md:ml-2 rounded-xl"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <BarChart/>
        </motion.div>

        <motion.div
          className="bg-white shadow-lg h-[53vh] w-full md:w-[23vw] md:ml-20 rounded-xl"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <RectangleGraph/>
        </motion.div>
      </div>
    </div>
  );
};

export default Expense;
