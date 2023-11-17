import Link from 'next/link'
import React from 'react'
import { RxSketchLogo } from 'react-icons/rx'
import { Separator } from '../ui/separator'

type Props = {}

const SideBar = (props: Props) => {
	return (
		<div className='w-[6vw] h-screen bg-slate-50 dark:bg-slate-900 p-4 border-r-[1px] flex flex-col justify-between'>
			<div className=''>
				<div className='flex flex-col items-center'>
					<Link href={'/'}>
						<div className='bg-purple-800 text-white p-3 rounded-lg inline-block'>
							<RxSketchLogo size={30} />
						</div>
					</Link>
				</div>
				<Separator className='my-5' />
			</div>
			<div className=''></div>
		</div>
	)
}

export default SideBar
