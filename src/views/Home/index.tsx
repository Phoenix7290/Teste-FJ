const Home = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold text-center mb-8">Welcome to FJ Personal Gym</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
                    <ul className="list-disc list-inside">
                        <li>Personal Training</li>
                        <li>Group Classes</li>
                        <li>Nutrition Plans</li>
                        <li>Online Coaching</li>
                    </ul>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
                    <p>At FJ Personal Gym, we are dedicated to helping you achieve your fitness goals. Our experienced trainers and comprehensive programs are designed to cater to all fitness levels.</p>
                </div>
            </div>
            <div className="mt-8 text-center">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700">Join Now</button>
            </div>
        </div>
    );
}

export default Home;