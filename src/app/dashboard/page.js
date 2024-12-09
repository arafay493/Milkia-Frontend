"use client";
import SidebarMenu from "@/components/sidebar/SidebarMenu";
// Note: Login component...!

import { useDispatch } from "react-redux";



export default function Dashboard() {
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <SidebarMenu />
        <h1> Dashboard </h1>
      </div>
    </>
  );
}
