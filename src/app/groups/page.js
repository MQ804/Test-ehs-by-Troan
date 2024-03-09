"use client";
import React from "react";
import {
    AddGroupButton,
    GroupsCardsList,
    Legend,
    ColorToggleButton,
} from "@/components";

export default function Groups() {
  return (
    <div>
      <div className="mb-4 p-4 rounded-md border-[#1976d2] border-[1px] border-dashed flex ">
        <div className="">
          <ColorToggleButton />
        </div>
        <div className="mx-auto">
          <Legend />
        </div>
        <AddGroupButton />
      </div>
      <GroupsCardsList />
    </div>
  );
}
