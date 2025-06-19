
const ProductSections = () => {
    const popularColors = [
        {id: 1, name: 'Blue', code: 'bg-radial-[at_25%_25%] from-white to-blue-600 to-75%'},
        {id: 2, name: 'Orange', code: 'bg-radial-[at_25%_25%] from-white to-orange-600 to-75%'},
        {id: 3, name: 'Green', code: 'bg-radial-[at_25%_25%] from-white to-green-600 to-75%'},
        {id: 4, name: 'Red', code: 'bg-radial-[at_25%_25%] from-white to-red-600 to-75%'},
        {id: 5, name: 'Blue', code: 'bg-radial-[at_25%_25%] from-white to-blue-400 to-75% '},
    ];

    return (
        <div className="flex flex-col w-full gap-4 rounded-4xl bg-white ml-4 mr-4">
            <div className="flex-1 flex flex-col justify-center p-6 rounded-lg">
                <h2 className="text-2xl text-gray-800 mb-6">Popular Colors</h2>

                <div className="flex flex-wrap justify-center gap-8">
                    {popularColors.map((color) => (
                        <div key={color.id} className="flex flex-col items-center space-y-2 ">
                            <div className={`w-12 h-12 rounded-full ${color.code} cursor-pointer border-9 border-gray-200`}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductSections;