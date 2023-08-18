
import ClipLoader from "react-spinners/ClipLoader";


export default function Loading() {
    return (
        <div className="fixed top-0 flex items-center w-full h-full">
         <ClipLoader />
        </div>
    )
}