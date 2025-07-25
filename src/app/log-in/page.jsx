"use client";

import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react'

const LogInPage = () => {
    const {data : session } = useSession()
    if (!session) {
        return (
            <button className='h-10 w-40 bg-blue-400' onClick={() => signIn()}>SingIn </button>
        )
    }
  return (
    <div>
 <button className='h-10 w-40 bg-amber-400' onClick={() => signOut()}>SignOut</button>
    </div>
  )
}

export default LogInPage
