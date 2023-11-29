import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";

const ThreadItem = () => {
  return (
    <>
      <div className="mb-2">
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white px-4 py-0.5 border border-blue-500 hover:border-transparent rounded-lg text-sm">
          #Redux
        </button>
      </div>
      <h3 className="text-xl font-bold text-blue-700 ">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit
      </h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt vero
        voluptatem laudantium error animi quidem ad dolorem, accusamus nobis
        sit. Voluptates porro ducimus fuga. Officiis repudiandae voluptas facere
        blanditiis fugit.
      </p>
      <div className="flex items-center mt-4">
        <AiOutlineLike />
        <span className="mr-4 ml-1">0</span>
        <AiOutlineDislike />
        <span className="mr-4 ml-1">0</span>
        <FaRegCommentDots />
        <span className="mr-4 ml-1">0</span>
        <p className="text-gray-500">
          Dibuat oleh{" "}
          <span className="text-blue-600 font-medium">Mr.Jalan</span>
        </p>
      </div>
    </>
  );
};

export default ThreadItem;
