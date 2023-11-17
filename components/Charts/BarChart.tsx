'use client'
import React, { useEffect, useState } from 'react'
import {Bar} from 'react-chartjs-2'
import {
    Chart as ChartJS, 
    CategoryScale, 
    LinearScale, 
    BarElement, 
    Title, 
    Tooltip, 
    Legend
} from 'chart.js'


type Props = {}

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

const BarChart = (props: Props) => {
    const [chartData, setChartData] = useState({datasets: []})
    const [chartOptions, setChartOptions] = useState({})

	return <div className='w-full lg:w-[60vw] border rounded-lg bg-white h-full'>
            <Bar data={chartData} options={chartOptions} />
    </div>
}

export default BarChart
