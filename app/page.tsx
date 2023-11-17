import Header from '@/components/Header/Header'
import SideBar from '@/components/SideBar/SideBar'

export default function Home() {
  return (
    <main className='flex bg-slate-100 dark:bg-slate-800 min-h-screen'>
      <SideBar />
      <Header />
    </main>
  )
}
