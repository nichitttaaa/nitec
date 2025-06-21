
const LoginPage = () =>{
  
    return(
 <div className="absolute inset-0 bg-cover bg-center flex items-center justify-center px-4"
 style={{backgroundImage: 'url("/src/assets/images/loginImage.png")'}}>
    <div className="bg-white/10 bg-opacity-50 backdrop-blur-md rounded-xl p-6 sm:p-8 w-full 
    max-w-md shadow-2xl border border-white/20">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Login</h2>

        <form className="space-y-4">
             <input type="Email" placeholder="Email" className="w-full px-4 py-2 bg-transparent
            border border-gray-300 rounded text-while placegolder-gray-400 focus: outline-none focus:ring-2
            focus: ring-green-500" />
             <input type="password" placeholder="Password"  className="w-full px-4 py-2 bg-transparent
            border border-gray-300 rounded text-while placegolder-gray-400 focus: outline-none focus:ring-2
            focus: ring-green-500" />
            <button type="submit" className="w-full py-2 bg-black text-white rounded-full border border-white 
            hover:bg-blue-500 active: bg-cyan-400 transition-colors duration-200">Login</button>
        </form>
        <div className="text-center text-while mt-4">
            <span className="block">OR</span>
            <a href="#" className="text-sm hower:underline">SignupPage</a>
        </div>
    </div>
 </div>

 
    )
}
export default LoginPage