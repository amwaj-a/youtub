import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function Profile() {
  const params = useParams().id;
  const [loginData, setLoginData] = React.useState([]);
  const [user, setUser] = useState([]);

  const navigate = useNavigate();
  const [deleteCo, setdelteCo] = React.useState([]);
  // const [allData, setallData] = React.useState([])
  React.useEffect(() => {
    // click()
    get();
    //   commitAll
  }, []);
  const get = () => {
    localStorage.getItem("id") &&
      axios
        .get(
          `https://66a83f1c53c13f22a3d22674.mockapi.io/log/login/${localStorage.getItem(
            "id"
          )}`
        )
        .then((res) => {
          setUser(res.data);
          // setcommitAll(res.data.)
        });
  };
  const editProfile = () => {
    axios
      .put(
        `https://66a83f1c53c13f22a3d22674.mockapi.io/log/login/${localStorage.getItem(
          "id"
        )}`,
        {
          name: loginData.name,
          img: loginData.img,
        }
      )
      .then((r) => {
        document.getElementById("my_modal_edit").close();
        get();
      });
  };

  return (
    <>
      {localStorage.getItem("id") != undefined ? (
        <div className="flex items-center gap-4">
          <div className="dropdown  dropdown-left">
            <button
              onClick={() => {
                setdelteCo(e);
              }}
              tabIndex={0}
              role="button"
              className=" m-1"
            >
              <img
                className="w-14 max-sm:h-10 overflow-hidden h-14 rounded-full"
                src={
                  user.img == undefined
                    ? "https://i.pinimg.com/474x/41/76/b9/4176b9b864c1947320764e82477c168f.jpg"
                    : user.img
                }
              />
            </button>
            <ul
              tabIndex={0}
              className="dropdown-content  menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <button
                  onClick={() => {
                    document.getElementById("my_modal_edit").showModal();
                  }}
                  className="text-xl"
                >
                  ملفك الشخصي{" "}
                </button>
              </li>
              {/* <li><a>Item 2</a></li> */}
              <li>
                <button
                  onClick={() => {
                    localStorage.removeItem("id");
                    navigate("/login");
                  }}
                  className="text-xl text-zinc-800"
                >
                  {" "}
                  تسجيل الخروج
                </button>
              </li>
            </ul>
          </div>

          <dialog id="my_modal_edit" className="modal bg-black bg-opacity-70">
            <div className="modal-box">
              <div className="flex  justify-between">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 text-white top-2">
                    ✕
                  </button>
                </form>
                <h1 className="text-2xl font-bold">تعديل الملف الشخصيّ</h1>
                <button
                  onClick={() => {
                    editProfile();
                  }}
                  className="bg-white hover:bg-white text-xl rounded-3xl w-20 text-black btn font-bold"
                >
                  حفظ
                </button>
              </div>

              <section className="w-full flex flex-col gap-3 py-5 out ">
                {/* <img className='rounded-full w-10 h-10' src={twitter.img==undefined?'https://i.pinimg.com/474x/69/50/1b/69501b91b9aad7e2e62819ba91ca7ffe.jpg':data.img} alt="" /> */}

                <img
                  className="rounded-full h-28 w-28"
                  src={
                    user.img == undefined
                      ? "https://i.pinimg.com/474x/41/76/b9/4176b9b864c1947320764e82477c168f.jpg"
                      : user.img
                  }
                  alt=""
                />

                <label className="input input-bordered flex items-center  rounded-xl w-96 gap-2">
                  <span className="text-gray-400">صورة العرض</span>
                  <input
                    onChange={(e) => {
                      setLoginData({ ...loginData, img: e.target.value });
                    }}
                    type="text"
                    className="grow text-black"
                    placeholder="url"
                  />
                </label>

                <label className="input input-bordered flex items-center  rounded-xl w-96 gap-2">
                  <span className="text-gray-400">الاسم</span>
                  <input
                    onChange={(e) => {
                      setLoginData({ ...loginData, name: e.target.value });
                    }}
                    type="text"
                    className="grow text-black"
                  />
                </label>
              </section>
            </div>
          </dialog>
        </div>
      ) : (
        <button
          onClick={() => {
            navigate("/login");
          }}
          className="text-blue-600  max-sm:text-sm flex items-center h-12 gap-2   hover:bg-blue-100 rounded-3xl border-2 px-4  "
        >
          <span className="max-sm:hidden">
            <ion-icon name="person-outline"></ion-icon>
          </span>
          <span>تسجيل الدخول</span>
        </button>
      )}
    </>
  );
}
