import { useEffect, useState } from "react";

interface ContactPopupProps {
    onClose?: () => void;
}

export default function ContactPopup({ onClose }: ContactPopupProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
            setAnimate(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setAnimate(false);
        setTimeout(() => {
            setIsOpen(false);
            if (onClose) onClose();
        }, 300);
    };

    if (!isOpen) return null;

    return (
        <div
            className={`fixed inset-0 flex justify-center items-center z-50 transition-opacity duration-300 ${animate ? "opacity-100" : "opacity-0"
                }`}
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            onClick={handleClose}
        >
            <div
                className={`rounded-3xl p-8 sm:p-12 w-11/12 max-w-md shadow-2xl transform transition-all duration-300 ${animate ? "scale-100 opacity-100" : "scale-95 opacity-0"
                    }`}
                onClick={(e) => e.stopPropagation()}
                style={{
                    background: "var(--gold)", // Cream background
                    border: `2px solid var(--secondary)`, // Coral border
                    boxShadow: "0 20px 50px rgba(0,0,0,0.15)", // premium shadow
                }}
            >
                {/* Close Button */}
                <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold transition-colors duration-200"
                    onClick={handleClose}
                >
                    ✕
                </button>

                <h2
                    className="text-3xl font-bold mb-6 text-center"
                    style={{ color: "var(--primary)", letterSpacing: "0.5px" }}
                >
                    Let's Connect
                </h2>
                <form className="flex flex-col gap-4">
                    {["Your Name", "Your Email", "Your Phone (optional)"].map(
                        (placeholder, idx) => (
                            <input
                                key={idx}
                                type={placeholder.includes("Email") ? "email" : "text"}
                                placeholder={placeholder}
                                className="rounded-xl px-4 py-3 bg-white transition-all duration-300 focus:outline-none"
                                style={{
                                    border: `2px solid var(--secondary)`,
                                    color: "var(--text-dark)",
                                }}
                                onFocus={(e) =>
                                (e.currentTarget.style.boxShadow =
                                    "0 0 0 3px var(--accent)")
                                }
                                onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
                                required={placeholder !== "Your Phone (optional)"}
                            />
                        )
                    )}

                    <textarea
                        placeholder="Your Message"
                        className="rounded-xl px-4 py-3 h-28 resize-none bg-white transition-all duration-300 focus:outline-none"
                        style={{
                            border: `2px solid var(--secondary)`,
                            color: "var(--text-dark)",
                        }}
                        onFocus={(e) =>
                        (e.currentTarget.style.boxShadow =
                            "0 0 0 3px var(--accent)")
                        }
                        onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
                        required
                    />

                    <button
                        type="submit"
                        className="py-3 rounded-full font-semibold text-lg transition-all duration-300 shadow-md"
                        style={{
                            backgroundColor: "var(--primary)",
                            color: "var(--text-light)",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.backgroundColor = "var(--accent)";
                            e.currentTarget.style.boxShadow =
                                "0 8px 20px rgba(164,92,64,0.4)";
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor = "var(--primary)";
                            e.currentTarget.style.boxShadow =
                                "0 4px 12px rgba(0,0,0,0.1)";
                        }}
                    >
                        Send Message
                    </button>
                </form>

            </div>
        </div>
    );
}
