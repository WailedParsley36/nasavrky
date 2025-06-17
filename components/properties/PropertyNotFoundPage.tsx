import React from "react";

export default function NotFoundPage() {
    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-100px)] bg-gray-50 px-4 py-12 sm:px-6 lg:px-8 animate-fade-in">
            <div className="max-w-md w-full space-y-8 text-center bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="text-primary text-6xl sm:text-7xl font-extrabold mb-4 animate-pop-in">
                    404
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                    Stránka nenalezena
                </h1>
                <p className="mt-2 text-lg text-gray-600">
                    Je nám líto, ale pozemek, který hledáte, se pravděpodobně přesunul, nebo neexistuje.
                </p>
                <div className="mt-8">
                    <a
                        href="/parcely" // Odkaz zpět na stránku s parcelami
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all duration-300 transform hover:scale-105"
                    >
                        <svg className="-ml-1 mr-3 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
                        </svg>
                        Zpět na přehled parcel
                    </a>
                </div>
            </div>
        </div>
    );
}
