import React, { useEffect }  from "react";
import "../App.css";

const ContactUs = (props) => {
    useEffect(() => {
        document.title = "Contact Us"; // Set the document title here
    }, []);
    const textColor = props.mode === "light" ? "black" : "white";
    return (
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
            <h2 style={{ color: textColor }}>Contact Us</h2>
            <form style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <label style={{ color: textColor }}>
                    Name:
                    <input
                        type="text"
                        name="name"
                        required
                        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
                    />
                </label>
                <label style={{ color: textColor }}>
                    Email:
                    <input
                        type="email"
                        name="email"
                        required
                        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
                    />
                </label>
                <label style={{ color: textColor }}>
                    Message:
                    <textarea
                        name="message"
                        required
                        style={{ width: "100%", padding: "8px", height: "100px" }}
                    ></textarea>
                </label>
                <button
                    type="submit"
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#007BFF",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default ContactUs;
