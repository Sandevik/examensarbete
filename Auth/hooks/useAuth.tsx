import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from "firebase/auth"
import { auth } from '../../firebase';
import type { IUserDetails } from '../../types';
import { fetchUserDetailsByUid } from '../../controllers/fetchUserDetailsByUid';


export default function useAuth() {
  const [currentUser, setCurrentUser] = useState<IUserDetails | null>(null);

  useEffect(()=>{
    const unSub = () => {
        onAuthStateChanged(auth, async (user)=>{
            if (user){
                const details = await fetchUserDetailsByUid(user.uid)
                const changedUser: IUserDetails = {
                    uid: user.uid,
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                    email: user.email,
                    lastSignInTime: user.metadata.lastSignInTime,
                    creationTime: user.metadata.creationTime,
                    name: details?.name,
                    subscriptionType: details?.subscriptionType,
                    userType: details?.userType
                }
                setCurrentUser(changedUser)
            }else{
                setCurrentUser(null)
            }
        })
    }
    return () => unSub();
  },[])

  return {user: currentUser}
}

