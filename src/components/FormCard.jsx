import React, { useState } from "react";

const FormCard = () => {
  // storing information that user types
  const [profileImage, setProfileImage] = useState("");
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  return (
    <div>
      <form
        action=""
        className=" bg-gray-200 ml-2.5 mb-2.5 w-100 rounded-xl "
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Added Comment");
        }}
      >
        <div className="grid grid-cols-1 pt-3 pb-3 p-3  space-y-3">
          <label htmlFor="profileImage">Profile Image</label>
          <input
            id="profileImage"
            type="text"
            placeholder="Add Profile Image"
            className=" bg-white  rounded-lg"
            onChange={(e) => {
              setProfileImage(e.target.value);
              console.log(e.target.value);
            }}
          />
          <label htmlFor="">Profile Name</label>
          <input
            type="text"
            placeholder="Add your profile name"
            className=" bg-white rounded-lg"
            onChange={(e) => {
              setName(e.target.value);
              console.log(e.target.value);
            }}
          />
          <label htmlFor="">Comments</label>
          <textarea
            type="text"
            placeholder="write your comment here"
            className=" bg-white rounded-lg"
            onChange={(e) => {
              setComment(e.target.value);
              console.log(e.target.value);
            }}
          />
        </div>
        <div className=" p-3">
          <button className="bg-blue-400 rounded-lg w-full">Add Comment</button>
        </div>
      </form>
    </div>
  );
};

export default FormCard;
