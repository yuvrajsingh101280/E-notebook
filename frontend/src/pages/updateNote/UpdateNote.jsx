import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
const UpdateNote = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");
  // Get Id from useparams

  const { id } = useParams();
  // navigate

  const navigate = useNavigate();
  // Get Note By Id

  const getNotesById = async () => {
    const res = await fetch(
      `https://e-notebook-tler.onrender.com/api/notes/notes/${id}`,
      {
        method: "GET",
        headers: {
          "content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      }
    );

    const data = await res.json();

    // set data
    setTitle(data?.title);

    setTag(data?.tag);
    setDescription(data?.description);
  };

  // Get data automatically

  useEffect(() => {
    getNotesById();
  }, [id]);
  // update Note function

  const updateNote = async () => {
    try {
      const res = await fetch(
        `https://e-notebook-tler.onrender.com/api/notes/updatenote/${id}`,
        {
          method: "PUT",
          headers: {
            "content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
          body: JSON.stringify({ title, tag, description }),
        }
      );

      // response

      const noteData = await res.json();
      // condition

      if (noteData.error) {
        toast.error(noteData.error);
      } else {
        toast.success(noteData.success);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="lg:mx-[6em] mt-16 lg:mt-0 flex justify-center items-center h-screen">
        <div className="bg-[#F3FF90] lg:w-[60em] lg:h-[35em rounded-xl p-10">
          <div className="">
            {/* Top heading */}

            <div className="mb-5">
              <h1 className="text-center text-black text-xl font-bold">
                Update Note
              </h1>
            </div>

            {/* input1 */}

            <div>
              <input
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                type="text"
                name="title"
                className=" mb-4 px-4 py-2 w-full text-black placeholder:text-black outline-none "
                placeholder="Title"
              />
            </div>

            {/* input2 */}
            <div>
              <input
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                type="text"
                name="tag"
                className=" mb-4 px-4 py-2 w-full text-black placeholder:text-black outline-none "
                placeholder="Tag"
              />
            </div>

            {/* TextArea */}

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              cols="30"
              rows="10"
              className="mb-4 px-4 py-2 w-full text-black placeholder:text-black outline-none"
              placeholder="Description"
            ></textarea>
          </div>

          {/* Button */}

          <div className="flex justify-center mb-3">
            <button
              onClick={updateNote}
              className="bg-[#059212] text-white w-full font-bold px-2 py-2.5 rounded-md"
            >
              Update Note
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UpdateNote;
