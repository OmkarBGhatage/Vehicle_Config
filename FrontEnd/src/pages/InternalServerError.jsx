import { AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const InternalServerError = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 text-center">
                <div className="flex justify-center mb-6">
                    <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center">
                        <AlertTriangle className="w-7 h-7 text-red-600" />
                    </div>
                </div>

                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                    Internal Server Error
                </h1>

                <p className="text-gray-500 text-sm mb-6">
                    Something went wrong on our side.
                    Please try again later or contact support.
                </p>

                <div className="flex flex-col gap-3">
                    <button
                        onClick={() => navigate(-1)}
                        className="w-full py-3 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition"
                    >
                        Go Back
                    </button>

                    <button
                        onClick={() => navigate("/dashboard")}
                        className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                    >
                        Go to Dashboard
                    </button>
                </div>

                <p className="text-xs text-gray-400 mt-6">
                    Error Code: 500
                </p>
            </div>
        </div>
    );
};

export default InternalServerError;
