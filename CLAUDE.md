# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A Next.js (App Router) site publishing two Thai-language handbooks for an
8-session Roblox Studio course aimed at grade-6 students (ป.6): a teacher
handbook (`/teacher`) and a student handbook (`/student`), plus a landing
page (`/`) linking to both.

## Commands

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run start
```

There is no lint or test script configured — `next build` (which runs the
TypeScript compiler via Next's build step) is the main correctness check.

## Architecture

The real content lives in `content/teacher.html` and `content/student.html`
— each is a **complete, self-styled HTML fragment** (its own `<style>` block
plus markup, originally a standalone document with an inline `<script>`).
**To edit handbook content, edit these files directly**, not the files under
`app/`.

The route pages (`app/teacher/page.tsx`, `app/student/page.tsx`) just
`readFileSync` the matching content file at build time and inject it with
`dangerouslySetInnerHTML`. Each content file expects specific DOM hooks:
- `#printBtn` / `#themeBtn` — toolbar buttons
- `.toc a` — table-of-contents links, matched by `href="#id"` to headings in
  the document

Because the original inline `<script>` from each HTML document is stripped
by `dangerouslySetInnerHTML`, `app/handbook-chrome.tsx` (`"use client"`) is
mounted alongside the injected markup on both pages to reimplement that
script's behavior in React: dark/light theme toggling (persisted to
`localStorage` under a page-specific key, `roblox-course-theme` or
`roblox-student-theme`), the print button, and an `IntersectionObserver`
scrollspy that highlights the active ToC entry. If you add new interactive
elements to a content HTML file, wire them up in `handbook-chrome.tsx`
rather than adding a `<script>` tag to the content file (it won't run).
`app/page.tsx` (the landing page) is ordinary React/CSS-modules and unrelated
to this content-injection mechanism.

`next.config.mjs` pins `outputFileTracingRoot` to this directory because the
project sits inside a parent directory that also has a lockfile — don't
remove that without checking Vercel/build output tracing still resolves
correctly. `vercel.json` pins the framework preset to `nextjs` explicitly.

Fonts (Baloo Thai 2, IBM Plex Sans/Mono Thai) are loaded via a Google Fonts
`<link>` in `app/layout.tsx` and referenced by both the landing page CSS and
the content HTML files' own `<style>` blocks — keep font family names in
sync across both if changed.
