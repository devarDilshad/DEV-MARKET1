import { ExerciseCard } from './ExerciseCard'
import Loader from './Loader'

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <section className='mt-16'>
      <div className="max-w-[130rem] mx-auto px-6 lg:px-10">
        <div className='flex flex-col px-3'>
          <div className='mb-[10rem]'>
            <h4 className="text-3xl font-poppins font-semibold mb-12 text-center sm:text-left">
              Exercises that target the same muscle group
            </h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-10 lg:space-y-0'>
              {targetMuscleExercises.length ? targetMuscleExercises.slice(0,3).map((item,index) => (
                <ExerciseCard key={index} exercise={item} />
                )) : <Loader /> }
            </div>
          </div>
          <div>
            <h4 className="text-3xl font-poppins font-semibold mb-12 text-center sm:text-left">
              Exercises that uses the same equipment
            </h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-10 lg:space-y-0'>
              {equipmentExercises.length ? equipmentExercises.slice(0,3).map((item,index) => (
                <ExerciseCard key={index} exercise={item} />
                )) : <Loader />}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SimilarExercises