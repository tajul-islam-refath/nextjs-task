"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axiosInstance from "@/components/axios/axiosInstance";

const TaskCreate = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = async () => {
    try {
      let { data } = await axiosInstance.post("/task/create", {
        title,
        status,
        description,
      });

      if (data.success === "success") {
        router.push("/dashboard");
      } else {
        alert("An error occurred");
      }
    } catch (err) {
      alert("An error occurred");
    }
  };

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
                onChange={(event) =>
                  setDescription(event.target.value)
                }></textarea>
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

export default TaskCreate;
