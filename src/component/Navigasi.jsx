function Navigasi() {
  return (
    <>
      <div className="flex justify-between pb-2 border-b border-gray-300 font-medium text-xl">
        <h1>Todo List</h1>
        <p>&#8942;</p>
      </div>

      {/* <div className="flex items-center mb-4 font-medium">
        <button
          className={`w-1/2 text-center p-2 ${
            active === "folder"
              ? "border-b border-slate-500 bg-slate-50"
              : "border-b border-gray-300"
          }`}
          onClick={() => setActive("folder")}
        >
          Folder
        </button>

        <button
          className={`w-1/2 text-center p-2 ${
            active === "file"
              ? "border-b border-slate-500 bg-slate-50"
              : "border-b border-gray-300"
          }`}
          onClick={() => setActive("file")}
        >
          File
        </button>
      </div> */}
    </>
  );
}

export default Navigasi;
