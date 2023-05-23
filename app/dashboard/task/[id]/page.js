"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axiosInstance from "@/components/axios/axiosInstance";

const TaskUpdate = ({ params }) => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");

  const getTask = async () => {
    let { data } = await axiosInstance.get(`/tasks/${params.id}`);
    if (data.status === "success") {
      setTitle(data.data.title);
      setStatus(data.data.status);
      setDescription(data.data.description);
    }
  };

  const onSubmit = async () => {
    try {
      let { data } = await axiosInstance.post(`/task/update/${params.id}`, {
        title,
        status,
        description,
      });

      if (data.status === "success") {
        router.push("/dashboard");
      } else {
        alert("An error occurred");
      }
    } catch (err) {
      alert("An error occurred");
    }
  };

  useEffect(() => {
    getTask();
  }, []);

  return (
    <div className="container">
      <div className="card p-4">
        <div className="row">
          <div className="col-md-6">
            <div class="form-group">
              <label for="title">Title</label>
              <input
                type="text"
                class="form-control"
                id="title"
                placeholder="Enter title"
                onChange={(event) => setTitle(event.target.value)}
                value={title}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div class="form-group">
              <label for="status">Status</label>
              <input
                type="text"
                class="form-control"
                id="status"
                placeholder="Ex: new,complete,cancel"
                onChange={(event) => setStatus(event.target.value)}
                value={status}
              />
            </div>
          </div>
          <div className="col-md-12 mt-2">
            <div class="form-group">
              <label for="description">Description</label>
              <textarea
                class="form-control"
                id="description"
                rows="3"
                onChange={(event) => setDescription(event.target.value)}
                value={description}></textarea>
            </div>
          </div>
        </div>
        <button className="btn btn-primary mt-2" onClick={() => onSubmit()}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default TaskUpdate;
