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
                                filter: "drop-shadow(0px 10px 190px rgb(0,0,0));"
                            }}
                            className="drop-shadow-2xl "
                            src="https://www.meratalk.com/wp-content/uploads/2022/03/26c34.webp" alt="main image" />

                    </div>
                </div>
                <div className="carousel w-1/2 my-16 m-auto">
                    <div id="slide1" className="carousel-item relative w-full">
                        <div className="flex flex-col justify-center items-center gap-4 px-[15%] ">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                                class="w-40 rounded-full border-2 border-gray-400" />
                                
                            <div className="absolute w-[50%] left-1 right-2 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide4" className="btn btn-circle ">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <div className="flex flex-col justify-center items-center gap-4 px-[15%] ">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                                class="w-40 rounded-full border-2 border-gray-400" />
                            <div className="absolute  w-[50%] left-1 right-2 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <div className="flex flex-col justify-center items-center gap-4 px-[15%] ">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                                class="w-40 rounded-full border-2 border-gray-400" />
                            <div className="absolute  w-[50%] left-1 right-2 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <div className="flex flex-col justify-center items-center gap-4 px-[15%] ">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                                class="w-40 rounded-full border-2 border-gray-400" />
                            <div className="absolute w-[50%] left-1 right-2 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}

export default AboutUs