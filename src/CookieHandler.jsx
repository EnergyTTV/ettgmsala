import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const CookieHandler = () => {
    const [showConsent, setShowConsent] = useState(false);
    const [userChoice, setUserChoice] = useState(null);

    useEffect(() => {
        const consent = Cookies.get("cookieConsent");
        if (!consent) {
            setShowConsent(true);
        } else {
            setUserChoice(consent);
        }
    }, []);

    const acceptCookies = () => {
        Cookies.set("cookieConsent", "accepted", { expires: 365 });
        setShowConsent(false);
        setUserChoice("accepted");
    };

    const rejectCookies = () => {
        Cookies.set("cookieConsent", "rejected", { expires: 365 });
        setShowConsent(false);
        setUserChoice("rejected");
    };

    const resetCookies = () => {
        Cookies.remove("cookieConsent");
        setShowConsent(true);
        setUserChoice(null);
    };

    return (
        <>
            {/* Cookie Consent Popup (Only shown if no choice is made) */}
            {showConsent && (
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
            )}

            {/* Settings Button (Only visible after choice is made) */}
            {userChoice && (
                <button
                    onClick={resetCookies}
                    className="fixed bottom-4 right-4 bg-blue-500 text-white px-3 py-2 rounded-md"
                >
                    Change Cookie Preferences
                </button>
            )}
        </>
    );
};

export default CookieHandler;