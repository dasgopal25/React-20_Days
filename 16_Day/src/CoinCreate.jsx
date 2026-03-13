import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchData } from "./SliceFile";
import CoinCart from "./CoinCart";

export default function CoinCreate() {

    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.Slice);

    useEffect(() => {
        dispatch(FetchData(10));
    }, [dispatch]);

    if (loading) {
        return <h1>Data is Loading...</h1>;
    }

    if (error) {
        return <h1>Error Occurred</h1>;
    }

    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
            {data.map((value) => (
                <CoinCart key={value.id} coin={value} />
            ))}
        </div>
    );
}