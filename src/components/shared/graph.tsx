// "use client";
// import Chart from "chart.js/auto";
// import { CategoryScale, LinearScale } from "chart.js";
// import { useState, useEffect } from "react";
// import { Line } from "react-chartjs-2";

// Chart.register(CategoryScale, LinearScale);

// export default function Graph({ data }: any) {
//   const [roleData, setRoleData] = useState<any>(null);

//   useEffect(() => {
//     const labels = Object.entries(data).map(([day, count]) => day);
//     const counts = Object.entries(data).map(([day, count]) => count);

//     const datas = {
//       labels: labels,
//       datasets: [
//         {
//           label: "Sectors",
//           data: counts,
//           backgroundColor: [
//             "rgba(75,192,192,1)",
//             "#ecf0f1",
//             "#50AF95",
//             "#f3ba2f",
//             "#2a71d0",
//           ],
//           borderWidth: 2,
//         },
//       ],
//     };

//     setRoleData(datas);
//   }, [data]); // Only re-run the effect if 'data' changes

//   return (
//     <div className="flex flex-col gap-4 mt-5">
//       <div className="w-full rounded-lg px-4 py-6">
//         {roleData && (
//           <Line
//             data={roleData}
//             options={{
//               plugins: {
//                 legend: {
//                   display: false,
//                 },
//                 title: {
//                   display: true,
//                   text: "",
//                   font: {
//                     size: 16,
//                   },
//                 },
//               },
//               scales: {
//                 x: {
//                   grid: {
//                     display: false,
//                   },
//                 },
//                 y: {
//                   grid: {
//                     display: false,
//                   },
//                 },
//               },
//             }}
//           />
//         )}
//       </div>
//     </div>
//   );
// }

// import React from "react";
// import { BarChart } from "@mui/x-charts/BarChart";

// const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
// const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
// const xLabels = [
//   "Page A",
//   "Page B",
//   "Page C",
//   "Page D",
//   "Page E",
//   "Page F",
//   "Page G",
// ];

// export default function Graph() {
//   return (
//     <BarChart
//       sx={{ color: "white" }}
//       xAxis={[
//         {
//           id: "barCategories",
//           data: ["28/4", "30/4", "02/05", "03/5", "05/5", "15/5", "20/5"],
//           scaleType: "band",
//         },
//       ]}
//       series={[
//         {
//           data: [92, 100, 98, 90, 84, 82, 80],
//         },
//       ]}
//       width={350}
//       height={300}
//     />
//   );
// }

import Image from 'next/image'
import React from 'react'

export default function Graph() {
  return (
    <div>
      <Image src="/assets/graphBar.png" width={350} height={300} alt="graph" />
    </div>
  )
}

// import React from "react";
// import { Chart } from "react-google-charts";

// export default function graph() {
//   const data = [
//     ["Element", "Density", { role: "style" }],
//     ["Copper", 8.94, "#b87333"], // RGB value
//     ["Silver", 10.49, "silver"], // English color name
//     ["Gold", 19.3, "gold"],
//     ["Platinum", 21.45, "color: #e5e4e2"], // CSS-style declaration
//   ];
//   return (
//     <div>
//       <Chart
//         chartType="ColumnChart"
//         width="100%"
//         height="300px"
//         data={data}
//         style={{ backgroundColor: "red" }}
//         className="bg-black"
//       />
//     </div>
//   );
// }
