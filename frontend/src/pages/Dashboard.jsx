import React, { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
// import { useNavigate } from "react-router-dom";
import { AppContent } from "../context/AppContext";
import { toast } from "react-toastify";
import Sidebar from "../components/Sidebar";
import CategoryCard from "../components/CategoryCard";
import Modal from "react-modal";
import axios from "axios";

const Dashboard = () => {
  // const navigate = useNavigate();
  const { backendUrl } = useContext(AppContent);
  const [categoryData, setcategoryData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [categoryImage, setCategoryImage] = useState("");
  const [categoryCount, setcategoryCount] = useState(0);

  useEffect(() => {
    getStatesData();
  }, []);

  const getStatesData = async () => {
    try {
      const url = backendUrl + "/api/categories";
      const response = await fetch(url);
      const data = await response.json();
      setcategoryData(data);
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const submitCategoryData = async (e) => {
    e.preventDefault();

    const newCategory = {
      categoryId: categoryData.length + 1,
      categoryImage: categoryImage,
      categoryName: categoryName,
      itemCount: categoryCount,
    };

    try {
      const response = await axios.post(backendUrl + "/api/categories", {
        categoryData: newCategory,
      });

      console.log("Category added:", response.data);
      setModalIsOpen(false);
      getStatesData();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className=" nav-container flex items-center justify-center   px-6 sm:px-0 bg-indigo-900">
        <Navbar />
      </div>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex flex-col justify-start p-12 w-full">
          <div className="flex flex-row justify-between items-center mb-6 w-full">
            <h1 className="text-3xl text-slate-950 ">Categories</h1>
            <button
              onClick={openModal}
              className="bg-indigo-600 h-10 w-40 text-white text-xl"
            >
              + Add Category
            </button>
          </div>

          {isLoading ? (
            <div></div>
          ) : (
            <div className="flex justify-around items-start flex-wrap w-full overflow-auto scroll-smooth">
              {categoryData.map((each) => (
                <CategoryCard categoryDetails={each} key={each.categoryId} />
              ))}
            </div>
          )}
        </div>
        <Modal
          isOpen={modalIsOpen}
          ariaHideApp={false}
          onRequestClose={closeModal}
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
            },
          }}
        >
          <form className="p-4 flex flex-col justify-around mb-6 items-center">
            <div className="flex flex-col ">
              <label className="text-xl" htmlFor="categoryName">
                Category Name
              </label>
              <input
                id="categoryName"
                type="text"
                placeholder="Enter category name"
                className="h-10  p-4 outline-2"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
              />
            </div>
            <div className="flex flex-col ">
              <label className="text-xl" htmlFor="image">
                Image Link
              </label>
              <input
                id="image"
                className="h-10  p-4 outline-2"
                type="text"
                value={categoryImage}
                placeholder="Enter Image Link Here"
                onChange={(e) => setCategoryImage(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xl" htmlFor="count">
                Item Count
              </label>
              <input
                placeholder="Enter item count"
                type="number"
                className="h-10  p-4 outline-2"
                id="count"
                value={categoryCount}
                onChange={(e) => setcategoryCount(e.target.value)}
              />
            </div>
            <button
              type="submit"
              onClick={submitCategoryData}
              className="text-white bg-blue-600 h-10 w-36 items-center mt-6"
            >
              Submit
            </button>
          </form>
          <button onClick={closeModal}>Close</button>
        </Modal>
      </div>
    </>
  );
};

export default Dashboard;
