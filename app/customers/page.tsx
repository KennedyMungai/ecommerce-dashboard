import { data } from '@/data/data'
import React from 'react'
import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs'

type Props = {}

const CustomersPage = (props: Props) => {
	return (
		<div className='ml-[5rem] min-h-screen dark:bg-slate-800 p-5 bg-slate-100 text-slate-700 dark:text-slate-400'>
			<div className='flex justify-between items-center'>
				<h2 className='text-2xl uppercase font-semibold'>Customers</h2>
				<h2 className='font-semibold'>Welcome Back, Motherfucker</h2>
			</div>
			<div className='p-4'>
				<div className='w-full m-auto p-4 rounded-lg bg-white overflow-y-auto'>
					<div className='flex justify-between'>
						<span className='font-semibold'>Name</span>
						<span className='font-semibold'>Email</span>
						<span className='font-semibold hidden lg:flex'>Last Order</span>
						<span className='font-semibold hidden lg:flex'>Method</span>
						<span className='hidden lg:flex'></span>
					</div>
					<ul className='list-none'>
						{data.map((order, id) => {
							return (
								<li key={id} className='bg-slate-100 hover:bg-slate-100/50 rounded-lg my-3 p-2 flex justify-between items-center cursor-pointer'>
									<div className="flex items-center">
										<div className="bg-slate-200 dark:bg-slate-600 p-3 rounded-lg">
											<BsPersonFill className='text-slate-700 dark:text-slate-400' />
										</div>
										<p className='pl-4 text-sm font-semibold'>{order.name.first} {order.name.last}</p>
									</div>
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default CustomersPage
