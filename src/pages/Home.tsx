import NavBar from "../components/core/NavBar"


const Home = () => {
    return (
        <div className="Cover" 
        >
            <NavBar></NavBar>
            <div className="bottom-right-box bg-center bg-cover bg-no-repeat" style={{ backgroundImage: "url('/img/woman.jpg')" }}
            >
                <div className="smaller-cover ">
                    <h2>Light Grey Surface </h2>
                    <h2>Headphone</h2>
                    <h3>Boosted with bass</h3>
                </div>

            </div>
        </div>
    )
}

export default Home