const ThreadCommentInput = () => {
  return (
    <div className="pb-2 mb-5">
      <h2 className="text-xl font-semibold text-gray-700 mt-5">
        Beri Komentar
      </h2>
      <form>
        <div className="mb-4">
          <textarea
            id="body"
            rows={5}
            className="mt-1 p-2 border w-full rounded-md  border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Masukkan isi..."
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 w-full"
        >
          Kirim
        </button>
      </form>
    </div>
  );
};

export default ThreadCommentInput;
