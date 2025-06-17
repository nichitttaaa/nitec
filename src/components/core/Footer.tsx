import {Facebook, Instagram, Twitter} from "lucide-react"

const Footer = () => {
    return (
        <div className="w-screen h-20  px-4 py-2 flex flex-col bg-[#E4EBED] items-center gap-2">
            <div>
                <span>FIND US ON <Facebook className="inline" />
                    <Instagram className="inline"/>
                    <Twitter className="inline" />
                </span>
            </div>
            <div className="space-y-2 gap-2">
                <label htmlFor="input">Subscribe for news</label>
                <input type="text" placeholder="Your Email Address" className="p-1 border-black border-1 rounded-2xl" />
            <button className="rounded-2xl bg-yellow-500 cursor-pointer hover:border-black border border-transparent transition-all">Subscribe</button>
            </div>
            

        </div>
    )
}

export default Footer