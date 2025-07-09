
import styles from "./page.module.scss";
import { Input } from "@/components/Input";
import Redirectbutton from "@/components/Redirectbutton";
export default function Auth() {

  return (
    <div className={styles.page}>
      <main className={styles.main} >
        <h1 className={styles.title}>احراز هویت</h1>
        <p className={styles.description}>لطفا برای ادامه وارد شوید</p>

        <Input />
        <Redirectbutton />
      </main>
    </div>
  );
}
