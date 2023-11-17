import React from 'react'
import TopCards from '../SideBar/TopCards/TopCards'

type Props = {}

const Header = (props: Props) => {
	return (
		<div className='flex flex-col'>
			<div className='w-[94vw] flex justify-between p-5'>
				<h2 className='font-semibold text-2xl'>DashBoard</h2>
				<h2 className='font-semibold'>Welcome Back, Motherfucker</h2>
			</div>
			<TopCards />
		</div>
	)
}

export default Header
