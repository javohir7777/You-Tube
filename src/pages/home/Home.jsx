import Cards from "../../components/cards/Cards";
import { requies } from "../../server";
import { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
  const [getVideo, setGetVideo] = useState([]);

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    try {
      const { data } = await requies.get("search");
      setGetVideo(data?.items);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="row">
      {getVideo?.map((home) => (
        <Cards key={home?.id?.videoId} home={home} />
      ))}
    </div>
  );
};

export default Home;
