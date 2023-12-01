import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ThreadInput from "../components/ThreadInput";
import { asyncAddThread } from "../states/threads/action";

function AddPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addThread = ({ title, category, body }) => {
    dispatch(
      asyncAddThread({
        title,
        category,
        body,
        callbackSuccess: () => navigate("/"),
      })
    );
  };

  return (
    <div className="bg-gray-50 h-screen">
      <ThreadInput onThread={addThread} />
    </div>
  );
}

export default AddPage;
