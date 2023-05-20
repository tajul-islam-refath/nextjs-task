"use client";
import { useSession } from "next-auth/react";
import DashboardLayout from "./layout";

const Dashboard = () => {
  const { data: session } = useSession();
  console.log(session);
  return <div>Dashboard</div>;
};

export default Dashboard;
