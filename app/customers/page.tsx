import { data } from '@/data/data'
import React from 'react'
import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs'

type Props = {}

const CustomersPage = (props: Props) => {
	return (
		<div className='ml-[5rem] h-screen dark:bg-slate-800 p-5 bg-slate-100 text-slate-700 dark:text-slate-400'>
			<div className='flex justify-between items-center'>
				<h2 className='text-2xl uppercase font-semibold'>Customers</h2>
				<h2 className='font-semibold'>Welcome Back, Motherfucker</h2>
			</div>
			<div className='p-4'>
				<div className='w-full m-auto p-4 rounded-lg bg-white overflow-y-auto'>
					<div className='flex justify-between'>
						<span className='font-semibold'>Name</span>
						<span className='font-semibold'>Email</span>
						<span className='font-semibold'>Last Order</span>
						<span className='font-semibold'>Method</span>
						<span></span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CustomersPage
