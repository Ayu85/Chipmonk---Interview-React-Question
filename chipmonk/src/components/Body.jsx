import { useState } from "react"

const Body = () => {
    // const [home, setHome] = useState(true)
    // const [about, setAbout] = useState(false)
    // const [contact, setContact] = useState(false)
    const [activeTab,setActiveTab]=useState('home')
    return (
        <div className="flex flex-col mt-10 items-center justify-center">
            {/* tabs */}
            <div className="flex gap-3">
                <h1 onClick={() => {
                    // setHome(true)
                    // setAbout(false)
                    // setContact(false)
                    setActiveTab('home')
                }} className="bg-black px-3 py-2 text-white w-32 cursor-pointer">Home</h1>
                <h1 onClick={() => {
                    // setHome(false)
                    // setAbout(true)
                    // setContact(false)
                    setActiveTab('about')
                }} className="bg-black px-3 py-2 text-white w-32 cursor-pointer">About</h1>
                <h1 onClick={() => {
                    // setHome(false)
                    // setAbout(false)
                    // setContact(true)
                    setActiveTab('contact')
                }} className="bg-black px-3 py-2 text-white w-32 cursor-pointer">Contact</h1>
            </div>
            {/* content */}
            <div>
                {activeTab==='home' && <p>home content</p>}
                {activeTab==='about' && <p>about content</p>}
                {activeTab==='contact' && <p>contact content</p>}

            </div>
        </div>
    )
}

export default Body
