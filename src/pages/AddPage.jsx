import { useDispatch } from "react-redux";
import ThreadInput from "../components/ThreadInput";
import { useNavigate } from "react-router-dom";
import { asyncAddThread } from "../states/threads/action";

const AddPage = () => {
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
};

export default AddPage;
