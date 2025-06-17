import { MoveUpRight } from 'lucide-react';
import castiImage from "../../assets/images/imgCasti.jpg";

const Colors = () => {
    const popularColors = [
        {id: 1, name: 'Black', code: 'bg-black'},
        {id: 2, name: 'White', code: 'bg-white border border-gray-300'},
        {id: 3, name: 'Blue', code: 'bg-blue-500'},
        {id: 4, name: 'Red', code: 'bg-red-500'},
        {id: 5, name: 'Green', code: 'bg-green-500'},
    ];

    return (
        <div className="flex flex-col gap-4 bg-[#F1F3F2] rounded-3xl">
            <div className="flex-1 flex flex-col justify-center p-6 rounded-lg bg-#E3E3E3 shadow-2xl border border-gray-400 m-4">
                <h2 className="text-2xl text-gray-800 mb-6 ">Popular Colors</h2>

                <div className="flex flex-wrap justify-center gap-5 mb-8">
                    {popularColors.map((color) => (
                        <div key={color.id} className="flex flex-col items-center space-y-2">
                            <div className={`w-12 h-12 rounded-full ${color.code} cursor-pointer`}/>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex-1 flex flex-col p-6 rounded-lg border border-gray-400 m-4 relative overflow-hidden">
                <div
                    className="absolute inset-15 bg-cover bg-center opacity-80 z-0 rounded-lg right-0 bottom-0"
                    style={{backgroundImage: `url(${castiImage})`}}
                />
                <h2 className="text-2xl text-gray-800 mb-4 text-left">New Gen </h2>
                <h2 className="text-2xl text-gray-800 mb-4 text-left">X-Bud</h2>

                <div className="flex-1 relative w-full h-full min-h-[200px]">

                    <button className="absolute left-0 bottom-0 p-2">
                        <MoveUpRight
                            className="border border-gray-300 rounded-xl w-15 h-15 flex items-center justify-center bg-white hover:bg-gray-100 transition-colors"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Colors;