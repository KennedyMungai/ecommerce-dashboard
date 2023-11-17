import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

type Props = {}

const TopCards = (props: Props) => {
	return (
		<div className='flex flex-col gap-5 px-5 p-4 w-full lg:flex-row'>
			<Card className='flex justify-between flex-grow-2 w-full p-4'>
				<CardContent>

                </CardContent>
			</Card>
			<Card className='flex flex-grow-2 justify-between w-full p-4'>
				<CardContent>

                </CardContent>
			</Card>
			<Card className='flex justify-between flex-grow-1 w-full p-4'>
				<CardContent>

                </CardContent>
			</Card>
		</div>
	)
}

export default TopCards
