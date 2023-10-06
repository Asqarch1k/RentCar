import { useState } from "react";
import "../../../style/style.css";
import "../../../style/main.css";
import Button from "./button";
export const RentCarBox = ({
  name,
  type,
  petrol,
  manual,
  people,
  nowPrise,
  oldPrise,
  img,
  id,
  changeLiked,
  isLiked,
}) => {
  const iconClass = !isLiked
    ? "fa-regular fa-heart"
    : "fa-solid fa-heart likeIcon1";
  return (
    <div className="carsBox">
      <div className="likeIcons">
        <i className={iconClass} onClick={() =>{
          return changeLiked(id)
        } }></i>
      </div>
      <h1 className="nameText ">{name}</h1>
      <p className="typeText m-bot-64">{type}</p>
      <img src={img} alt="" className="m-bot-64 mainCarPhoto" />
      <div className="df gap-16 m-bot-24">
        <div className="df gap-6">
          {" "}
          <div>
            <i className="fa-solid fa-gas-pump colors1"></i>
          </div>
          <span className="colors1">{petrol}</span>
        </div>
        <div className="df gap-6">
          {" "}
          <div>
            <i className="fa-solid fa-circle-notch colors1"></i>
          </div>
          <span className="colors1">{manual}</span>
        </div>
        <div className="df gap-6">
          {" "}
          <div>
            <i className="fa-solid fa-user-group colors1"></i>
          </div>
          <span className="colors1">{people}</span>
        </div>
      </div>
      <div className="df gap-6">
        <div>
          <h2 className="nowPrise">
            {nowPrise}{" "}
            <span style={{ color: "#90A3BF", fontSize: "14px" }}>day</span>
          </h2>
          <h3 className="oldPrise">{oldPrise}</h3>
        </div>
        <Button text={"Rent Now"} type={"btn"} />
      </div>
    </div>
  );
};

const RentCars = ({
  users,
  searchTerm,
  setSearchTerm,
  isLiked,
  changeLiked,
  setUsers, 
  ...props
}) => {
  return (
    <div {...props}>
      {users
        .filter((item) => {
          return searchTerm === "" ? item : item.name.toLowerCase().includes(searchTerm);
        })
        .map((Servis, idx) => (
          <RentCarBox
            isLiked={isLiked}
            changeLiked={changeLiked}
            key={idx}
            {...Servis}
          />
        ))}
    </div>
  );
};

export default RentCars;
