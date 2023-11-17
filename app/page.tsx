import Header from '@/components/Header/Header'
import SideBar from '@/components/SideBar/SideBar'

export default function Home() {
  return (
    <main className='flex flex-row'>
      <SideBar />
      <Header />
    </main>
  )
}
