import Cards from "../../components/cards/Cards";
import { requies } from "../../server";
import { useEffect, useState } from "react";
import "./Home.css";
import { toast } from "react-toastify";

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
      toast.error(error);
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
