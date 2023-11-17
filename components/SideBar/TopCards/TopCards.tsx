import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

type Props = {}

const TopCards = (props: Props) => {
	return (
		<div className='px-5 grid lg:grid-cols-5 gap-4 p-4 w-full'>
			<Card className='lg:col-span-2 col-span-1 flex justify-between w-full p-4'>
				<CardContent>
                    
                </CardContent>
			</Card>
			<Card className='lg:col-span-2 col-span-1 flex justify-between w-full p-4'>
				<CardContent>
                    
                </CardContent>
			</Card>
			<Card className='flex justify-between w-full'>
				<CardContent>
                    
                </CardContent>
			</Card>
		</div>
	)
}

export default TopCards
