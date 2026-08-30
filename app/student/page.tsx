import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { Metadata } from "next";
import HandbookChrome from "../handbook-chrome";

export const metadata: Metadata = {
  title: "คู่มือนักเรียน",
  description:
    "คู่มือนักเรียนแบบทำตามทีละขั้น 8 ภารกิจ พร้อมภาพประกอบหน้าจอ เครื่องมือ ผังด่าน และขั้นตอนเผยแพร่เกม",
};

const html = readFileSync(
  join(process.cwd(), "content", "student.html"),
  "utf8",
);

export default function StudentHandbookPage() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <HandbookChrome storageKey="roblox-student-theme" />
    </>
  );
}
