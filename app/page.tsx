import Link from "next/link";
import styles from "./page.module.css";
import StudentLessonPicker from "./student-lesson-picker";

export default function HomePage() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <span className={styles.eyebrow}>
          <span className={styles.block} aria-hidden />
          คอร์ส · ประถมศึกษาปีที่ 6
        </span>

        <h1 className={styles.title}>Roblox จากศูนย์สู่การเผยแพร่</h1>
        <p className={styles.sub}>
          คอร์ส 8 คาบ พานักเรียน ป.6 สร้างเกม Roblox ของตัวเองตั้งแต่ยังไม่มีบัญชี
          จนกดเผยแพร่ให้เพื่อนทั่วโลกเล่นได้จริงบนเว็บ Roblox
        </p>

        <ul className={styles.facts}>
          <li>
            <b>8 คาบ</b>
            <span>คาบละ 50–60 นาที</span>
          </li>
          <li>
            <b>ป.6</b>
            <span>อายุ 11–12 ปี</span>
          </li>
          <li>
            <b>เน้นสร้างแมป</b>
            <span>+ สคริปต์เบา ๆ คัดลอกวาง</span>
          </li>
          <li>
            <b>ผลงาน 1 เกม</b>
            <span>เผยแพร่จริงบน Roblox</span>
          </li>
        </ul>

        <div className={styles.cards}>
          <Link className={styles.card} href="/teacher">
            <span className={`${styles.cardTag} ${styles.teacher}`}>สำหรับครู</span>
            <h2>คู่มือครู</h2>
            <p>
              แผนการสอน 8 คาบ · การแบ่งเวลาในคาบ · บทสาธิตทีละขั้น ·
              จุดที่นักเรียนมักติด · คลังสคริปต์ · เกณฑ์ให้คะแนน ·
              จดหมายถึงผู้ปกครอง
            </p>
            <span className={styles.go}>เปิดคู่มือครู →</span>
          </Link>

          <StudentLessonPicker />
        </div>

        <footer className={styles.foot}>
          <p>
            ซอร์สโค้ด:{" "}
            <a
              href="https://github.com/pannawatfriend/leo"
              target="_blank"
              rel="noreferrer"
            >
              github.com/pannawatfriend/leo
            </a>{" "}
            · แต่ละคู่มือมีปุ่ม “พิมพ์ / PDF” และสลับธีมสว่าง/มืดในตัว
          </p>
          <p>
            เอกสารเพื่อการศึกษา · “Roblox” เป็นเครื่องหมายการค้าของ Roblox
            Corporation โปรเจกต์นี้ไม่ได้จัดทำหรือรับรองโดย Roblox Corporation ·
            เมนูในโปรแกรมอาจปรับหน้าตาได้ ให้เทียบกับหน้าจอจริงขณะสอน
          </p>
        </footer>
      </div>
    </main>
  );
}
