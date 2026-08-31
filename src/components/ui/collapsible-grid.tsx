"use client";

import React from "react";
import { ChevronDown } from "lucide-react";

interface CollapsibleGridProps extends React.HTMLAttributes<HTMLDivElement> {
  header: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
  rightActions?: React.ReactNode;
}

export default function CollapsibleGrid({
  header,
  children,
  footer,
  isExpanded,
  onToggle,
  rightActions,
  className = "",
  ...props
}: CollapsibleGridProps) {
  return (
    <div
      className={`relative group transition-colors duration-300 hover:bg-muted/30 ${className}`}
      {...props}
    >
      {/* Corner Brackets */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-emerald-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-15 pointer-events-none" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-emerald-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-15 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-emerald-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-15 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-emerald-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-15 pointer-events-none" />

      <div className="p-4 cursor-pointer select-none" onClick={onToggle}>
        <div className="flex items-center justify-between gap-3">
          <div className="flex-1 min-w-0">{header}</div>

          {/* Action buttons area (Expand Chevron + Right Actions) */}
          <div className="flex items-center gap-2">
            {/* Animated Expand Chevron */}
            <div
              className={`p-1.5 rounded-lg border border-dashed border-border/60 bg-muted/20 text-muted-foreground transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isExpanded
                  ? "rotate-180 border-emerald-500/40 bg-emerald-500/10 text-emerald-500"
                  : "group-hover:border-border group-hover:text-foreground"
              }`}
            >
              <ChevronDown className="w-4 h-4 transition-transform duration-300" />
            </div>

            {/* Right Actions Slot (e.g. Eye button to the right of arrow) */}
            {rightActions}
          </div>
        </div>

        {/* Smooth Organic Collapsible Accordion Container */}
        <div
          className={`grid transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isExpanded
              ? "grid-rows-[1fr] opacity-100 pt-3"
              : "grid-rows-[0fr] opacity-0 pt-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="pb-1 text-sm text-muted-foreground">{children}</div>
          </div>
        </div>

        {footer && <div className="mt-1">{footer}</div>}
      </div>
    </div>
  );
}
