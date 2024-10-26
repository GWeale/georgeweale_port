"use client";

import { Metadata } from "next";
import ProjectContent from "./page-content";

export const metadata: Metadata = {
  title: "Projects",
  description: "My Projects",
};

export default function ProjectsPage() {
  return <ProjectContent />;
}
