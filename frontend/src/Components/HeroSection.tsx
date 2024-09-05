const HeroSection = () => {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20">
            <h2 className="text-3xl lg:text-6xl text-center mt-6 tracking-wide">
                Your <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">secure</span> and <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">trusted</span> budgeting app
            </h2>
            <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
                Take control of your finances, achieve your goals, and enjoy peace of mind with Bloom. Whether you’re looking to save more, spend wisely, or just gain a clearer picture of your finances, Bloom is here to help you every step of the way!
            </p>
            <div className="flex justify-center my-10">
                <a href="#" className="bg-gradient-to-r from-green-500 to-green-800 py-3 px-4 mx-3 rounded-md">Get started</a>

                <a href="#" className="py-3 px-4 mx-3 rounded-md border">Learn more</a>
            </div>
        </div>
    )
}

export default HeroSection;