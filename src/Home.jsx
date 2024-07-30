import React, { useEffect } from "react";
import Nav from "./component/Nav";
import axios from "axios";
import { Link } from "react-router-dom";
import Profile from "./component/Profile";

export default function Home() {
  const [allVedio, setallVedio] = React.useState([]);
  const [user, setUser] = React.useState([]);
  // const a='ocBhZomiXuk'
  let array = [];
  React.useEffect(() => {
    axios
      .get(
        `https://66a83f1c53c13f22a3d22674.mockapi.io/log/login/${localStorage.getItem(
          "id"
        )}`
      )
      .then((res) => {
        //   res.data.liked.find(e=>e.id==params&& e.islike==true)?
        //   setLike(true):setLike(false)
        setUser(res.data);
        // setcommitAll(res.data.)

        // setallData(res.data.liked);
      });
    click();
    // get()
  }, []);
  // let key='AIzaSyBRPnllmswwRZq4_bXWyNryBxeiBflJwPU'
  // let url='https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc%2Cc0KYU2j0TM4%2CeIho2S0ZahI&maxResults=300&key=AIzaSyBRPnllmswwRZq4_bXWyNryBxeiBflJwPU'
  // useEffect(() => {
  //     axios.get('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=US&key=AIzaSyBRPnllmswwRZq4_bXWyNryBxeiBflJwPU').then(res=>{
  //         setallVedio(res.data.items.map(e=>e.id))
  //         // console.log(res.data.items);
  //      })
  // }, [])
  const click = () => {
    axios
      .get(
        "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=SA&key=AIzaSyBRPnllmswwRZq4_bXWyNryBxeiBflJwPU"
      )
      .then((res) => {
        setallVedio(res.data.items.map((e) => e));
        // console.log(allVedio);
      });
    // {console.log(array)}
  };
  return (
    <div className="flex max-md:inline   h-screen font-serif text-lg">
      <Nav />

      <div className=" h-screen max-md:px-3   overflow-y-auto w-fit px-9  ">
        <nav className=" px-8 max-md:p-0 h-20 flex justify-between items-center w-full">
          <div
            className="input flex  overflow-hidden p-0 rounded-3xl border-stone-400 max-md:w-full  w-[40vw] m-5  border-[1px] "
            htmlFor=""
          >
            <input
              className="bg-transparent text-lg w-full outline-none px-5  border-none"
              type="search"
              placeholder="بحث"
            />
            <button className="bg-stone-100 max-md:px-2 border-r-2 border-stone-400 px-9 text-xl rounded-e-3xl w-10 hover:bg-stone-200">
              <ion-icon name="search-outline"></ion-icon>
            </button>
          </div>

          <Profile />
        </nav>

        <div className="grid-cols-3 max-md:grid-cols-1 border-none m-auto grid gap-9 ">
          {allVedio.map((e) => (
            <div>
              <Link to={`/${e.id}`}>
                <img
                  className="rounded-xl w-full"
                  src={e.snippet.thumbnails.medium.url}
                  alt=""
                />

                <div className="flex flex-col">
                  <span>{e.snippet.title}</span>
                  <span className="text-base">{e.snippet.channelTitle}</span>
                  <div>
                    <span className=" font-sans ">
                      <span>{e.statistics.viewCount} </span>

                      <span className="font-serif text-base mx-2">مشاهدة </span>
                    </span>
                    <span className="text-base">
                      قبل
                      <span className="font-sans mx-2">
                        {e.contentDetails.dimension}
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
