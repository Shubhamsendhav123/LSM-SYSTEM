import {celebrities} from '../Constants/CelebrityData.js'
import CarouselSlide from "../Components/CarouselSlide";
import HomeLayout from "../Layouts/HomeLayout";
//import about from "../assets/Images/src/assets/Images/about.jpg";

function AboutUs() {

    
    return (
        <HomeLayout>
            <div className="pl-20 pt-20 flex flex-col text-white">
                <div className="flex items-centergap-5 mx-10">
                    <section className=" w-1/2 space-y-10 ">
                        <h1 className="text-5xl  text-yellow-500 font-semibold">
                            Affordable and quality education
                        </h1>
                        <p className="text-xl text-gray-300">
                            Our goal is to provide the affordable and quality education to the world.
                        </p>
                    </section>
                    <div className="w-1/2">
                        <img
                            id="test1"
                            style={{
                                filter: "drop-shadow(0px 10px 190px rgb(0,0,0))"
                            }}
                            className="drop-shadow-2xl "
                            src="https://www.meratalk.com/wp-content/uploads/2022/03/26c34.webp" alt="main image" />

                    </div>
                </div>
                <div className="carousel w-1/2 my-16 m-auto ">
                    {celebrities && celebrities.map(celebrity => <CarouselSlide {...celebrity} key={celebrity.slideNumber} totalSlides={celebrity.length}  />  )}
                    
                   
                </div>
            </div>
        </HomeLayout>
    )
}

export default AboutUs;