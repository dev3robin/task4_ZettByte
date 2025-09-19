"use client";

import { motion } from "framer-motion";

type Slice = {
  label: string;
  value: number;
  color: string;
  start?: number;
};

export default function UserProggresChart() {
  const data: Slice[] = [
    { label: "Active Projects", value: 3, color: "bg-blue-500" },
    { label: "Pending Tasks", value: 12, color: "bg-green-500" },
    { label: "Messages", value: 5, color: "bg-red-500" },
  ];
  const total = data.reduce((sum, d) => sum + d.value, 0);

  let rotation = 0;

  const slices: Slice[] = data.map(d => {
    const slice = { ...d, start: rotation };
    rotation += (d.value / total) * 360;
    return slice;
  });

 
  return (
    <div className="flex flex-col items-center py-6">
      <h2 className="text-xl font-bold mb-4">Dashboard Pie Chart</h2>

      <div className="relative w-64 h-64 rounded-full overflow-hidden">
        {slices.map((slice, i) => (
          <motion.div
            key={i}
            className={`absolute w-full h-full ${slice.color}`}
            style={{
              clipPath: `polygon(50% 50%, 100% 50%, 100% 0%, 50% 0%)`,
              transformOrigin: "50% 50%",
            }}
            initial={{ rotate: slice.start, scaleY: 0 }}
            animate={{ rotate: slice.start, scaleY: 1 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
          ></motion.div>
        ))}

        <div className="absolute inset-0 w-32 h-32 bg-white rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center font-bold">
          {total}
        </div>
      </div>
      <div className="flex gap-4 mt-4">
        {data.map((d, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className={`w-4 h-4 ${d.color} rounded-full`}></div>
            <span className="text-sm">{d.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
