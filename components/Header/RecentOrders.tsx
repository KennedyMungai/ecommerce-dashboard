import { data } from '@/data/data'
import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'

type Props = {}

const RecentOrders = (props: Props) => {
	return (
		<div className='lg:w-[28vw] w-full bg-white dark:bg-slate-900 p-5 rounded-lg shadow-sm overflow-scroll'>
			<h1 className='text-center'>Recent Orders</h1>
			<ul>
				{data.map((order) => {
					return (
						<li
							key={order.id}
							className='list-none bg-slate-300 dark:bg-slate-600 cursor-pointer flex rounded-lg'
						>
							<div className='bg-slate-50 hover:bg-slate-50/50'>
								<FaShoppingBag className='text-slate-300' />
							</div>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default RecentOrders
