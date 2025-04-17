import React from "react";

const FormCard = () => {
  return (
    <div>
      <form action="" className=" bg-gray-100 ml-2.5 mb-2.5 w-100 rounded-xl ">
        <div className="grid grid-cols-1 pt-3 pb-3 p-3 m-1">
          <label htmlFor="">Profile Image</label>
          <input
            type="text"
            alt="image"
            placeholder="Add Profile Image"
            className="outline-1  outline-cyan-300  rounded-2xl"
          />
          <label htmlFor="">Profile Name</label>
          <input
            type="text"
            placeholder="Add your profile name"
            className="outline-1   outline-cyan-300 rounded-2xl"
          />
          <label htmlFor="">Comments</label>
          <input
            type="text"
            placeholder="write your comment here"
            className="outline-1 outline-cyan-300  rounded-2xl"
          />
        </div>
        <div className=" p-3">
          <button className="bg-blue-600 rounded-xl ">Add Comment</button>
        </div>
      </form>
    </div>
  );
};

export default FormCard;
