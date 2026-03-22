export default function Shimmer2() {
  return (
    <>
      {Array(8).fill("").map((_, i) => (
        <div
          key={i}
          className="flex justify-between container mx-auto border-b py-6 animate-pulse"
        >
          <div className="w-[70%] space-y-3">
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            <div className="h-3 bg-gray-300 rounded w-1/3"></div>
            <div className="h-3 bg-gray-300 rounded w-full"></div>
          </div>

          <div className="w-32 h-24 bg-gray-300 rounded-lg"></div>
        </div>
      ))}
    </>
  );
}