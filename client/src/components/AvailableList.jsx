import AvailableCard from "./AvailableCard.jsx"
import {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {apartmentState, getAllApartments} from "../redux/slices/apartment.js"

const AvailableList = () => {
    const dispatch = useDispatch()
    const apartments = useSelector(apartmentState)
    const [sortOption, setSortOption] = useState('')
    const [filter, setFilter] = useState('')

    useEffect(() => {
        dispatch(getAllApartments({
            price: sortOption,
            rooms: filter
        }))
    }, [sortOption, filter])

    return (
        <div className="flex flex-col gap-5 ">
            <div className="sm:flex justify-between items-center">
                <p className="text-xl pl-5 pb-2 text-gray-700">
                    Available apartments ({apartments.length > 0 ? apartments.length : 0})
                </p>

                <div className="flex items-center pl-5 sm:pl-0">
                    <label htmlFor="filter"
                           className="pr-3 text-gray-700">Rooms:</label>
                    <input
                        value={filter}
                        onChange={e => setFilter(e.target.value)}
                        id="filter"
                        placeholder="Ex. 1"
                        className="py-2 px-3 mr-5 text-gray-500 bg-white border rounded-md shadow-sm outline-none w-20"
                        type="text"/>
                    <p className="pr-3 text-gray-700">Sort by:</p>
                    <select
                        onChange={e => setSortOption(e.target.value)}
                        className="py-2 px-3 text-gray-500 bg-white border rounded-md shadow-sm outline-none"
                        defaultValue="Default">
                        <option value="Default" disabled hidden>Default</option>
                        <option value={'desc'}>Price: Highest first</option>
                        <option value={'asc'}>Price: Lowest first</option>
                    </select>
                </div>
            </div>
            {apartments.length > 0 && apartments.map((apartment, index) => (
                <AvailableCard apartment={apartment} key={index}/>
            ))}

        </div>
    )
}

export default AvailableList