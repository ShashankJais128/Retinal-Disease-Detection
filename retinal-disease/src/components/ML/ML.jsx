import React from "react";
import { useState } from "react";
import mlbg from "../../../public/mlbg.jpg";

function ML() {
  const [selectedImage, setSelectedImage] = useState();

  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    alert(URL.createObjectURL(selectedImage));
  };

  return (
    <div
      className="h-[90vh] p-16  bg-cover  bg-center bg- text-white flex justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(${mlbg})`,
      }}
    >
      <div className=" px-6 bg">
        <h1 className="text-5xl text-center font-bold pb-8">ML</h1>
        <div className="flex bg-gray-900 bg-opacity-60 backdrop-blur-md items-center rounded-xl">
          <div className="w-[400px] h-[400px] flex flex-col items-center justify-center py-4">
            <form onSubmit={onSubmit}>
              <label className="text-lg font-semibold" htmlFor="">
                Choose an image to upload:
              </label>{" "}
              <br />
              <input
                placeholder="hb"
                type="file"
                name=""
                id=""
                accept="image/*"
                className="border-[1px] border-white bg-gray-900 w rounded-md"
                onChange={handleChange}
              />
              <br />
              <div className="flex justify-center ">
                <button
                  className="w-[50%] border-2 border-white bg-gray-700 rounded-md my-4 px-2 py-1"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>

            <div className="pt-4">
              <div className="flex flex-col items-center">
                <button className="border-2 border-white bg-gray-700 rounded-md my-4 px-4 py-1">
                  Predict
                </button>
              </div>
              <div>predicted value</div>
            </div>
          </div>
          <div className="w-[400px] h-[400px] flex justify-center items-center ">
            {!selectedImage && (
              <div className="border-2 w-[350px] h-[350px] bg-gray-700 rounded-xl flex justify-center items-center">
                <h1>Preview</h1>
              </div>
            )}
            {selectedImage && (
              <div className="w-[350px] h-[350px] rounded-xl">
                <img
                  className="w-[350px] h-[350px] rounded-xl"
                  src={URL.createObjectURL(selectedImage)}
                  alt=""
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ML;
