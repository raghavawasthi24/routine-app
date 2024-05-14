"use client";
import Chart from "chart.js/auto";
import { CategoryScale, LinearScale } from "chart.js";
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

Chart.register(CategoryScale, LinearScale);

export default function Graph({ data }: any) {
  const [roleData, setRoleData] = useState<any>(null);

  useEffect(() => {
    const labels = Object.entries(data).map(([day, count]) => day);
    const counts = Object.entries(data).map(([day, count]) => count);

    const datas = {
      labels: labels,
      datasets: [
        {
          label: "Sectors",
          data: counts,
          backgroundColor: [
            "rgba(75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderWidth: 2,
        },
      ],
    };

    setRoleData(datas);
  }, [data]); // Only re-run the effect if 'data' changes

  return (
    <div className="flex flex-col gap-4 mt-5">
      <div className="w-full rounded-lg px-4 py-6">
        {roleData && (
          <Line
            data={roleData}
            options={{
              plugins: {
                legend: {
                  display: false,
                },
                title: {
                  display: true,
                  text: "",
                  font: {
                    size: 16,
                  },
                },
              },
              scales: {
                x: {
                  grid: {
                    display: false,
                  },
                },
                y: {
                  grid: {
                    display: false,
                  },
                },
              },
            }}
          />
        )}
      </div>
    </div>
  );
}
