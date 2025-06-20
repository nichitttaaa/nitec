const Register = () => {
    return (
        <div className="min-h-screen w-full bg-gradient-to-b from-blue-900 to-blue-300 text-white flex p-8">
            {/* Left Section - JOIN US and tagline */}
            <div className="w-1/2 flex flex-col justify-center items-center pr-12">
                <div>
                    <h1 className="text-5xl font-bold mb-6">    JOIN US</h1>
                    <p className="text-2xl mb-2">Making your dream music come true</p>
                    <p className="text-2xl font-semibold">stay with Sequios Sounds!</p>
                    <button className="mb-12 text-2xl pt-10 font-bold hover:text-blue-300 transition-colors">
                        About Us ↓
                    </button>
                </div>
            </div>

            <div className="w-1/2 flex flex-col justify-center">
                <div className="max-w-md">
                    <div>
                        <h3 className="text-2xl font-bold mb-8">Create your account</h3>

                        <div className="space-y-6 mb-10">
                            {['NAME', 'Username', 'Email', 'Password'].map((label) => (
                                <div key={label}>
                                    <label className="block text-lg mb-2">{label}</label>
                                    <input
                                        type={label === 'Password' ? 'password' : label === 'Email' ? 'email' : 'text'}
                                        className="w-full bg-transparent border-b-2 border-white focus:outline-none focus:border-blue-300 py-3"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <button className="text-blue-900 hover:text-blue-200 font-semibold text-lg">
                                Log in here
                            </button>
                            <button className="bg-blue-900 hover:bg-blue-700 px-8 py-3 rounded-full font-semibold text-lg">
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;