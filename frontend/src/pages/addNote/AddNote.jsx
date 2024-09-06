import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/MyContext";

const AddNote = () => {
  const context = useContext(myContext);

  const { title, setTitle, description, setDescription, tag, setTag, addNote } =
    context;

  return (
    <Layout>
      <div className="lg:mx-[6em] mt-16 lg:mt-0 flex justify-center items-center h-screen">
        <div className="bg-[#F3FF90] lg:w-[60em] lg:h-[35em rounded-xl p-10">
          <div className="">
            {/* Top heading */}

            <div className="mb-5">
              <h1 className="text-center text-black text-xl font-bold">
                Add Note
              </h1>
            </div>

            {/* input1 */}

            <div>
              <input
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                name="title"
                className=" mb-4 px-4 py-2 w-full text-black placeholder:text-black outline-none "
                placeholder="Title"
              />
            </div>

            {/* input2 */}
            <div>
              <input
                value={tag}
                onChange={(e) => {
                  setTag(e.target.value);
                }}
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
              onClick={addNote}
              className="bg-[#059212] text-white w-full font-bold px-2 py-2.5 rounded-md"
            >
              Add Note
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddNote;
