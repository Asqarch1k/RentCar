import React, { useState } from "react";
import { RentCarBox } from "./ui/rentCarBox";

function Module({
  users,
  changeLiked,
  isLiked,
  setUsers,
  hideModal,
  ...props
}) {

  return (
    <div {...props}>
      {/* <div className="headerModal"c></div> */}
      <div className="boxsModal">
        <div className="secondModalBox">
          {users.map((car) => {
            if (car.isLiked) {
              return <RentCarBox {...car} changeLiked={changeLiked} />;
            }
          })}
        </div>

        <span className="xButton" onClick={hideModal}>
          x
        </span>
      </div>
    </div>
  );
}

export default Module;
