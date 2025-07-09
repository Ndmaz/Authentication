'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { GetLocalStorage } from "@/utils/localstorage";
import styles from './page.module.scss'
export default function DashboardPage() {
    const [userinfo, setUserinfo] = useState<any>();
    const router = useRouter();

    useEffect(() => {
        const user = GetLocalStorage('user');
        if (!user) {
            router.push('/');
            return;
        }
        try {
            setUserinfo(user);
        } catch {
            router.push('/');
        }
    }, [router]);

    if (!userinfo) {
        return <main>در حال بارگذاری...</main>;
    }

    return (
        <main className={styles.dashboard}>
            <h1 className={styles.title}>داشبورد</h1>
            <p className={styles.description}>به داشبورد خوش آمدید</p>
            <p className={styles.info}>{userinfo}</p>

        </main>
    );
} 