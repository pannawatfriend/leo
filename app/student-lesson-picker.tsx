"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import pickerStyles from "./student-lesson-picker.module.css";

const STUDENT_LESSONS = [
  { id: "l1", num: "1", title: "เปิดโลก Roblox Studio", en: "Getting into Roblox Studio" },
  { id: "l2", num: "2", title: "ก้อน Part และการต่อบล็อก", en: "Building with Parts" },
  { id: "l3", num: "3", title: "พื้นโลกและบรรยากาศ", en: "Terrain, sky & mood" },
  {
    id: "l4",
    num: "4",
    title: "ทำให้เป็นเกม: เกิด – ตาย – ด่าน",
    en: "Spawn, kill bricks & checkpoints",
  },
  { id: "l5", num: "5", title: "ออกแบบด่าน Obby", en: "Designing a playable obby" },
  { id: "l6", num: "6", title: "คะแนน เหรียญ และของเก็บ", en: "Leaderboard, coins & pickups" },
  { id: "l7", num: "7", title: "ตกแต่ง เสียง และเทสต์เกม", en: "Polish, sound & playtesting" },
  { id: "l8", num: "8", title: "เผยแพร่เกมขึ้นเว็บ Roblox", en: "Publish & go public" },
  {
    id: "l9",
    num: "★",
    title: "หน้าจอโหลดเกมแบบกำหนดเอง",
    en: "Custom Loading Screen (ภารกิจพิเศษ)",
  },
];

export default function StudentLessonPicker() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    dialogRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className={`${styles.card} ${pickerStyles.cardButton}`}
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
      >
        <span className={`${styles.cardTag} ${styles.student}`}>สำหรับนักเรียน</span>
        <h2>คู่มือนักเรียน</h2>
        <p>
          8 ภารกิจทำตามทีละขั้น พร้อมช่องติ๊ก · ภาพประกอบหน้าจอ เครื่องมือ
          และผังด่าน · กล่อง “ลองเอง” · หน้าสคริปต์ · เกียรติบัตรนักสร้างเกม
        </p>
        <span className={styles.go}>เลือกภารกิจที่จะเปิด →</span>
      </button>

      {open && (
        <div
          className={pickerStyles.overlay}
          onClick={close}
          onKeyDown={(e) => {
            if (e.key === "Escape") close();
          }}
        >
          <div
            ref={dialogRef}
            className={pickerStyles.dialog}
            role="dialog"
            aria-modal="true"
            aria-labelledby="lesson-picker-title"
            tabIndex={-1}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={pickerStyles.dialogHead}>
              <h2 id="lesson-picker-title">เปิดคู่มือนักเรียน — เลือกภารกิจ</h2>
              <button
                type="button"
                className={pickerStyles.close}
                onClick={close}
                aria-label="ปิด"
              >
                ✕
              </button>
            </div>

            <Link href="/student" className={pickerStyles.coverLink} onClick={close}>
              📖 เปิดจากหน้าปก (เริ่มตั้งแต่ต้นเล่ม)
            </Link>

            <ul className={pickerStyles.list}>
              {STUDENT_LESSONS.map((lesson) => (
                <li key={lesson.id}>
                  <Link
                    href={`/student#${lesson.id}`}
                    className={pickerStyles.item}
                    onClick={close}
                  >
                    <span className={pickerStyles.num}>{lesson.num}</span>
                    <span className={pickerStyles.text}>
                      <b>{lesson.title}</b>
                      <span>{lesson.en}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
