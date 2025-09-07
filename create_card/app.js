import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Card() {
    const [profile, setProfile] = useState(null);
    const [name, setName] = useState("");
    const [inputName, setInputName] = useState("");

    async function dataFetch() {
        if (!name) return; // Avoid fetching if name is empty
        try {
            const response = await fetch(`https://api.github.com/users/${name}`);
            if (!response.ok) {
                throw new Error("User not found");
            }
            const data = await response.json();
            setProfile(data);
        } catch (error) {
            console.error(error);
            setProfile(null);
        }
    }

    useEffect(() => {
        dataFetch();
    }, [name]);

    return (
        <>
            <div className="input-container" style={{ marginBottom: "20px" }}>
                <input
                    type="text"
                    className="my-input"
                    value={inputName}
                    onChange={(e) => setInputName(e.target.value)}
                    placeholder="Enter GitHub username"
                />
                <button onClick={() => setName(inputName)}>Search</button>
            </div>

            {profile ? (
                <div className="card" style={{
                    backgroundImage: `url(${profile.avatar_url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "300px",
                    height: "400px",
                    borderRadius: "12px",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textShadow: "1px 1px 3px rgba(0,0,0,0.7)"
                }}>
                    <div className="content" style={{ textAlign: "center" }}>
                        <h4 className="text">ID: {profile.id}</h4>
                        <h2 className="text">{profile.name}</h2>
                        <h3 className="text">@{profile.twitter_username || "N/A"}</h3>
                    </div>
                </div>
            ) : (
                <p>No profile found</p>
            )}
        </>
    );
}

function App() {
    return (
        <div className="all" style={{ textAlign: "center", marginTop: "20px" }}>
            <Card />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
