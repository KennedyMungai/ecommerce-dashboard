import Link from 'next/link'
import React from 'react'
import { RxSketchLogo } from 'react-icons/rx'

type Props = {}

const SideBar = (props: Props) => {
	return (
		<div className='w-[6vw] h-screen bg-slate-50 dark:bg-slate-900 p-4 border-r-[1px] flex flex-col justify-between'>
			<div className='flex flex-col items-center'>
				<Link href={'/'}>
					<div className=''>
						<RxSketchLogo size={30} />
					</div>
				</Link>
			</div>
			<div className=''></div>
		</div>
	)
}

export default SideBar
