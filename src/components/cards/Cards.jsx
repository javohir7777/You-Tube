import PropTypes from "prop-types";
import "./Cards.css";
import { Link } from "react-router-dom";
const Cards = ({ home }) => {
  const data = new Date(home?.snippet?.publishTime).toISOString().split("T")[0];
  let time = new Date(home?.snippet?.publishedAt).toISOString().split("T")[1];
  let nowTime = time.split(".")[0];
  return (
    <Link to={`onePage/${home?.id?.videoId}`}>
      <div className="card">
        <div className="card-body">
          <img
            className="card-body__img"
            src={home?.snippet?.thumbnails?.high?.url}
            alt={home?.snippet?.title}
          />
        </div>
        <div className="card-footer">
          <div className="card-footer__avatar">
            <img
              className="avatar"
              src={home?.snippet?.thumbnails?.high?.url}
              alt=""
            />
          </div>
          <div className="card-footer__text">
            <h3 className="card-text__h3">{home?.snippet?.description}</h3>
            <p className="card-text__flex card-text__p">
              {home?.snippet?.channelTitle}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  focusable="false"
                  aria-hidden="true"
                  style={{
                    pointerEvents: "none",
                    display: "inherit",
                    width: "14px",
                    height: "14px",
                  }}
                >
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.8 17.3l-4.2-4.1L7 11.8l2.8 2.7L17 7.4l1.4 1.4-8.6 8.5z" />
                </svg>
              </span>
            </p>
            <p className="card-text__p">
              {nowTime} • {data}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
Cards.propTypes = {
  home: PropTypes.object,
};

export default Cards;
