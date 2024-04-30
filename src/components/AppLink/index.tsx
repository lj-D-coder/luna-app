import React from 'react';

function AppLink() {
    return (
        <div style={{
            background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11), rgba(14, 165, 233, 0.41), rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4))",
            display: "flex",
            justifyContent: "center", // horizontally center
            alignItems: "center", // vertically center
            height: "300px",
            color: "#2b2b2b", // Changed text color for better visibility
        }}>
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="text-center md:text-left mb-10 md:mb-0">
                    <div className="text-2xl md:text-3xl lg:text-4xl">App comming soon...</div>
                </div>
                <div className="flex flex-col md:flex-row md:space-x-4">
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center bg-white text-gray-800 py-3 px-6 rounded-full font-semibold text-sm md:text-base lg:text-lg transition duration-300 hover:bg-gray-300 mb-4 md:mb-0"
                    >
                        <span className="mr-2">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/732/732208.png"
                                alt="Google Play"
                                className="h-8 md:h-10 lg:h-12"
                            />
                        </span>
                        Google Play
                    </a>
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center bg-white text-gray-800 py-3 px-6 rounded-full font-semibold text-sm md:text-base lg:text-lg transition duration-300 hover:bg-gray-300"
                    >
                        <span className="mr-2">
                            <img
                                src=" https://iili.io/JNgeNqB.png"
                                alt="App Store"
                                className="h-8 md:h-10 lg:h-12"
                            />
                        </span>
                        App Store
                    </a>
                </div>
            </div>
        </div>
    );
}

export default AppLink;
