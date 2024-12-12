"use client";
import React from "react";
import TanStackTable from "@/components/TanStackTable/TanStackTable";
import { projectListColumns } from "@/columns/projectListColumns";

const ProjectListTable = () => {
  return <TanStackTable columns={projectListColumns} />;
};

export default ProjectListTable;
