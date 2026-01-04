import React, { useState } from "react";

const ContactPage = () => {
  const [activeMedia, setActiveMedia] = useState(null); // { type: 'image' | 'video', src: string }

  const openMedia = (type, src) => {
    setActiveMedia({ type, src });
  };

  const closeMedia = () => {
    setActiveMedia(null);
  };

  return (
    <div className="contact-page">
      <header className="top-bar">
        <div>
          <h2 className="page-title">Bhairavidham Event</h2>
        </div>
      </header>

      {/* --- CONTAINER 1 --- */}
      <section className="event-section">
        <div className="event-container">
          {/* 👉 Event title & description */}
          <h3 className="event-title">Chitrakoot</h3>
          <p className="event-description">
          </p>

          {/* 👉 Heading for the photo container */}
          <h4 className="event-subheading">Event Photos</h4>

          {/* 👉 Photos: one after another towards left with scroll bar */}
          <div className="photo-scroll">
            <button
              className="media-item"
              onClick={() => openMedia("image", "/images/r3.jpeg")}
            >
              <img
                src="/images/r3.jpeg"
                alt="Darshan at Bhairavidham"
                className="media-photo"
              />
            </button>
            <button
              className="media-item"
              onClick={() => openMedia("image", "/images/r2.jpeg")}
            >
              <img
                src="/images/r2.jpeg"
                alt="Darshan at Bhairavidham"
                className="media-photo"
              />
            </button>
            <button
              className="media-item"
              onClick={() => openMedia("image", "/images/r1.jpeg")}
            >
              <img
                src="/images/r1.jpeg"
                alt="Darshan at Bhairavidham"
                className="media-photo"
              />
            </button>
          </div>
        </div>
      </section>

      {/* --- CONTAINER 2 --- */}
      <section className="event-section">
        <div className="event-container">
          {/* 👉 Event title & description */}
          <h3 className="event-title">Karthika Somavara Pooja (2)</h3>
          <p className="event-description">
            On the auspicious day of Karthika Somavara, devotees gathered at
            Bhairavidham for special pooja, chanting and darshan. Here are some
            moments captured from another session of the event.
          </p>

          {/* 👉 Heading for the photo container */}
          <h4 className="event-subheading">Event Photos</h4>

          {/* 👉 Photos: one after another towards left with scroll bar */}
          <div className="photo-scroll">
            <button
              className="media-item"
              onClick={() => openMedia("image", "/images/r3.jpeg")}
            >
              <img
                src="/images/r3.jpeg"
                alt="Darshan at Bhairavidham"
                className="media-photo"
              />
            </button>
            <button
              className="media-item"
              onClick={() => openMedia("image", "/images/r2.jpeg")}
            >
              <img
                src="/images/r2.jpeg"
                alt="Darshan at Bhairavidham"
                className="media-photo"
              />
            </button>
            <button
              className="media-item"
              onClick={() => openMedia("image", "/images/r1.jpeg")}
            >
              <img
                src="/images/r1.jpeg"
                alt="Darshan at Bhairavidham"
                className="media-photo"
              />
            </button>
          </div>
        </div>
      </section>

      {/* --- CONTAINER 3 (PHOTOS + VIDEOS) --- */}
      <section className="event-section">
        <div className="event-container">
          {/* 👉 Event title & description */}
          <h3 className="event-title">Karthika Somavara Pooja (Videos)</h3>
          <p className="event-description">
            Live moments from pooja, arati and darshan captured as photos and
            videos.
          </p>

          {/* 👉 Photos */}
          <h4 className="event-subheading">Event Photos</h4>
          <div className="photo-scroll">
            <button
              className="media-item"
              onClick={() => openMedia("image", "/images/r3.jpeg")}
            >
              <img
                src="/images/r3.jpeg"
                alt="Darshan at Bhairavidham"
                className="media-photo"
              />
            </button>
            <button
              className="media-item"
              onClick={() => openMedia("image", "/images/r2.jpeg")}
            >
              <img
                src="/images/r2.jpeg"
                alt="Darshan at Bhairavidham"
                className="media-photo"
              />
            </button>
          </div>

          {/* 👉 Videos */}
          <h4 className="event-subheading">Event Videos</h4>
          <div className="video-scroll">
            <button
              className="media-item"
              onClick={() => openMedia("video", "/videos/r6.mp4")}
            >
              <video className="media-video" muted>
                <source src="/videos/r6.mp4" type="video/mp4" />
              </video>
            </button>
            <button
              className="media-item"
              onClick={() => openMedia("video", "/videos/r7.mp4")}
            >
              <video className="media-video" muted>
                <source src="/videos/r7.mp4" type="video/mp4" />
              </video>
            </button>
          </div>
        </div>
      </section>

      {/* --- POPUP / LIGHTBOX FOR IMAGE + VIDEO --- */}
      {activeMedia && (
        <div className="media-modal" onClick={closeMedia}>
          <div
            className="media-modal-inner"
            onClick={(e) => e.stopPropagation()}
          >
            {activeMedia.type === "image" ? (
              <img src={activeMedia.src} alt="" className="media-large" />
            ) : (
              <video
                src={activeMedia.src}
                className="media-large"
                controls
                autoPlay
              />
            )}

            <button className="media-modal-close" onClick={closeMedia}>
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
