import React from "react";
import "./Video.scss";

const Video = () => {
  const videos = [
    {
      id: 1,
      url: "https://www.youtube.com/watch?v=12CzelZHraw",
    },
    {
      id: 2,
      url: "https://www.youtube.com/watch?v=anotherVideoId",
    },
    {
      id: 3,
      url: "https://www.youtube.com/watch?v=yetAnotherId",
    },
    {
      id: 4,
      url: "https://www.youtube.com/watch?v=yetAnotherId",
    },
    {
      id: 4,
      url: "https://www.youtube.com/watch?v=yetAnotherId",
    },
    {
      id: 4,
      url: "https://www.youtube.com/watch?v=yetAnotherId",
    },
    {
      id: 4,
      url: "https://www.youtube.com/watch?v=yetAnotherId",
    },
    {
      id: 4,
      url: "https://www.youtube.com/watch?v=yetAnotherId",
    },
    {
      id: 4,
      url: "https://www.youtube.com/watch?v=yetAnotherId",
    },
    {
      id: 4,
      url: "https://www.youtube.com/watch?v=yetAnotherId",
    },
  ];

  return (
    <section id="video">
      <div className="video">
        <div className="video--text">
          <h1>video testimonials from our students</h1>
        </div>
        <div className="video--content">
          {videos.map((video) => (
            <iframe
              width="660"
              height="315"
              src="https://www.youtube.com/embed/UDgK_Ecssck?si=CYWk27Kn2nmSqUXB"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Video;
