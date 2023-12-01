import React from "react";
import { Link } from "react-router-dom";
import { MdAssignmentAdd } from "react-icons/md";

function AddButton() {
  return (
    <div className="fixed bottom-0 right-0 p-4">
      <Link to="/threads/new">
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full flex items-center justify-center"
        >
          <MdAssignmentAdd size={24} />
        </button>
      </Link>
    </div>
  );
}

export default AddButton;
