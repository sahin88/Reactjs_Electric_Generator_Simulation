import React from 'react'
import { Line } from "react-chartjs-2";
import Chart from "react-apexcharts";
import '../css/table.css'
function Table({labx, laby,laby_90}) {


  const options= {

    colors: ["#007aff", "#c8232c"],
  
    chart: {
      id: "line"
    },
    xaxis: {
      categories:labx,
      title: {
        text: 'Time  [seconds]',
      },

      
    },
    yaxis: {
      title: {
        text: 'Volt [V]',
      },
  },
    
  }
  const series= [{
    name: "Faz",
    data: laby
  },
  {
    name: "Faz Verschibung 90°",
    data: laby_90
  },
 
]

    return (
        <div>
        <Chart options={options} series={series}  type="line"
              width="600"/>
        </div>
    )
}

export default Table
