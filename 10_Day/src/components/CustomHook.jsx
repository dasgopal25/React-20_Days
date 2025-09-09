import { useState,useEffect } from "react";
import { useParams } from "react-router";
export default function FetchData() {
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

    return {profile}
} 

