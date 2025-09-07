import { useEffect, useState } from "react";
import { useParams } from "react-router"


export default function Card() {

    const [profile, setProfile] = useState(null);
    let params = useParams();

    async function dataFatch() {
        const respons = await fetch(`https://api.github.com/users/${params.name}`);
        const data = await respons.json();

        setProfile(data)
    }
    useEffect(() => {
        dataFatch();
    }, [])
    return (
        <>

            <div style={{ alignItems: "center", justifyContent: "center" }}>
                <img src={profile?.avatar_url} alt="userImg" />
                <h2>{profile?.login}</h2>
            </div>

        </>
    )
}



