
import FetchData from "./CustomHook";

export default function Card() {
      
    const {profile} =  FetchData();
   
   
    return (
        <>

            <div style={{ alignItems: "center", justifyContent: "center" }}>
                <img src={profile?.avatar_url} alt="userImg" />
                <h2>{profile?.login}</h2>
            </div>

        </>
    )
}



