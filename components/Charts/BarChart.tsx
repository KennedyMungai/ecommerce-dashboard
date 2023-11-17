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
	return <div className='lg:w-[60vw] w-full'>
        <div className="">
            <Bar />
        </div>
    </div>
}

export default BarChart
