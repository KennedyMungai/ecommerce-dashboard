import { data } from '@/data/data'
import React from 'react'
import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs'

type Props = {}

const CustomersPage = (props: Props) => {
	return (
		<div className='ml-[5rem] h-screen dark:bg-slate-800 p-5 bg-slate-100'>
			<div className='flex justify-between items-center'>
				<h2 className='text-2xl uppercase'>Customers</h2>
				<h2>Welcome Back, Motherfucker</h2>
			</div>
		</div>
	)
}

export default CustomersPage
