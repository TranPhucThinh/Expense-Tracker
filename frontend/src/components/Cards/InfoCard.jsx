const InfoCard = ({ icon, label, value, color }) => {
  return (
    <div className='flex items-center gap-6 rounded-2xl border border-gray-200/50 bg-white p-4 shadow-md shadow-gray-100'>
      <div className={`flex h-8 w-8 shrink-0 items-center justify-center text-[20px] text-white ${color} rounded-full`}>
        {icon}
      </div>
      <div>
        <h6 className='mb-1 text-sm text-gray-500'>{label}</h6>
        <span className='text-[16px]'>{value}</span>
      </div>
    </div>
  )
}

export default InfoCard
