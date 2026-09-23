"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/lib/types";

export default function ProjectTableIndex({ projects }: { projects: Project[] }) {
  return (
    <div id="index" className="pt-16 pb-20 border-b border-[rgba(10,10,12,0.06)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#737380]">
              Complete Index / 04 Shipped
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-sans font-medium text-[#0A0A0C] tracking-tight">
              Systems & Production Repository
            </h2>
          </div>
          <div className="text-xs font-mono text-[#737380]">
            Sort: Chronological (Desc)
          </div>
        </div>

        {/* Tabular Directory */}
        <div className="border border-[rgba(10,10,12,0.08)] bg-white rounded-lg overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[rgba(10,10,12,0.08)] bg-[#F6F6F8] text-[11px] font-mono uppercase tracking-wider text-[#737380]">
                  <th className="py-3 px-4 sm:px-6 font-normal">Project & Focus</th>
                  <th className="py-3 px-4 font-normal hidden md:table-cell">Category</th>
                  <th className="py-3 px-4 font-normal hidden lg:table-cell">Stack</th>
                  <th className="py-3 px-4 font-normal hidden sm:table-cell">Status</th>
                  <th className="py-3 px-4 font-normal text-right">Year</th>
                  <th className="py-3 px-4 sm:px-6 font-normal text-right">Access</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[rgba(10,10,12,0.06)] text-xs">
                {projects.map((proj) => (
                  <tr
                    key={proj.slug}
                    className="group hover:bg-[#F9F9FB] transition-colors"
                  >
                    <td className="py-4 px-4 sm:px-6">
                      <div className="flex items-center space-x-2.5">
                        <span
                          className="w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                          style={{ backgroundColor: "var(--iris)", boxShadow: "0 0 6px var(--iris-glow)" }}
                        />
                        <div>
                          <div className="font-medium text-[#0A0A0C] text-sm tracking-tight">
                            {proj.title}
                          </div>
                          <div className="text-[11px] text-[#737380] line-clamp-1 mt-0.5">
                            {proj.subtitle}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="py-4 px-4 hidden md:table-cell text-[#52525B] font-mono text-[11px]">
                      {proj.category}
                    </td>

                    <td className="py-4 px-4 hidden lg:table-cell">
                      <div className="flex flex-wrap gap-1">
                        {proj.stack.slice(0, 3).map((s) => (
                          <span
                            key={s}
                            className="px-1.5 py-0.5 text-[10px] font-mono uppercase bg-[#F6F6F8] border border-[rgba(10,10,12,0.06)] rounded text-[#52525B]"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </td>

                    <td className="py-4 px-4 hidden sm:table-cell">
                      <span className="inline-flex items-center space-x-1.5 px-2 py-0.5 text-[10px] font-mono rounded bg-black/[0.04] text-[#4A4A52]">
                        <span className="w-1 h-1 rounded-full bg-[#0A0A0C]" />
                        <span>{proj.status}</span>
                      </span>
                    </td>

                    <td className="py-4 px-4 text-right font-mono text-[#737380]">
                      {proj.year}
                    </td>

                    <td className="py-4 px-4 sm:px-6 text-right">
                      <Link
                        href={`/work/${proj.slug}`}
                        className="inline-flex items-center space-x-1 text-xs font-mono text-[#0A0A0C] hover:underline"
                      >
                        <span>Inspect</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
