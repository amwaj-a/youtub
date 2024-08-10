import React, { useEffect } from "react";
import Nav from "./component/Nav";
import axios, { all } from "axios";
import { Link, useNavigate } from "react-router-dom";
import Profile from "./component/Profile";
import Search from "./component/Search";
import { useSelector } from "react-redux";

export default function Home() {
  const result = useSelector((state) => state.search.result);
  const [allVedio, setallVedio] = React.useState([]);
  const [searchVedio, setsearchVedio] = React.useState([]);
  const [user, setUser] = React.useState([]);
  const navigate = useNavigate();
  const [hidden, sethidden] = React.useState("");

  // const a='ocBhZomiXuk'
  React.useEffect(() => {
    localStorage.getItem("id") &&
      axios
        .get(
          `https://66a83f1c53c13f22a3d22674.mockapi.io/log/login/${localStorage.getItem(
            "id"
          )}`
        )
        .then((res) => {
          setUser(res.data);
        });

    click();
  }, [result]);

  const click = () => {
    setsearchVedio(result);

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

  const formatViwes = (e) => {
    if (e >= 1000000) {
      return (e / 1000000).toFixed(1).replace(/\.0/, "") + " مليون مشاهدة ";
    } else if (e >= 1000) {
      return (e / 1000).toFixed(1).replace(/\.0/, "") + " الف مشاهدة  ";
    }
  };
  return (
    <div className="flex max-md:inline   h-screen font-serif text-lg">
      <Nav />

      <div className=" h-screen max-md:px-3   overflow-y-auto w-fit px-9  ">
        <nav
          className=" px-8 max-md:p-0 h-20 flex justify-between 
items-center w-full"
        >
          <Search sethidden={sethidden} />

          <Profile />
        </nav>

        <div className="grid-cols-3 max-md:grid-cols-1 border-none m-auto grid gap-9 ">
          {hidden != "none" ? (
            allVedio.map((e) => (
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
                        <span className="font-sans text-base mx-2">
                          {" "}
                          {formatViwes(e.statistics.viewCount)}{" "}
                        </span>
                      </span>
                      <span className="text-base">
                        . قبل
                        <span className="font-sans mx-2">
                          {e.contentDetails.dimension}
                        </span>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <div className=" w-[30vw] max-md:w-full  ">
              <section>
                <div className="border mb-5 border-zinc-200  rounded-2xl flex flex-col">
                  <img
                    className="w-full h-24  rounded-t-2xl "
                    src="https://i.pinimg.com/564x/16/84/70/168470b5feb6fbaca5a47e48dbf3cd3a.jpg"
                    alt=""
                  />

                  <div className="flex justify-between px-5 h-20 items-center ">
                    <div className="flex">
                      <img
                        className="rounded-full h-12 w-12"
                        src="https://media.licdn.com/dms/image/C5603AQEfXw-VJvk54w/profile-displayphoto-shrink_400_400/0/1625938593130?e=1725494400&v=beta&t=1Ph_NgaWs4vAsuwq9tmJHCWHiDOTMp9x6UWUTOMnpuI"
                        alt=""
                        srcSet=""
                      />

                      <div className="flex flex-col px-4">
                        <strong className="font-sans">Amwaj Alharbi</strong>
                        <span className="font-bold"> أعلان</span>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        window.open(
                          "https://www.linkedin.com/in/amwaj-alharbi-9916aa215/"
                        );
                      }}
                      className="font-sans btn text-white hover:bg-[#0d93d5] rounded-3xl px-6 text-lg justify-self-end bg-[#0d63d5]"
                    >
                      Go here
                    </button>
                  </div>
                </div>

                {searchVedio != "" ? (
                  <>
                    {" "}
                    {searchVedio.map((e, index) => (
                      <button
                        className="w-[80vw]"
                        key={index}
                        onClick={() => {
                          e.kind.includes("youtube#search")
                            ? navigate(`/${e.id.videoId}`)
                            : navigate(`/${e.id}`);
                          get();

                          // navigate(0);
                        }}
                      >
                        <div className="max-h-40  flex mt-4 max-sm:w-[90vw]">
                          <img
                            className="h-40 rounded-lg  w-52"
                            src={e.snippet.thumbnails.medium.url}
                            alt=""
                          />

                          <div className="flex flex-col overflow-auto items-start px-2">
                            <span className="font-bold">{e.snippet.title}</span>
                            <span className="text-base">
                              {e.snippet.channelTitle}
                            </span>

                            {e.kind.includes("youtube#search") ? (
                              <></>
                            ) : (
                              <div>
                                {" "}
                                <span className=" font-sans ">
                                  <span>{e.statistics.viewCount} </span>

                                  <span className="font-serif text-base mx-2">
                                    مشاهدة{" "}
                                  </span>
                                </span>
                                <span className="text-base">
                                  قبل
                                  <span className="font-sans mx-2">
                                    {e.contentDetails.dimension}
                                  </span>
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </button>
                    ))}
                  </>
                ) : (
                  <section>
                    <p className="text-2xl m-8">لاتوجد نتائج بحث </p>
                  </section>
                )}
              </section>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
