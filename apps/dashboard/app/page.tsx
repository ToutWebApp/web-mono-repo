import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 style={{ fontSize: "8rem" }}>Tout Dashboard</h1>
      </main>
    </div>
  );
}
