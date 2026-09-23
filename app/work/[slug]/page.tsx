import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Terminal, Layers, Cpu, Globe } from "lucide-react";
import Masthead from "@/components/Masthead";
import StudioFooter from "@/components/StudioFooter";
import DribbbleShotPresenter from "@/components/DribbbleShotPresenter";
import { PROJECTS } from "@/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({
    slug: p.slug
  }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col architectural-grid bg-[#F6F6F8]">
      <Masthead />

      <main className="flex-1 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Navigation */}
          <div className="pb-8 border-b border-[rgba(10,10,12,0.06)]">
            <Link
              href="/#work"
              className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#737380] hover:text-[#0A0A0C] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Registry</span>
            </Link>
          </div>

          {/* Project Title & Meta Banner */}
          <div className="pt-10 pb-12 border-b border-[rgba(10,10,12,0.06)]">
            <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#737380] uppercase tracking-wider">
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0A0A0C]" />
                <span>{project.category}</span>
                <span>/</span>
                <span>{project.year}</span>
              </div>
              <div className="flex items-center space-x-2 text-[#0A0A0C]">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--iris)", boxShadow: "0 0 8px var(--iris-glow)" }} />
                <span>Status: {project.status}</span>
              </div>
            </div>

            <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-medium text-[#0A0A0C] tracking-tight">
              {project.title}
            </h1>

            <p className="mt-4 max-w-3xl text-base sm:text-xl text-[#52525B] leading-relaxed">
              {project.subtitle}
            </p>

            {/* Quick Metrics Bar */}
            <div className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-3 gap-px bg-[rgba(10,10,12,0.08)] border border-[rgba(10,10,12,0.08)] rounded-lg overflow-hidden">
              {project.metrics.map((m, i) => (
                <div key={i} className="bg-[#FDFDFE] p-3 sm:p-4">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#737380]">
                    {m.label}
                  </div>
                  <div className="mt-1 text-xs sm:text-sm font-semibold font-mono text-[#0A0A0C]">
                    {m.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Case Study Content */}
          <div className="py-10 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column: Context & Deep Dive (8 cols) */}
            <div className="lg:col-span-8 space-y-8 sm:space-y-12">
              {/* Executive Overview */}
              <div>
                <h2 className="text-xs font-mono uppercase tracking-widest text-[#737380] mb-3">
                  01 / System Overview
                </h2>
                <p className="text-sm sm:text-base text-[#4A4A52] leading-relaxed font-sans">
                  {project.overview}
                </p>
              </div>

              {/* UX Rationale */}
              <div className="p-5 sm:p-8 bg-white border border-[rgba(10,10,12,0.08)] rounded-xl shadow-xs">
                <h2 className="text-xs font-mono uppercase tracking-widest text-[#737380] mb-3">
                  02 / Human UI/UX Rationale
                </h2>
                <p className="text-sm sm:text-base text-[#0A0A0C] leading-relaxed font-sans">
                  {project.uxRationale}
                </p>
              </div>

              {/* Engineering Highlights */}
              <div>
                <h2 className="text-xs font-mono uppercase tracking-widest text-[#737380] mb-4">
                  03 / Full-Stack Engineering Highlights
                </h2>
                <div className="space-y-3">
                  {project.engineeringHighlights.map((hl, i) => (
                    <div
                      key={i}
                      className="p-4 bg-white border border-[rgba(10,10,12,0.06)] rounded-lg flex items-start space-x-3"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                        style={{ backgroundColor: "var(--iris)" }}
                      />
                      <span className="text-sm text-[#4A4A52] leading-normal">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Interactions */}
              <div>
                <h2 className="text-xs font-mono uppercase tracking-widest text-[#737380] mb-4">
                  04 / Micro-Interactions & Pacing
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.keyInteractions.map((ki, i) => (
                    <div
                      key={i}
                      className="p-4 bg-[#F6F6F8] border border-[rgba(10,10,12,0.06)] rounded-lg text-xs text-[#52525B]"
                    >
                      <div className="font-mono text-[10px] uppercase text-[#737380] mb-1">
                        Pattern {i + 1}
                      </div>
                      <div className="text-sm text-[#0A0A0C] font-medium">{ki}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Specification Rail (4 cols) */}
            <div className="lg:col-span-4 space-y-8">
              <div className="p-6 bg-white border border-[rgba(10,10,12,0.08)] rounded-xl shadow-xs space-y-6">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#737380]">
                    Role & Accountability
                  </div>
                  <div className="mt-1 text-sm font-medium text-[#0A0A0C]">
                    {project.role}
                  </div>
                </div>

                <div className="pt-4 border-t border-[rgba(10,10,12,0.06)]">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#737380]">
                    Technologies & Dependencies
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {project.stack.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 text-[11px] font-mono uppercase bg-[#F6F6F8] border border-[rgba(10,10,12,0.08)] rounded text-[#4A4A52]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[rgba(10,10,12,0.06)]">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#737380]">
                    Deployment Channel
                  </div>
                  <div className="mt-1 text-xs font-mono text-[#0A0A0C]">
                    Production Verified (Cloudflare / Edge)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dribbble Shot Exporter for this Project */}
          <DribbbleShotPresenter project={project} />
        </div>
      </main>

      <StudioFooter />
    </div>
  );
}
