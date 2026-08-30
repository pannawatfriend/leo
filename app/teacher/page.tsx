import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { Metadata } from "next";
import HandbookChrome from "../handbook-chrome";

export const metadata: Metadata = {
  title: "คู่มือครู",
  description:
    "คู่มือคอร์ส 8 คาบ สำหรับครู — แผนการสอน การแบ่งเวลา บทสาธิต จุดที่นักเรียนมักติด คลังสคริปต์ และเกณฑ์ให้คะแนน",
};

const html = readFileSync(
  join(process.cwd(), "content", "teacher.html"),
  "utf8",
);

export default function TeacherHandbookPage() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <HandbookChrome storageKey="roblox-course-theme" />
    </>
  );
}
