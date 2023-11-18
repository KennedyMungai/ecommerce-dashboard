import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { data } from '@/data/data'

type Props = {}

const OrdersPage = (props: Props) => {
	return (
		<div className='ml-[5rem] dark:bg-slate-800 p-5 min-h-screen max-w-screen bg-slate-200 text-slate-800 dark:text-slate-100'>
			<div className='flex items-center justify-between'>
				<h2 className='font-semibold text-2xl'>Orders</h2>
				<h2 className='font-semibold'>Welcome Back, Motherfucker</h2>
			</div>
			<div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto text-slate-700'>
				<div className='my-3 p-2 items-center justify-between cursor-pointer'>
					<span>Order</span>
					<span>Status</span>
					<span>Last Order</span>
					<span>Method</span>
					<span></span>
				</div>
			</div>
		</div>
	)
}

export default OrdersPage
