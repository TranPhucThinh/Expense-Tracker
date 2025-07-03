import Input from '@/components/Inputs/Input'
import AuthLayout from '@/components/layouts/AuthLayout'
import { UserContext } from '@/context/userContext'
import { API_PATHS } from '@/utils/apiPaths'
import axiosInstance from '@/utils/axiosInstance'
import { validateEmail } from '@/utils/helper'
import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const { updateUser } = useContext(UserContext)

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.')
      return
    }

    if (!password) {
      setError('Password is required.')
      return
    }

    setError('')

    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
        email,
        password
      })

      const { token, user } = response.data

      if (token) {
        localStorage.setItem('token', token)
        updateUser(user)
        navigate('/dashboard')
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message)
      } else {
        setError('Something went wrong. Please try again.')
      }
    }
  }

  return (
    <AuthLayout>
      <div className='flex h-3/4 flex-col justify-center md:h-full lg:w-[70%]'>
        <h3 className='text-xl font-semibold text-black'>Welcome Back</h3>
        <p className='mt-[5px] mb-6 text-xs text-slate-700'>Please enter your credentials to access your account.</p>

        <form onSubmit={handleLogin}>
          <Input
            value={email}
            label='Email Address'
            placeholder='tee@example.com'
            type='email'
            onChange={({ target }) => setEmail(target.value)}
          />

          <Input
            value={password}
            label='Password'
            placeholder='Min 8 Characters'
            type='password'
            onChange={({ target }) => setPassword(target.value)}
          />

          {error && <p className='pb-2.5 text-xs text-red-500'>{error}</p>}

          <button type='submit' className='btn-primary'>
            LOGIN
          </button>

          <p className='mt-3 text-[13px] text-slate-800'>
            {`Don't have an account?`}{' '}
            <Link className='text-primary font-medium underline' to='/signup'>
              SignUp
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  )
}

export default Login
