import CreateForm from "../components/CreateForm.jsx"
import AvailableList from "../components/AvailableList.jsx"

const Home = () => {
    return (
        <div className="flex flex-col gap-10 px-10 md:px-20">
            <h1 className="text-3xl font-bold text-gray-600">Apartments marketplace</h1>
            <CreateForm/>
            <AvailableList/>
        </div>
    )
}

export default Home