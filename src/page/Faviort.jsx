import React from "react";
import Nav from "../component/Nav";
import axios from "axios";
import CardVideo from "../component/CardVideo";
import { useNavigate } from "react-router-dom";
import Profile from "../component/Profile";

export default function Faviort() {
  const navigate = useNavigate();
  // const [dataLiked, setdataLiked] = React.useState([])
  const [allData, setallData] = React.useState([]);
  const [user, setUser] = React.useState([]);

  React.useEffect(() => {
    let array = [];
    axios
      .get(
        `https://66a83f1c53c13f22a3d22674.mockapi.io/log/login/${localStorage.getItem(
          "id"
        )}`
      )
      .then((result) => {
        // setdataLiked(result.data);
        // console.log(user);
        // console.log(result.data.liked);

        axios
          .get(
            "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=SA&key=AIzaSyBRPnllmswwRZq4_bXWyNryBxeiBflJwPU"
          )
          .then((res) => {
            res.data.items.map((item) => {
              result.data.liked.find((e) => {
                if (e.id == item.id) {
                  array.push(item);
                }
              });
              // {array.push(item)
              //   console.log('item');
              //           }
              // console.log('-----------------------------------');
              // console.log( dataLiked.find(e=>e==item.id));

              //  if(

              //    find(e=>e.id==item))
              //     {        array.push(res.data.items)
              //     }
            });
            console.log(array);
            setallData(array);

            // setallData(res.data.items.filter(e=>))
          });
      });
  }, []);

  return (
    <div className="flex h-screen w-screen font-serif text-lg">
      <Nav />

      <div className=" h-screen overflow-y-auto w-screen px-9  ">
        <nav
          className=" px-8 max-md:p-0 h-20 flex justify-end 
items-center w-full"
        >
          <Profile />
        </nav>
        <div className="w-full  flex-col flex gap-3">
          {/* {console.log(allData)} */}
          {allData.length != 0 ? (
            allData.map((e, index) => (
              <button
                key={index}
                onClick={() => {
                  navigate(`/${e.id}`);
                  // navigate(0)
                }}
              >
                <div className="max-h-40 flex mt-4 max-md:flex-col  w-full">
                  <img
                    className="h-40 w-52"
                    src={e.snippet.thumbnails.medium.url}
                    alt=""
                  />

                  <div className="flex flex-col items-start mx-5">
                    <span>{e.snippet.title}</span>
                    <span className="text-base">{e.snippet.channelTitle}</span>
                    <div>
                      <span className=" font-sans ">
                        <span>{e.statistics.viewCount} </span>

                        <span className="font-serif text-base mx-2">
                          سشاهدة{" "}
                        </span>
                      </span>
                      <span className="text-base">
                        قبل
                        <span className="font-sans mx-2">
                          {e.contentDetails.dimension}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            ))
          ) : (
            <>
              <h2 className="text-xl  h-screen flex justify-center items-center">
                لايوجد مقاطع مفضلة{" "}
              </h2>
            </>
          )}{" "}
        </div>
      </div>
    </div>
  );
}
