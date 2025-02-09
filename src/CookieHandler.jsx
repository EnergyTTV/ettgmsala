import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const CookieHandler = () => {
    const [showConsent, setShowConsent] = useState(false);

    useEffect(() => {
        // Check if user has accepted or rejected cookies
        const consent = Cookies.get("cookieConsent");
        if (!consent) {
            setShowConsent(true); // Show consent popup if no preference exists
        }
    }, []);

    const acceptCookies = () => {
        Cookies.set("cookieConsent", "accepted", { expires: 365 }); // Store acceptance for 1 year
        setShowConsent(false);
    };

    const rejectCookies = () => {
        Cookies.set("cookieConsent", "rejected", { expires: 365 }); // Store rejection for 1 year
        setShowConsent(false);
    };

    return (
        showConsent && (
            <div className="fixed bottom-4 left-4 right-4 bg-black text-white p-4 rounded-md flex justify-between items-center">
                <p className="text-sm">This website uses cookies to enhance your experience.</p>
                <div className="flex space-x-3">
                    <button onClick={acceptCookies} className="bg-green-500 px-3 py-2 rounded text-white">
                        Accept
                    </button>
                    <button onClick={rejectCookies} className="bg-red-500 px-3 py-2 rounded text-white">
                        Reject
                    </button>
                </div>
            </div>
        )
    );
};

export default CookieHandler;
