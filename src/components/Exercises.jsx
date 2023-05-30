import { useState, useEffect } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import { ExerciseCard } from "./ExerciseCard";
import { Pagination } from "@mui/material";

const Exercises = ({ setExercises, bodyPart, exercises }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExerciseData = async () => {
      let exerciseData = [];

      if (bodyPart === "all") {
        exerciseData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exerciseData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }

      setExercises(exerciseData);
    };

    fetchExerciseData();
  }, [bodyPart]);

  return (
    <section id="exercises" className="lg:mt-12 mt-4">
      <div className="max-w-[130rem] mx-auto px-10">
        <div className="flex flex-col justify-center items-center">
          <h3 className="font-poppins text-4xl font-medium mb-6 md:mb-12">
            {" "}
            Showing Results{" "}
          </h3>
          <div className="flex flex-row flex-wrap justify-center gap-10 lg:gap-24">
            {currentExercises.map((exercise, index) => (
              <ExerciseCard key={index} exercise={exercise} />
            ))}
          </div>
          {/* Pagination Container */}
          <div className="flex flex-row items-center mt-24">
            {exercises.length > exercisesPerPage && (
              <Pagination
                color="standard"
                shape="rounded"
                size="large"
                defaultPage={1}
                count={Math.ceil(exercises.length / exercisesPerPage)}
                page={currentPage}
                onChange={paginate}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exercises;
