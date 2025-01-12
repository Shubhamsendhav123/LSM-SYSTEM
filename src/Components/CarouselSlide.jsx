

function CarouselSlide({image, title , description , slideNumber , totalSlides}) {
    return (
        <div id={`slide${slideNumber}`} className="carousel-item relative w-full">
            <div className="flex flex-col justify-center items-center gap-4 px-[15%] ">
                <img
                    src={image}
                    className="w-40 rounded-full border-2 border-gray-800" />
                    <p className="text-xl text-gray-500">
                        {description}
                    </p>
                    <h3 className="text-2xl font-semibold"> {title}</h3>
                <div className="absolute w-[50%] left-1 right-1 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href={`#slide${(slideNumber == 1 ? totalSlides : (slideNumber-1))}`} className="btn btn-circle ">❮</a>
                    <a href={`#slide${(slideNumber )% totalSlides + 1}`} className="btn btn-circle hover:text-yellow-800">❯</a>
                </div>
            </div>
        </div>
    )
}

export default CarouselSlide;