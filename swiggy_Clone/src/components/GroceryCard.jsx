
export default function GroceryCard({ foodData }) {
    return (
        <>
            <div className="inline-block">
                <a href={foodData?.action?.link}>
                    <img className="w-36 h-45 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + foodData?.imageId} />
                   
                </a>
                 <h2>{foodData?.action?.text}</h2>
            </div>
        </>
    )
}