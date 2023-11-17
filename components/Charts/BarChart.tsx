'use client'
import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const BarChart = (props: Props) => {
	const [chartData, setChartData] = useState<IChartData | null>()
	// const [chartOptions, setChartOptions] = useState<IChartOptions | null>()

	useEffect(() => {
		setChartData({
			labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
			datasets: [
				{
					label: 'Sales $',
					data: [18127, 22201, 19490, 17938, 24182, 17842, 22475],
					borderColor: 'rgb(53, 162, 235)',
					backgroundColor: 'rgb(53, 162, 235, 0.4'
				}
			]
		})

	}, [])

        const options = {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top' as const 
                },
                title: {
                    display: true,
                    text: 'Sales'
                }
            }
        }
	return (
		<div className='w-full lg:w-[60vw] border rounded-lg bg-white h-full dark:bg-slate-900'>
			<Bar data={chartData!} options={options} />
		</div>
	)
}

export default BarChart
