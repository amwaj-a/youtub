import React, { useState } from "react";
import Nav from "../component/Nav";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import CardVideo from "../component/CardVideo";
import Profile from "../component/Profile";
import Search from "../component/Search";
import { useSelector } from "react-redux";

export default function Vedio() {
  const params = useParams().id;
  const [AutoVedio, setAurVedio] = React.useState([]);
  //   const [loginData, setLoginData] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [islike, setLike] = React.useState(false);
  const [deslike, setdeslike] = React.useState(false);
  const [user, setUser] = useState([]);
  const [send, setsend] = useState("none");
  const [update, setUpdate] = useState("");
  const [commit, setCommit] = React.useState("");
  const [commitAll, setcommitAll] = React.useState([]);
  const navigate = useNavigate();
  const [allVedio, setallVedio] = React.useState([]);
  const [searchVedio, setsearchVedio] = React.useState([]);
  const [deleteCo, setdelteCo] = React.useState([]);
  const [hidden, sethidden] = React.useState("");
  const [allData, setallData] = React.useState([]);
  const result = useSelector((state) => state.search.result);
  const formatViwes = (e) => {
    if (e >= 1000000) {
      return (e / 1000000).toFixed(1).replace(/\.0/, "") + " مليون مشاهدة ";
    } else if (e >= 1000) {
      return (e / 1000).toFixed(1).replace(/\.0/, "") + " الف مشاهدة  ";
    }
  };
  React.useEffect(() => {
    get();
    click();
    console.log("dd");
    //   commitAll
  }, [params, result]);
  const get = () => {
    // console.log(localStorage.getItem("id"));
    localStorage.getItem("id") &&
      axios
        .get(
          `https://66a83f1c53c13f22a3d22674.mockapi.io/log/login/${localStorage.getItem(
            "id"
          )}`
        )
        .then((res) => {
          res.data.liked && res.data.liked.find((e) => e.id == params)
            ? setLike(true)
            : setLike(false);
          setUser(res.data);
          // setcommitAll(res.data.)
          console.log(res.data.liked);
          setallData(res.data.liked);
        });
    axios
      .get("https://66a83f1c53c13f22a3d22674.mockapi.io/log/login")
      .then((res) => {
        let array = [];

        res.data.map((e) => {
          e.commit &&
            e.commit.map((element) => {
              if (element.id == params) {
                array.push(element);
              }
            });
        });
        setcommitAll(array);
      });
  };
  const click = () => {
    setsearchVedio(result);
    axios
      .get(
        "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=SA&key=AIzaSyBRPnllmswwRZq4_bXWyNryBxeiBflJwPU"
      )
      .then((res) => {
        setAurVedio(res.data.items.filter((e) => e.id == params));
        if (AutoVedio.length == 0)
          axios
            .get(
              `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${params}&key=AIzaSyBRPnllmswwRZq4_bXWyNryBxeiBflJwPU
`
            )
            .then((e) => {
              setAurVedio(e.data.items);
            });
        console.log();

        // setfilterVedio(res.data.items)
        setallVedio(res.data.items.filter((e) => e.id !== params));
        // console.log(allVedio);
      });
  };

  const videoFaivoret = () => {
    // (res.data.items.filter(e=>e.id!==params))
    // })
    // log;
    setLike(!islike);
    // console.log(allData);

    // deslike==true&&setdeslike(!deslike)
    let array = [];

    // axios
    //   .get(
    //     `https://66a83f1c53c13f22a3d22674.mockapi.io/log/login/${localStorage.getItem(
    //       "id"
    //     )}`
    //   )
    //   .then((res) => {
    if (!islike) {
      if (allData == undefined) {
        array = [{ id: params }];
      } else {
        array = allData;
        array.push({ id: params });
      }

      axios
        .put(
          `https://66a83f1c53c13f22a3d22674.mockapi.io/log/login/${localStorage.getItem(
            "id"
          )}`,
          {
            liked: array,
          }
        )
        .then((_) => {
          console.log("result2");
        });
    } else {
      array = allData;
      let index = array.findIndex((e) => e.id == params);
      array.splice(index, 1);
      axios.put(
        `https://66a83f1c53c13f22a3d22674.mockapi.io/log/login/${localStorage.getItem(
          "id"
        )}`,
        {
          liked: array,
        }
      );
    }
    //   });
  };
  const videoFaivoretRemove = () => {
    let array = [];
    if (allData.find((e) => e.id == params)) {
      array = allData;
      let index = allData.findIndex((i) => i.id == params);
      array[index] = { id: params };
      //   console.log(array);
      axios.put(
        `https://66a83f1c53c13f22a3d22674.mockapi.io/log/login/${localStorage.getItem(
          "id"
        )}`,
        {
          liked: array,
        }
      );
      //   }
    }
    setdeslike(!deslike); //   console.log('trueeeeeeeeeeee');
  };
  const addCommit = () => {
    if (commit !== "") {
      let array = [];
      if (user.commit == undefined) {
        array.push({
          commit: commit,
          img: user.img,
          user: user.user,
          id: params,
        });
        // console.log(array);

        axios
          .put(
            `https://66a83f1c53c13f22a3d22674.mockapi.io/log/login/${localStorage.getItem(
              "id"
            )}`,
            {
              commit: array,
            }
          )
          .then((_) => {
            get();
          });
      } else {
        array = user.commit;
        array.push({
          commit: commit,
          img: user.img,
          user: user.user,
          id: params,
        });
        axios
          .put(
            `https://66a83f1c53c13f22a3d22674.mockapi.io/log/login/${localStorage.getItem(
              "id"
            )}`,
            {
              commit: array,
            }
          )
          .then((_) => {
            get();
          });
      }
    }

    // console.log('id video '+user.img)
    // console.log('id user '+user.user)
    // console.log('commit  '+commit)
    // // console.log('id video '+params)
  };

  const deleteCommit = (e, value) => {
    let array = [];
    axios
      .get(
        `https://66a83f1c53c13f22a3d22674.mockapi.io/log/login/${localStorage.getItem(
          "id"
        )}`
      )
      .then((res) => {
        if (res.data.user == e.user) {
          array = res.data.commit;
          // console.log(array);
          let index = res.data.commit.findIndex((i) => i.commit == e.commit);
          if (value == "delete") {
            array.splice(index, 1);
            axios
              .put(
                `https://66a83f1c53c13f22a3d22674.mockapi.io/log/login/${localStorage.getItem(
                  "id"
                )}`,
                {
                  commit: array,
                }
              )
              .then((_) => {
                document.getElementById("my_modal_deleted").close();
                get();
              });
          } else {
            array[index] = { commit: update };
            axios
              .put(
                `https://66a83f1c53c13f22a3d22674.mockapi.io/log/login/${localStorage.getItem(
                  "id"
                )}`,
                {
                  commit: array,
                }
              )
              .then((_) => {
                document.getElementById("my_modal_update").close();
                get();
              });
          }

          // console.log(array);
        }
      });

    // console.log(e);
    // console.log(localStorage.getItem('id'));
  };

  const handlesearch = () => {
    sethidden("none");
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${search}&type=video&key=AIzaSyBRPnllmswwRZq4_bXWyNryBxeiBflJwPU`
      )
      .then((res) => {
        setallVedio(res.data.items);
      });
  };

  return (
    <div className="flex h-screen  font-serif text-lg">
      <Nav />

      <div
        className="w-full h-screen overflow-y-auto
  max-md:px-2 "
      >
        <nav
          className=" px-8 max-md:p-0 h-20 flex justify-between 
items-center w-full"
        >
          <Search sethidden={sethidden} />

          {/* <Search handlesearch={() => handlesearch()} setSearch={setSearch} /> */}

          <Profile />
        </nav>

        <section className="flex  max-md:flex-col w-fit max-md:w-full ">
          <div
            style={{ display: hidden }}
            className=" max-sm:w-[90%] overflow-x-hidden w-[50vw] mx-4 "
          >
            <iframe
              className="rounded-xl max-md:h-[30vh]  "
              width="100%"
              height="30%"
              src={`https://www.youtube.com/embed/${params}`}
              title="YouTube video player"
              frameBorder="0"
              allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <h1 className="text-2xl self-start font-bold mt-4">
              {AutoVedio.length !== 0 && AutoVedio[0].snippet.title}
            </h1>
            <div className="flex self-start gap-8 mt-5  items-center justify-between">
              <div className="flex flex-col">
                <strong>
                  {AutoVedio.length !== 0 && AutoVedio[0].snippet.channelTitle}
                </strong>
                <span className="font-serif text-base mx-2">
                  {AutoVedio.length !== 0 &&
                    formatViwes(AutoVedio[0].statistics.viewCount)}{" "}
                </span>
              </div>

              <div className="flex">
                <button
                  onClick={() => {
                    deslike == true && setdeslike(false);
                    videoFaivoret();
                  }}
                  className="bg-stone-100 items-center gap-3 border-e-2 border-stone-400 px-7 py-2 text-xl rounded-r-3xl  hover:bg-stone-200 flex"
                >
                  {islike != true ? (
                    <svg
                      className="w-6 h-6 text-gray-800 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 11c.889-.086 1.416-.543 2.156-1.057a22.323 22.323 0 0 0 3.958-5.084 1.6 1.6 0 0 1 .582-.628 1.549 1.549 0 0 1 1.466-.087c.205.095.388.233.537.406a1.64 1.64 0 0 1 .384 1.279l-1.388 4.114M7 11H4v6.5A1.5 1.5 0 0 0 5.5 19v0A1.5 1.5 0 0 0 7 17.5V11Zm6.5-1h4.915c.286 0 .372.014.626.15.254.135.472.332.637.572a1.874 1.874 0 0 1 .215 1.673l-2.098 6.4C17.538 19.52 17.368 20 16.12 20c-2.303 0-4.79-.943-6.67-1.475"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6 text-gray-800 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15.03 9.684h3.965c.322 0 .64.08.925.232.286.153.532.374.717.645a2.109 2.109 0 0 1 .242 1.883l-2.36 7.201c-.288.814-.48 1.355-1.884 1.355-2.072 0-4.276-.677-6.157-1.256-.472-.145-.924-.284-1.348-.404h-.115V9.478a25.485 25.485 0 0 0 4.238-5.514 1.8 1.8 0 0 1 .901-.83 1.74 1.74 0 0 1 1.21-.048c.396.13.736.397.96.757.225.36.32.788.269 1.211l-1.562 4.63ZM4.177 10H7v8a2 2 0 1 1-4 0v-6.823C3 10.527 3.527 10 4.176 10Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>

                <button
                  onClick={() => {
                    setdeslike(!deslike);
                    islike == true && setLike(false);
                    videoFaivoretRemove();
                  }}
                  className="bg-stone-100 items-center gap-3 border-r-0 border-stone-400 px-7 py-2 text-xl rounded-e-3xl  hover:bg-stone-200 flex"
                >
                  {deslike == true ? (
                    <svg
                      class="w-6 h-6 text-gray-800 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.97 14.316H5.004c-.322 0-.64-.08-.925-.232a2.022 2.022 0 0 1-.717-.645 2.108 2.108 0 0 1-.242-1.883l2.36-7.201C5.769 3.54 5.96 3 7.365 3c2.072 0 4.276.678 6.156 1.256.473.145.925.284 1.35.404h.114v9.862a25.485 25.485 0 0 0-4.238 5.514c-.197.376-.516.67-.901.83a1.74 1.74 0 0 1-1.21.048 1.79 1.79 0 0 1-.96-.757 1.867 1.867 0 0 1-.269-1.211l1.562-4.63ZM19.822 14H17V6a2 2 0 1 1 4 0v6.823c0 .65-.527 1.177-1.177 1.177Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      class="w-6 h-6 text-gray-800 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 13c-.889.086-1.416.543-2.156 1.057a22.322 22.322 0 0 0-3.958 5.084 1.6 1.6 0 0 1-.582.628 1.549 1.549 0 0 1-1.466.087 1.587 1.587 0 0 1-.537-.406 1.666 1.666 0 0 1-.384-1.279l1.389-4.114M17 13h3V6.5A1.5 1.5 0 0 0 18.5 5v0A1.5 1.5 0 0 0 17 6.5V13Zm-6.5 1H5.585c-.286 0-.372-.014-.626-.15a1.797 1.797 0 0 1-.637-.572 1.873 1.873 0 0 1-.215-1.673l2.098-6.4C6.462 4.48 6.632 4 7.88 4c2.302 0 4.79.943 6.67 1.475"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <div>
              {/* <details > */}
              <p className="break-words  h-40 overflow-y-auto my-6 bg-stone-100 p-4 rounded-md">
                {AutoVedio.length !== 0 && AutoVedio[0].snippet.description}
              </p>

              <strong className="text-xl">
                <span className="font-sans px-2">
                  {AutoVedio.length !== 0 &&
                    AutoVedio[0].statistics.commentCount}
                </span>
                تعليقاً
              </strong>

              <br />
              {/* commit------------------------------------------------------------- */}
              <div>
                {localStorage.getItem("id") !== null ? (
                  <>
                    <textarea
                      onChange={(e) => {
                        setCommit(e.target.value);
                      }}
                      value={commit}
                      className="w-full border-black border-b outline-none placeholder:text-zinc-600 p-3"
                      type="text"
                      placeholder="إضافة تعليق..."
                    />
                    <button
                      onClick={() => {
                        addCommit();
                        setCommit("");
                      }}
                      className="btn"
                    >
                      تعليق
                    </button>
                  </>
                ) : (
                  <>
                    <textarea
                      disabled
                      onChange={(e) => {
                        setCommit(e.target.value);
                      }}
                      className="w-full border-black border-b outline-none placeholder:text-zinc-600 p-3"
                      type="text"
                      placeholder="    يجب عليك تسجيل الدخول اولاً لكتابة تعليق
"
                    />
                    <button
                      onClick={() => {
                        addCommit();
                      }}
                      disabled
                      className="btn"
                    >
                      تعليق
                    </button>
                  </>
                )}
              </div>
              <span
                style={{ display: send }}
                className="loading loading-spinner loading-lg"
              ></span>

              <div>
                <br />
                <section className=" flex flex-col-reverse">
                  <br />

                  {commitAll.map((e, i) => (
                    <div key={i} className="flex ">
                      <img
                        className="rounded-full h-10 w-10"
                        src={
                          e.img == undefined
                            ? "https://i.pinimg.com/474x/41/76/b9/4176b9b864c1947320764e82477c168f.jpg"
                            : user.img
                        }
                        alt=""
                      />

                      <div className="flex flex-col w-full m-4  text-base">
                        <h1 className="font-bold">
                          <span> {e.user}</span>
                          {/* <span dir='ltr' className='font-normal mx-2 font-sans'>{showTime} </span>  */}
                        </h1>
                        <p>{e.commit}</p>
                        {/* <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis pariatur libero natus inventore esse, aliquid repellendus voluptatibus quod unde explicabo nihil magni laudantium nemo fugiat non earum repellat. Quaerat, eaque!</p> */}
                      </div>

                      {e.user == user.user ? (
                        <div className="dropdown ">
                          <button
                            onClick={() => {
                              setdelteCo(e);
                            }}
                            tabIndex={0}
                            role="button"
                            className="btn m-1"
                          >
                            <ion-icon name="ellipsis-vertical-outline"></ion-icon>
                          </button>

                          <ul
                            tabIndex={0}
                            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                          >
                            <li>
                              <button
                                onClick={() => {
                                  document
                                    .getElementById("my_modal_deleted")
                                    .showModal();
                                }}
                                className="text-xl text-red-800"
                              >
                                حذف تعليقك؟
                              </button>
                            </li>
                            {/* <li><a>Item 2</a></li> */}
                            {/* <li><button onClick={()=>{
        setUpdate(e.commit)
              document.getElementById('my_modal_update').showModal()

    }} className='text-xl text-zinc-800'>تعديل على تعليقك</button></li> */}
                          </ul>
                        </div>
                      ) : (
                        <div className="dropdown ">
                          <button
                            onClick={() => {
                              setdelteCo(e);
                            }}
                            tabIndex={0}
                            role="button"
                            disabled
                            className="btn m-1"
                          >
                            <ion-icon name="ellipsis-vertical-outline"></ion-icon>
                          </button>
                        </div>
                      )}
                    </div>
                  ))}

                  <dialog id="my_modal_deleted" className="modal">
                    <div className="modal-box shadow-md shadow-gray-600 border  w-60  border-gray-600">
                      <h3 className="font-bold text-3xl">هل انت متاكد؟</h3>
                      {/* <p className='text-gray-400 py-6'>لا يمكن التراجع عن هذا الإجراء وستتم الإزالة من ملفك الشخصيّ ومن يوميات أي حسابات تتابعك ومن نتائج البحث. </p> */}
                      <br />
                      <button
                        className="btn text-xl hover:bg-red-700 bg-red-800 rounded-3xl w-full  text-white"
                        onClick={() => {
                          deleteCommit(deleteCo, "delete");
                        }}
                      >
                        حذف
                      </button>

                      <br />

                      <button
                        className="btn bg-zinc-500 text-xl my-6 rounded-3xl hover:border-gray-200 border-gray-300 w-full  text-white"
                        onClick={() => {
                          document.getElementById("my_modal_deleted").close();
                        }}
                      >
                        الغاء
                      </button>
                    </div>
                  </dialog>
                  <dialog id="my_modal_update" className="modal">
                    <div className="modal-box shadow-md shadow-gray-600 border  w-60  border-gray-600">
                      <h3 className="font-bold text-3xl"> التعديل </h3>
                      <textarea
                        onChange={(e) => {
                          setUpdate(e.target.value);
                        }}
                        value={update}
                        className="w-full border-black border-b outline-none placeholder:text-zinc-600 p-3"
                        type="text"
                        placeholder="إضافة تعليق..."
                      />

                      {/* <p className='text-gray-400 py-6'>لا يمكن التراجع عن هذا الإجراء وستتم الإزالة من ملفك الشخصيّ ومن يوميات أي حسابات تتابعك ومن نتائج البحث. </p> */}
                      <br />
                      <button
                        className="btn text-xl hover:bg-blue-700 bg-blue-700 rounded-3xl w-full  text-white"
                        onClick={() => {
                          deleteCommit(deleteCo, "update");
                        }}
                      >
                        تعديل
                      </button>

                      <button
                        className="btn bg-zinc-500 text-xl my-6 rounded-3xl hover:border-gray-200 border-gray-300 w-full  text-white"
                        onClick={() => {
                          document.getElementById("my_modal_update").close();
                        }}
                      >
                        الغاء
                      </button>
                    </div>
                  </dialog>
                </section>
              </div>
            </div>
          </div>

          <div className=" w-[30vw] max-md:w-full px-2  ">
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

              {allVedio != "" ? (
                <>
                  {" "}
                  {hidden != "none" ? (
                    allVedio.map((e, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          e.kind.includes("youtube#search")
                            ? navigate(`/${e.id.videoId}`)
                            : navigate(`/${e.id}`);
                          get();

                          // navigate(0);
                        }}
                      >
                        <div className="h-44  border-4 overflow-auto flex mt-4 ">
                          <img
                            className="h-40 rounded-lg  w-52"
                            src={e.snippet.thumbnails.medium.url}
                            alt=""
                          />

                          <div className="flex max-sm:overflow-auto flex-col items-start text-lg mx-4">
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
                                  <span className="font-serif text-base mx-2">
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
                            )}
                          </div>
                        </div>
                      </button>
                    ))
                  ) : (
                    <>
                      {searchVedio.map((e, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            e.kind.includes("youtube#search")
                              ? navigate(`/${e.id.videoId}`)
                              : navigate(`/${e.id}`);
                            get();

                            // navigate(0);
                          }}
                        >
                          <div className="max-h-40 flex mt-4  w-full">
                            <img
                              className="h-40 rounded-lg  w-52"
                              src={e.snippet.thumbnails.medium.url}
                              alt=""
                            />

                            <div className="flex overflow-auto flex-col items-start mx-4">
                              <span className="font-bold">
                                {e.snippet.title}
                              </span>
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
                  )}
                </>
              ) : (
                <section>
                  <p className="text-2xl m-8">لاتوجد نتائج بحث </p>
                </section>
              )}
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}
