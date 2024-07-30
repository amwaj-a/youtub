import React from "react";

export default function Search(props) {
  return (
    <div
      className="input flex  overflow-hidden p-0 rounded-3xl border-stone-400 max-md:w-full  w-[40vw] m-5  border-[1px] "
      htmlFor=""
    >
      <input
        className="bg-transparent text-lg w-full outline-none px-5  border-none"
        type="search"
        placeholder="بحث"
        onChange={(e) => props.setSearch(e.target.value)}
      />
      <button
        onClick={props.handlesearch}
        className="bg-stone-100 max-md:px-2 border-r-2 border-stone-400 px-9 text-xl rounded-e-3xl
w-10 hover:bg-stone-200"
      >
        <ion-icon name="search-outline"></ion-icon>
      </button>
    </div>
  );
}
