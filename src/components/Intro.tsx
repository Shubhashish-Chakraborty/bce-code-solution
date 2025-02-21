export const Intro = () => {
    return (
        <div className="text-center">
            <h1 className="text-4xl text-white sm:text-5xl md:text-6xl lg:text-6xl font-bold tracking-tight max-w-4xl mx-auto leading-tight">Struggling with practical exam codes? {" "} 
                <span onClick={() => {window.open("https://www.youtube.com/watch?v=DIJW7rWPkSw")}} className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent decoration-TextCap2 cursor-pointer hover:underline">Mai huu n...</span>
            </h1>
        </div>
    )
}