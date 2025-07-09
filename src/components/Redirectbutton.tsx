'use client'
import { SetLocalStorage } from '@/utils/localstorage'
import {  useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './Redirectbutton.module.scss'
export default function Redirectbutton() {
const[loading,setloading]=useState(false)
const[error,seterror]=useState<string|null>(null)
const router=useRouter()
   async function  handleclick() {
    setloading(true)
       try {
        const data=await fetch('https://randomuser.me/api/?results=1&nat=us')
        if(data.ok){
            const user=await data.json()
            SetLocalStorage('user',JSON.stringify(user.results[0]))
            setloading(false)
            router.push('/dashboard')
        }
       } catch (error) {
        setloading(false)
        seterror(error as string)
       }
    }

    return (
        <div className={styles.redirectbutton}>
            {loading && <p>در حال دریافت اطلاعات...</p>}
            {error && <p>خطایی رخ داده است</p>}
            <button className={styles.button} onClick={handleclick} disabled={loading}>
                ورود
            </button>
        </div>
    )
}
