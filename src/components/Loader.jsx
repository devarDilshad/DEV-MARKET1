import { TailSpin } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div className="flex flex-row justify-center items-center w-full">
        <TailSpin color='red' />
    </div>
  )
}

export default Loader