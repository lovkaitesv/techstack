import {useDispatch} from "react-redux"
import {useState} from "react"
import {getAllApartments, updateApartment} from "../redux/slices/apartment.js"

const EditForm = ({apartment, setOpen}) => {
    const dispatch = useDispatch()
    const [name, setName] = useState(apartment.name)
    const [rooms, setRooms] = useState(apartment.rooms)
    const [price, setPrice] = useState(apartment.price)
    const [description, setDescription] = useState(apartment.description)

    const handleSubmit = (event) => {
        event.preventDefault()
        setOpen(false)
        const apartmentData = {
            id: apartment.id,
            name,
            rooms,
            price,
            description
        }
        dispatch(updateApartment(apartmentData)).then(() => {dispatch(getAllApartments())})
    }

    return (
        <form action="#" onSubmit={handleSubmit}>
            <p className="text-xl pl-5 pb-2 text-gray-700">Edit apartment info</p>
            <div className="bg-gray-100 p-5 border border-gray-400 rounded lg:flex gap-5 items-center justify-around">
                <div className="flex flex-col basis-10/12">
                    <div className="flex gap-5 flex-col lg:flex-row">
                        <div>
                            <label htmlFor="name"
                                   className="pl-2 block text-sm font-medium text-gray-700">Apartment name</label>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                id="name"
                                placeholder="Ex. Comfortable flat"
                                className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="rooms"
                                   className="pl-2 block text-sm font-medium text-gray-700">Number of rooms</label>
                            <input
                                value={rooms}
                                onChange={(e) => setRooms(e.target.value)}
                                type="text"
                                id="rooms"
                                placeholder="3"
                                className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm"/>
                        </div>
                        <div>
                            <label htmlFor="price"
                                   className="pl-2 block text-sm font-medium text-gray-700">Price</label>
                            <input
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                type="text"
                                id="price"
                                placeholder="500.00"
                                className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm"/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="description"
                               className="pl-2 pt-2 block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            rows={3}
                            id="description"
                            placeholder="Apartment description"
                        />
                    </div>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={() => (setOpen(false))}
                        className="mt-5 lg:mt-0 px-5 py-2 bg-red-500 text-white rounded hover:bg-red-600 ease-out duration-150">Cancel</button>
                    <button
                        type="submit"
                        className="mt-5 lg:mt-0 px-5 py-2 bg-teal-400 text-white rounded hover:bg-teal-500 ease-out duration-150">Update</button>
                </div>
            </div>
        </form>
    )
}

export default EditForm