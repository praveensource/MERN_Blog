import React from 'react'
import {Button} from 'flowbite-react'
import {AiFillGoogleCircle} from 'react-icons/ai'
import {GoogleAuthProvider, signInWithPopup, getAuth} from 'firebase/auth'
import {useDispatch} from 'react-redux'
import {signInSuccess} from '../redux/user/userSlice'
import { app } from '../firebase'
import { useNavigate } from 'react-router-dom'

const OAuth = () => {
  const dispatch = useDispatch();
    const auth = getAuth(app);
    const navigate = useNavigate();

    const handleGoogleClick = async() => {
        const provider = new GoogleAuthProvider()
        provider.setCustomParameters({prompt:'select_account'})

        try {
            const resultFromGoogle = await signInWithPopup(auth, provider);
            const res = await fetch('/api/auth/google',{
              method:"POST",
              headers:{
                'Content-Type':'application/json',
              },
              body: JSON.stringify({
                name: resultFromGoogle.user.displayName,
                email: resultFromGoogle.user.email,
                googlePhotoUrl: resultFromGoogle.user.photoURL,

              })
            })
            const data = await res.json();
            if(res.ok){
              dispatch(signInSuccess(data));
              navigate('/')
            }
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <Button type='button' className='bg-gradient-to-tr from-pink-400 to-orange-600' outline onClick={handleGoogleClick}>
      <AiFillGoogleCircle className='w-6 h-6 mr-2' />
      Continue with Google
    </Button>
  )
}

export default OAuth
