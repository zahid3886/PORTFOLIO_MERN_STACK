import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      url: "/html.jpg",
      title: "HTML 5",
    },
    {
      id: 2,
      url: "/css.jpg",
      title: "CSS 3",
    },
    {
      id: 3,
      url: "js.jpg",
      title: "JS",
    },
    {
      id: 4,
      url: "/bootstrap.jpg",
      title: "BOOTSTRAP",
    },
    {
      id: 5,
      url: "/react.jpg",
      title: "REACT JS",
    },
    {
      id: 6,
      url: "/node.jpg",
      title: "NODE JS",
    },
    {
      id: 7,
      url: "/express.jpg",
      title: "EXPRESS JS",
    },
    {
      id: 8,
      url: "/mongodb.jpg",
      title: "MONGO DB",
    },
    {
      id: 9,
      url: "/github.jpg",
      title: "GITHUB",
    },
  ];
  return (
    <>
      <div className="services container">
        <h2>MY SERVICES</h2>
        <div className="banner">
          {services.map((element) => {
            return (
              <div className="item" key={element.id}>
                <h3>{element.title}</h3>
                <img src={element.url} alt={element.title} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
