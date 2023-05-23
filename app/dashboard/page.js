"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Head from "next/head";
import DashboardLayout from "./layout";

import axiosInstance from "@/components/axios/axiosInstance";
import { useSession } from "next-auth/react";

const Dashboard = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [lists, setLists] = useState([]);

  const getTaskList = async () => {
    let { data } = await axiosInstance.get("/tasklist", { cache: "no-store" });

    if (data.success == "success") {
      setLists([...data.data]);
    }
  };

  const onDelete = async (id) => {
    let { data } = await axiosInstance.get(`/task/delete/${id}`, {
      cache: "no-store",
    });
    if (data.status == "success") {
      getTaskList();
    } else {
      alert("Error on deleting");
    }
  };

  useEffect(() => {
    getTaskList();
  }, []);

  return (
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="container mt-5">
        <button
          className="btn btn-primary"
          onClick={() => router.push("/dashboard/task")}>
          Create Task
        </button>
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
                  <Link href={`/dashboard/task/${list._id}`}>
                    <i class="bi bi-pencil-square"></i>
                  </Link>
                  <i
                    class="bi bi-trash3-fill text-danger pl-1"
                    onClick={() => onDelete(list._id)}></i>
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
