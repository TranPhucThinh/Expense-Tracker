import { useState } from 'react'
import { HiOutlineX, HiOutlineMenu } from 'react-icons/hi'
import SideMenu from './SideMenu'

const Navbar = ({ activeMenu }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false)

  return (
    <div className='sticky top-0 z-30 flex gap-5 border border-b border-gray-200/50 bg-white px-7 py-4 backdrop-blur-[2px]'>
      <button className='block text-black lg:hidden' onClick={() => setOpenSideMenu(!openSideMenu)}>
        {openSideMenu ? <HiOutlineX className='text-2xl' /> : <HiOutlineMenu className='text-2xl' />}
      </button>

      <h2 className='text-lg font-medium text-black'>Expense Tracker</h2>

      {openSideMenu && (
        <div className='fixed top-[61px] -ml-4 bg-white'>
          <SideMenu activeMenu={activeMenu} />
        </div>
      )}
    </div>
  )
}

export default Navbar
