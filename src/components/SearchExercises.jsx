import { useState, useEffect } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import Categories from "./Categories";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch('');
      setExercises(searchedExercises);
    }
  };

  return (
    <section id="search_exercises" className="relative my-[10rem]">
      <div className="max-w-[130rem] mx-auto px-8">
        <div className="flex flex-col justify-center items-center text-center">
          <h2 className="font-poppins font-semibold text-[2.5rem] md:text-[3.5rem] text-secondary md:w-2/4 tracking-wide leading-[1.3]">
            Awsome Exercises You Should Know
          </h2>
          <div className="fllex flex-row justify-center items-center my-12 w-full ">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
              type="text"
              placeholder="Search Exercise"
              className="py-3 w-[70%] md:w-[60%]"
            />
            <button
              onClick={handleSearch}
              className="font-poppins rounded-md bg-primary text-white py-3 w-[30%] md:w-[10%]"
            >
              Search
            </button>
          </div>
          <Categories data={bodyParts} bodyPart={bodyPart} setBodyPart= {setBodyPart} />
        </div>
      </div>
    </section>
  );
};

export default SearchExercises;
