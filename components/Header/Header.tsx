import React from 'react'

type Props = {}

const Header = (props: Props) => {
	return (
		<div className='min-h-screen bg-slate-100 dark:bg-slate-700 w-full flex justify-between px-4 pt-4'>
			<h2 className='font-semibold text-2xl'>DashBoard</h2>
            <h2 className='font-semibold'>Welcome Back, Motherfucker</h2>
		</div>
	)
}

export default Header
