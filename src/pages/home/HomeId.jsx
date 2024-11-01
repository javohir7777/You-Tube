import { useParams } from "react-router-dom";
// import { requies } from "../../server";
// import { toast } from "react-toastify";
// import { useEffect, useState } from "react";

const HomeId = () => {
  // const [homeId, setHomeId] = useState({});
  const { id } = useParams();

  // useEffect(() => {
  //   const getHomeId = async () => {
  //     try {
  //       const { data } = await requies.get(
  //         `search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=${id}`
  //       );
  //       setHomeId(data.items);
  //     } catch (error) {
  //       toast.error(error);
  //     }
  //   };
  //   getHomeId();
  // }, [id]);

  // console.log(homeId);

  return (
    <div>
      <div
        style={{
          marginTop: "20px",
          width: "100%",
          maxWidth: "853px",
          height: "480px",
        }}
      >
        <iframe
          style={{ borderRadius: "10px" }}
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default HomeId;
