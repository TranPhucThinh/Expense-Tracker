import Input from '@/components/Inputs/Input'
import ProfilePhotoSelector from '@/components/Inputs/ProfilePhotoSelector'
import AuthLayout from '@/components/layouts/AuthLayout'
import { validateEmail } from '@/utils/helper'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [profilePic, setProfilePic] = useState(null)
  const [error, setError] = useState(null)

  const handleSignUp = async (e) => {
    e.preventDefault()

    let profileImageUrl = ''

    if (!fullName) {
      setError('Please enter your full name.')
      return
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.')
      return
    }
    if (!password) {
      setError('Please enter a password.')
      return
    }

    setError(null)
  }

  return (
    <AuthLayout>
      <div className='mt-10 flex h-auto flex-col justify-center md:mt-0 md:h-full lg:w-[100%]'>
        <h3 className='text-xl font-semibold text-black'>Create an Account</h3>
        <p className='mt-[5px] mb-6 text-xs text-slate-700'>Join us today by entering your details below.</p>

        <form onSubmit={handleSignUp}>
          <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />

          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <Input
              value={fullName}
              label='Full Name'
              placeholder='John'
              type='text'
              onChange={({ target }) => setFullName(target.value)}
            />
            <Input
              value={email}
              label='Email Address'
              placeholder='tee@example.com'
              type='email'
              onChange={({ target }) => setEmail(target.value)}
            />

            <div className='col-span-2'>
              <Input
                value={password}
                label='Password'
                placeholder='Min 8 Characters'
                type='password'
                onChange={({ target }) => setPassword(target.value)}
              />
            </div>
          </div>

          {error && <p className='pb-2.5 text-xs text-red-500'>{error}</p>}

          <button type='submit' className='btn-primary'>
            SIGNUP
          </button>

          <p className='mt-3 text-[13px] text-slate-800'>
            {`Don't have an account?`}{' '}
            <Link className='text-primary font-medium underline' to='/login'>
              Login
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  )
}

export default SignUp
