import { LuTrendingUpDown } from 'react-icons/lu'

const AuthLayout = ({ children }) => {
  return (
    <div className='flex'>
      <div className='h-screen w-screen px-12 pt-8 pb-12 md:w-[60vw]'>
        <h2 className='text-lg font-medium text-black'>Expense Tracker</h2>
        {children}
      </div>

      <div className='bg-auth-bg-img relative hidden h-screen w-[40vw] overflow-hidden bg-violet-50 p-8 md:block'>
        <div className='absolute -top-7 -left-5 h-48 w-48 rounded-[40px] bg-purple-600' />
        <div className='absolute top-[30%] -right-10 h-56 w-48 rounded-[40px] border-[20px] border-fuchsia-600' />
        <div className='absolute -right-5 -bottom-7 h-48 w-48 rounded-[40px] bg-violet-500' />

        <div className='z-20 grid grid-cols-1'>
          <StatsInfoCard
            icon={<LuTrendingUpDown />}
            label='Track Your Income & Expenses'
            value='430,000'
            color='bg-primary'
          />
        </div>
      </div>
    </div>
  )
}

export default AuthLayout

const StatsInfoCard = ({ icon, label, value, color }) => {
  return (
    <div className='shadow-purple z-10 flex gap-6 rounded-xl border border-gray-200/50 bg-white p-4 shadow-md shadow-purple-400/10'>
      <div
        className={`flex h-12 w-12 items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl`}
      >
        {icon}
      </div>
      <div>
        <h6 className='mb-1 text-xs text-gray-500'>{label}</h6>
        <p className='text-[20px]'>{value}</p>
      </div>
    </div>
  )
}
