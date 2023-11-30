import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

const ThreadInput = ({ onThread }) => {
  const [title, onTitteChange] = useInput("");
  const [category, onCategoryChange] = useInput("");
  const [body, onBodyChange] = useInput("");

  const addThread = (e) => {
    e.preventDefault();
    onThread({ title, category, body });
  };

  return (
    <form className="max-w-screen-xl mx-auto p-6" onSubmit={addThread}>
      <h2 className="text-3xl font-semibold mb-4">Buat Diskusi baru</h2>
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-600"
        >
          Judul:
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={onTitteChange}
          className="mt-1 p-2 border w-full rounded-md  border-gray-300 focus:outline-none focus:border-blue-500"
          placeholder="Masukkan judul..."
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="category"
          className="block text-sm font-medium text-gray-600"
        >
          Kategori:
        </label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={onCategoryChange}
          className="mt-1 p-2 border w-full rounded-md  border-gray-300 focus:outline-none focus:border-blue-500"
          placeholder="Masukkan kategori..."
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="body"
          className="block text-sm font-medium text-gray-600"
        >
          Isi:
        </label>
        <textarea
          id="body"
          rows={5}
          value={body}
          onChange={onBodyChange}
          className="mt-1 p-2 border w-full rounded-md  border-gray-300 focus:outline-none focus:border-blue-500"
          placeholder="Masukkan isi..."
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 w-full"
      >
        Simpan
      </button>
    </form>
  );
};

ThreadInput.propTypes = {
  onThread: PropTypes.func.isRequired,
};

export default ThreadInput;
