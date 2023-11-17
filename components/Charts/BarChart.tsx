import React from 'react'
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

const BarChart = (props: Props) => {
	return <div className='lg:w-[60vw] w-full bg-rose-500'>BarChart</div>
}

export default BarChart
