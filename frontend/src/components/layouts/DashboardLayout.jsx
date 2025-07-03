import { UserContext } from '@/context/userContext'
import { useContext } from 'react'
import SideMenu from './SideMenu'
import Navbar from './Navbar'

const DashboardLayout = ({ children, activeMenu }) => {
  const { user } = useContext(UserContext)

  return (
    <div className=''>
      <Navbar activeMenu={activeMenu} />

      {user && (
        <div className='flex'>
          <div className='max-[1080px]:hidden'>
            <SideMenu activeMenu={activeMenu} />
          </div>

          <div className='mx-5 grow'>{children}</div>
        </div>
      )}
    </div>
  )
}

export default DashboardLayout
