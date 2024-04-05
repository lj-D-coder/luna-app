import React from 'react';

function AppLink() {
    return (
        <div className="h-[300px] content-center bg-gradient-to-r from-blue-500 via-blue-300 via-white to-blue-500  text-white py-8">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="text-center md:text-left mb-10 md:mb-0">
                    <div className="text-2xl md:text-3xl lg:text-4xl">Download Our App Now!</div>
                </div>
                <div className="flex flex-col md:flex-row md:space-x-4">
                    <a
                        href="https://play.google.com/store/apps/details?id=your-app-id"
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
                        href="https://apps.apple.com/us/app/your-app-name/idyour-app-id"
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
