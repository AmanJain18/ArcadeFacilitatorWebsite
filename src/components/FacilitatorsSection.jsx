import React, { useEffect, useState } from "react";
import FacilitatorCard from "./FacilitatorCard";
import { storage } from "../firebase";
import { listAll, ref, getDownloadURL, getMetadata } from "firebase/storage";

const FacilitatorsSection = () => {
  const [facilitators, setFacilitators] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const getMaxVisibleButtons = () => {
    return window.innerWidth < 640 ? 2 : 5;
  };
  const [maxVisibleButtons, setMaxVisibleButtons] = useState(getMaxVisibleButtons());

  useEffect(() => {
    const fetchFacilitators = async () => {
      const facilitatorsRef = ref(storage, "facilitators/");
      const facilitatorsList = await listAll(facilitatorsRef);

      const fetchedFacilitators = await Promise.all(
        facilitatorsList.items.map(async (item) => {
          const imageUrl = await getDownloadURL(item);
          const imageName = await getMetadata(
            ref(storage, `facilitators/${item.name}`)
          ).then((metadata) => {
            const fileName = metadata.name;
            const imageName = fileName.substring(
              0,
              fileName.lastIndexOf(".")
            );
            const imageNameParts = imageName.split("_");
            const formattedName = imageNameParts.join(" ");
            return formattedName;
          });

          const facilitator = {
            name: imageName,
            image: imageUrl,
          };
          return facilitator;
        })
      );

      setFacilitators(fetchedFacilitators);
    };

    fetchFacilitators();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setMaxVisibleButtons(getMaxVisibleButtons());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = facilitators.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(facilitators.length / itemsPerPage)) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  // Calculate the start and end indices for visible buttons
  const totalButtons = Math.ceil(facilitators.length / itemsPerPage);
  const middleButton = Math.floor(maxVisibleButtons / 2);
  let startButton = currentPage - middleButton;
  let endButton = currentPage + middleButton;

  if (startButton <= 0) {
    startButton = 1;
    endButton = Math.min(totalButtons, maxVisibleButtons);
  } else if (endButton > totalButtons) {
    endButton = totalButtons;
    startButton = Math.max(1, totalButtons - maxVisibleButtons + 1);
  }

  return (
    <div className="facilitators-section">
      <h2 className="text-blue-500 text-2xl md:text-3xl lg:text-4xl font-display flex text-center items-center justify-center mt-8 md:mt-16">
        Arcade Facilitators
      </h2>
      <div className="facilitator-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentItems.map((facilitator, index) => (
          <FacilitatorCard key={index} name={facilitator.name} image={facilitator.image} />
        ))}
      </div>
      <div className="pagination flex justify-center items-center mt-4">
        <button
          className={`mr-2 px-2 py-2 border border-blue-500 rounded-md ${currentPage === 1 ? "bg-blue-500 text-white cursor-not-allowed" : "bg-white text-blue-500"
            }`}
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {Array.from({ length: totalButtons }).map((_, index) => {
          // Skip rendering buttons outside the visible range
          if (index + 1 < startButton || index + 1 > endButton) {
            return null;
          }

          return (
            <button
              key={index}
              className={`mx-2 px-4 py-2 border border-gray-500 rounded-md ${currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-white text-blue-500"
                }`}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </button>
          );
        })}
        <button
          className={`ml-2 px-2 py-2 border border-blue-500 rounded-md ${currentPage === Math.ceil(facilitators.length / itemsPerPage)
            ? "bg-blue-500 text-white cursor-not-allowed"
            : "bg-white text-blue-500"
            }`}
          onClick={nextPage}
          disabled={currentPage === Math.ceil(facilitators.length / itemsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FacilitatorsSection;
