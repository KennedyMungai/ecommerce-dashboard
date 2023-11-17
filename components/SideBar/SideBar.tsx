import Link from 'next/link'
import React from 'react'
import { RxSketchLogo, RxDashboard, RxPerson } from 'react-icons/rx'
import {HiOutlineShoppingBag} from 'react-icons/hi'
import {FiSettings} from 'react-icons/fi'
import { Separator } from '../ui/separator'
import ThemeToggle from './ThemeToggle'

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
				<div className='flex flex-col items-center'>
					<Link href={'/'}>
						<div className='bg-slate-200 hover:bg-slate-200/50 dark:bg-slate-700 dark:hover:bg-slate-700/50 cursor-pointer my-2 p-2 rounded-lg inline-block'>
							<RxDashboard size={20} />
						</div>
					</Link>
				</div>
				<div className='flex flex-col items-center'>
					<Link href={'/customers'}>
						<div className='bg-slate-200 hover:bg-slate-200/50 dark:bg-slate-700 dark:hover:bg-slate-700/50 cursor-pointer my-2 p-2 rounded-lg inline-block'>
							<RxPerson size={20} />
						</div>
					</Link>
				</div>
				<div className='flex flex-col items-center'>
					<Link href={'/orders'}>
						<div className='bg-slate-200 hover:bg-slate-200/50 dark:bg-slate-700 dark:hover:bg-slate-700/50 cursor-pointer my-2 p-2 rounded-lg inline-block'>
							<HiOutlineShoppingBag size={20} />
						</div>
					</Link>
				</div>
				<div className='flex flex-col items-center'>
					<Link href={'/settings'}>
						<div className='bg-slate-200 hover:bg-slate-200/50 dark:bg-slate-700 dark:hover:bg-slate-700/50 cursor-pointer my-2 p-2 rounded-lg inline-block'>
							<FiSettings size={20} />
						</div>
					</Link>
				</div>
			</div>
			<div className=''>
                <ThemeToggle />
            </div>
		</div>
	)
}

export default SideBar
