"use client";
import React, { useState } from "react";

const Bulb: React.FC = () => {
    const [isOn, setIsOn] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
            <div className="relative flex items-center justify-center">
                {isOn && (
                    <div className="absolute w-36 h-36 rounded-full bg-yellow-300 blur-3xl opacity-50"></div>
                )}
                <div
                    className={`w-32 h-32 rounded-full bg-gradient-to-b ${isOn
                        ? "from-yellow-300 via-yellow-200 to-yellow-500"
                        : "from-gray-400 to-gray-500"
                        } shadow-md ${isOn ? "shadow-yellow-500" : "shadow-gray-500"
                        } relative`}
                >
                    <div
                        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 ${isOn ? "bg-yellow-500" : "bg-gray-700"
                            } rounded-full blur-sm`}
                    ></div>
                    <div
                        className={`absolute top-[55%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-2 h-12 ${isOn ? "bg-yellow-500" : "bg-gray-700"
                            }`}
                    ></div>
                </div>
            </div>

            <button
                onClick={() => setIsOn(!isOn)}
                className="mt-8 px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition"
            >
                {isOn ? "Turn Off" : "Turn On"}
            </button>
        </div>
    );
};

export default Bulb;
