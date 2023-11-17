import { data } from '@/data/data'
import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'

type Props = {}

const RecentOrders = (props: Props) => {
	return (
		<div className='lg:w-[28vw] w-full bg-white dark:bg-slate-900 p-5 rounded-lg shadow-sm overflow-scroll h-[60vh] scrollbar-hide'>
			<h1 className='text-center uppercase font-semibold'>Recent Orders</h1>
			<ul>
				{data.map((order) => {
					return (
						<li
							key={order.id}
							className='list-none cursor-pointer flex rounded-lg p-2 my-2 bg-slate-200 dark:bg-slate-600'
						>
							<div className='bg-slate-50 dark:bg-slate-700 hover:bg-slate-50/50 p-2 rounded-sm'>
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
