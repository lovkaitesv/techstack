import {useDispatch} from "react-redux"
import {useState} from "react"
import {getAllApartments, updateApartment} from "../redux/slices/apartment.js"

const EditForm = ({apartment, setOpen}) => {
    const dispatch = useDispatch()
    const [name, setName] = useState(apartment.name)
    const [rooms, setRooms] = useState(apartment.rooms)
    const [price, setPrice] = useState(apartment.price)
    const [description, setDescription] = useState(apartment.description)
    const [nameErr, setNameErr] = useState('')
    const [roomsErr, setRoomsErr] = useState('')
    const [priceErr, setPriceErr] = useState('')
    const [descriptionErr, setDescriptionErr] = useState(null)

    const handleName = (e) => {
        setName(e.target.value)
        if (e.target.value.length === 0 || e.target.value.length > 99) {
            setNameErr("Can't be empty. Max 99 symbols")
        } else {
            setNameErr(null)
        }
    }

    const handleRooms = (e) => {
        setRooms((v) => (e.target.validity.valid ? e.target.value : v))
        if (parseInt(e.target.value) === 0 || !e.target.validity.valid || e.target.value.length === 0) {
            setRoomsErr("Can't be zero or less")
        } else {
            setRoomsErr(null)
        }
    }

    const handlePrice = (e) => {
        setPrice((v) => (e.target.validity.valid ? e.target.value : v))
        if (parseInt(e.target.value) === 0 || !e.target.validity.valid || e.target.value.length === 0) {
            setPriceErr("Can't be zero or less")
        } else {
            setPriceErr(null)
        }
    }

    const handleDescription = (e) => {
        setDescription(e.target.value)
        if (e.target.value.length > 999) {
            setDescriptionErr("Can’t be longer than 999 symbols")
        } else {
            setDescriptionErr(null)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setOpen(false)
        !name ? setNameErr("Required") : null
        !rooms ? setRoomsErr("Required") : null
        !price ? setPriceErr("Required") : null
        if (nameErr === null && roomsErr === null && priceErr === null && descriptionErr === null) {
            const apartmentData = {
                id: apartment.id,
                name,
                rooms,
                price,
                description
            }
            dispatch(updateApartment(apartmentData)).then(() => {dispatch(getAllApartments())})
        }
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
                                onChange={handleName}
                                type="text"
                                id="name"
                                placeholder="Ex. Comfortable flat"
                                className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                            />
                            {nameErr ? <p className="text-sm text-red-500 mt-1">{nameErr}</p> : null}
                        </div>
                        <div>
                            <label htmlFor="rooms"
                                   className="pl-2 block text-sm font-medium text-gray-700">Number of rooms</label>
                            <input
                                value={rooms}
                                onChange={handleRooms}
                                type="text"
                                pattern="[0-9]*"
                                id="rooms"
                                placeholder="3"
                                className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm"/>
                            {roomsErr ? <p className="text-sm text-red-500 mt-1">{roomsErr}</p> : null}
                        </div>
                        <div>
                            <label htmlFor="price"
                                   className="pl-2 block text-sm font-medium text-gray-700">Price</label>
                            <input
                                value={price}
                                onChange={handlePrice}
                                type="text"
                                pattern="[0-9]*"
                                id="price"
                                placeholder="500.00"
                                className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm"/>
                            {priceErr ? <p className="text-sm text-red-500 mt-1">{priceErr}</p> : null}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="description"
                               className="pl-2 pt-2 block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            value={description}
                            onChange={handleDescription}
                            className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            rows={3}
                            id="description"
                            placeholder="Apartment description"
                        />
                        {descriptionErr ? <p className="text-sm text-red-500 mt-1">{descriptionErr}</p> : null}
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