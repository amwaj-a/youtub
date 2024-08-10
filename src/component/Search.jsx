import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setResults, setQuery } from "../features/LogInSlice";
export default function Search({ sethidden, click }) {
  const [searchInput, setsearchInput] = React.useState("");
  const dispatch = useDispatch();
  const result = useSelector((state) => state.search.result);

  const handlesearch = () => {
    sethidden("none");
    // console.log("kk");
    console.log(searchInput);

    if (searchInput == "") {
      axios
        .get(
          "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=SA&key=AIzaSyBRPnllmswwRZq4_bXWyNryBxeiBflJwPU"
        )
        .then((res) => {
          dispatch(setResults(res.data.items.map((e) => e)));

          // console.log(allVedio);
        });
    } else {
      axios
        .get(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchInput}&type=video&key=AIzaSyBRPnllmswwRZq4_bXWyNryBxeiBflJwPU`
        )
        .then((res) => {
          dispatch(setResults(res.data.items));
        });
    }
  };

  return (
    <div
      className="input flex  overflow-hidden p-0 rounded-3xl border-stone-400 max-md:w-full  w-[40vw] m-5  border-[1px] "
      htmlFor=""
    >
      <input
        className="bg-transparent text-lg w-full outline-none px-5  border-none"
        type="search"
        placeholder="بحث"
        onChange={(e) => setsearchInput(e.target.value)}
      />
      <button
        onClick={handlesearch}
        className="bg-stone-100 max-md:px-2 border-r-2 border-stone-400 px-9 text-xl
         rounded-e-3xl
w-10 hover:bg-stone-200"
      >
        <ion-icon name="search-outline"></ion-icon>
      </button>
    </div>
  );
}
