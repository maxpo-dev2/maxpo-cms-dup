"use client";
import React from "react";
import { BoxIconLine, GroupIcon } from "@/icons";

const data = [
  {
    name: "Future Prop Tech",
    description: "The Tech Show",
    icon: GroupIcon,
    selected: true,
  },
  {
    name: "RevolutionEv",
    description: "The Tech Show",
    icon: BoxIconLine,
  },
];

export const ProjectsMetrics = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
      {data.map((item, index) => (
        <div
          className={
            "rounded-2xl border  bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6" +
            (item.selected ? " border-brand-500 dark:text-brand-400" : "border-gray-200")
          }
          key={index}
        >
          <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
            {item.icon && (
              <item.icon className="text-gray-800 size-6 dark:text-white/90" />
            )}
          </div>

          <div className="flex items-end justify-between mt-5">
            <div>
              <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
                {item.name}
              </h4>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {item.description}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
