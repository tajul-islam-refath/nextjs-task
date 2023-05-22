"use client";
import { useEffect, useState } from "react";
import DashboardLayout from "./layout";

import axiosInstance from "@/components/axios/axiosInstance";
import { useSession } from "next-auth/react";

const Dashboard = () => {
  const { data: session } = useSession();
  const [lists, setLists] = useState([]);

  const getTaskList = async () => {
    let { data } = await axiosInstance.get("/tasklist", { cache: "no-store" });

    if (data.success == "success") {
      setLists([...data.data]);
    }
  };

  useEffect(() => {
    getTaskList();
  }, []);
  console.log(lists);
  return (
    <div>
      <div className="container mt-5">
        <button className="btn btn-primary">Create Task</button>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">{lists.length}</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Status</th>
              <th scope="col">action</th>
            </tr>
          </thead>
          <tbody>
            {lists.map((list, i) => (
              <tr>
                <th scope="row">{i + 1}</th>
                <td>{list.title}</td>
                <td>{list.description}</td>
                <td>{list.status}</td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
