import DashboardLayout from '@/components/layouts/DashboardLayout'
import { useUserAuth } from '@/hooks/useUserAuth'
import { API_PATHS } from '@/utils/apiPaths'
import axiosInstance from '@/utils/axiosInstance'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoMdCard } from 'react-icons/io'
import InfoCard from '@/components/Cards/InfoCard'
import { addThousandsSeparator } from '@/utils/helper'
import { LuHandCoins, LuWalletMinimal } from 'react-icons/lu'

const Home = () => {
  useUserAuth()

  const navigate = useNavigate()

  const [dashboardData, setDashboardData] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchDashboardData = async () => {
    if (loading) return

    setLoading(true)

    try {
      const response = await axiosInstance.get(`${API_PATHS.DASHBOARD.GET_DATA}`)

      if (response.data) {
        setDashboardData(response.data)
      }
    } catch (error) {
      console.log('Something went wrong. Please try again.', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchDashboardData()
    return () => {}
  }, [])

  return (
    <DashboardLayout activeMenu='Dashboard'>
      <div className='mx-auto my-5'>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
          <InfoCard
            icon={<IoMdCard />}
            label='Total Balance'
            value={addThousandsSeparator(dashboardData?.totalBalance || 0)}
            color='bg-primary'
          />

          <InfoCard
            icon={<LuWalletMinimal />}
            label='Total Income'
            value={addThousandsSeparator(dashboardData?.totalIncome || 0)}
            color='bg-orange-500'
          />

          <InfoCard
            icon={<LuHandCoins />}
            label='Total Expense'
            value={addThousandsSeparator(dashboardData?.totalExpense || 0)}
            color='bg-red-500'
          />
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Home
