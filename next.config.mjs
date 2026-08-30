import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const projectRoot = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // This project lives inside another directory that also has a lockfile;
  // pin the tracing root so Next doesn't infer the parent as the workspace.
  outputFileTracingRoot: projectRoot,
};

export default nextConfig;
