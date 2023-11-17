import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

type Props = {}

const TopCards = (props: Props) => {
	return (
		<div className='flex flex-col gap-5 px-5 p-2 w-full lg:flex-row'>
			<Card className='flex justify-between w-full p-2'>
				<CardContent className='flex justify-between w-full'>
					<div className='flex flex-col w-full'>
						<p className='text-2xl font-bold'>$7,846</p>
						<p className='text-slate-400 dark:text-slate-600'>
							Daily Revenue
						</p>
					</div>
                    <p className="bg-green-400 flex items-center justify-center rounded-lg p-3">+18%</p>
				</CardContent>
			</Card>
			<Card className='flex justify-between w-full p-4'>
				<CardContent className='flex justify-between w-full'>
					<div className='flex flex-col w-full'>
						<p className='text-2xl font-bold'>$7,846</p>
						<p className='text-slate-400 dark:text-slate-600'>
							Daily Revenue
						</p>
					</div>
                    <p className="bg-green-400 flex items-center justify-center rounded-lg p-2">+26%</p>
				</CardContent>
			</Card>
			<Card className='flex justify-between w-full p-4'>
				<CardContent className='flex justify-between w-full'>
					<div className='flex flex-col w-full'>
						<p className='text-2xl font-bold'>$7,846</p>
						<p className='text-slate-400 dark:text-slate-600'>
							Daily Revenue
						</p>
					</div>
                    <p className="bg-green-400 flex items-center justify-center rounded-lg p-2">+12%</p>
				</CardContent>
			</Card>
		</div>
	)
}

export default TopCards
