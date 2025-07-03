import { UserContext } from '@/context/userContext'
import { SIDE_MENU_DATA } from '@/utils/data'
import { useContext } from 'react'
import CharAvatar from '../Cards/CharAvatar'

const SideMenu = ({ activeMenu }) => {
  const { user } = useContext(UserContext)

  const handleClick = () => {}

  return (
    <div className='sticky top-[61px] z-20 h-[calc(100vh-62px)] w-64 border border-r border-gray-200/50 bg-white p-5'>
      <div className='mt-3 mb-7 flex flex-col items-center justify-center gap-3'>
        {!user?.profileImageUrl ? (
          <img src={user?.profileImageUrl || ''} alt='Profile Image' className='h-20 w-20 rounded-full bg-slate-400' />
        ) : (
          <CharAvatar fullName={user.fullName} width='w-20' height='h-20' style='text-xl' />
        )}

        <h5 className='leading-6 font-medium text-gray-950'>{user?.fullName || ''}</h5>
      </div>

      {SIDE_MENU_DATA.map((item, idx) => (
        <button
          key={`menu_${idx}`}
          className={`flex w-full items-center gap-4 text-[15px] ${activeMenu == item.label ? 'bg-primary text-white' : ''} mb-3 cursor-pointer rounded-lg px-6 py-3`}
          onClick={() => handleClick(item.path)}
        >
          <item.icon className='text-xl' />
          {item.label}
        </button>
      ))}
    </div>
  )
}

export default SideMenu
