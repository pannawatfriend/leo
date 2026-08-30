# คอร์ส Roblox ป.6 — จากศูนย์สู่การเผยแพร่

เว็บแอป Next.js (App Router) ที่รวม **คู่มือครู** และ **คู่มือนักเรียน** สำหรับคอร์ส
8 คาบ สอนนักเรียนชั้นประถมศึกษาปีที่ 6 สร้างและเผยแพร่เกม Roblox

| เส้นทาง     | เนื้อหา                                                                 |
| ----------- | ---------------------------------------------------------------------- |
| `/`         | หน้าแรก ลิงก์ไปคู่มือทั้งสองเล่ม                                          |
| `/teacher`  | คู่มือครู — แผนการสอน การแบ่งเวลา บทสาธิต คลังสคริปต์ เกณฑ์ให้คะแนน       |
| `/student`  | คู่มือนักเรียน — 8 ภารกิจทำตามทีละขั้น พร้อมภาพประกอบและหน้าสคริปต์       |

## โครงสร้าง

```
app/
  layout.tsx            รูทเลย์เอาต์ + โหลดฟอนต์ (Baloo Thai 2, IBM Plex Sans/Mono Thai)
  page.tsx              หน้าแรก
  handbook-chrome.tsx   client component: ปุ่มสลับธีม, ปุ่มพิมพ์, scrollspy ของสารบัญ
  teacher/page.tsx      อ่าน content/teacher.html แล้ว render
  student/page.tsx      อ่าน content/student.html แล้ว render
content/
  teacher.html          <style> + มาร์กอัปคู่มือครู (แหล่งข้อมูลจริง แก้ที่นี่)
  student.html          <style> + มาร์กอัปคู่มือนักเรียน
```

คู่มือแต่ละเล่มเป็นเอกสารที่จัดสไตล์ครบในตัว หน้า `/teacher` และ `/student`
ฝังมาร์กอัปด้วย `dangerouslySetInnerHTML` และใช้ `handbook-chrome.tsx`
แทน `<script>` เดิมของเอกสาร แก้เนื้อหาให้แก้ไฟล์ใน `content/`

## รันในเครื่อง

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start
```

## หมายเหตุ

เอกสารเพื่อการศึกษา · "Roblox" เป็นเครื่องหมายการค้าของ Roblox Corporation
โปรเจกต์นี้ไม่ได้จัดทำหรือรับรองโดย Roblox Corporation
