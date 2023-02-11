import {useDispatch} from "react-redux"
import {deleteApartment, getAllApartments} from "../redux/slices/apartment.js"
import {useState} from "react"
import EditForm from "./EditForm.jsx"

const AvailableCard = ({apartment}) => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)

    const handleDelete = (event) => {
        event.preventDefault()
        dispatch(deleteApartment({id: apartment.id})).then(() => dispatch(getAllApartments()))
    }

    return (
        <>
            <div className="bg-white p-5 border border-gray-400 rounded md:flex justify-between items-center">
                <div className="flex flex-col">
                    <p>{apartment.name} / {apartment.rooms} / {apartment.price}</p>
                    <p>{apartment.description}</p>
                </div>
                <div className="flex gap-5">
                    <button
                        onClick={() => setOpen(!open)}
                        className="mt-5 md:mt-0 px-5 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 ease-out duration-150">
                        Edit
                    </button>
                    <button
                        onClick={handleDelete}
                        className="mt-5 md:mt-0 px-5 py-2 bg-red-500 text-white rounded hover:bg-red-600 ease-out duration-150">
                        Delete
                    </button>
                </div>
            </div>
            {open ? <EditForm apartment={apartment} setOpen={setOpen} key={apartment.id}/> : null}
        </>
    )
}

export default AvailableCard