export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 bg-gray-100 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          🚧 Website Under Construction 🚧
        </h1>
      </div>
      <div className="bg-gray-800 text-gray-300 text-center py-2">
        <p>
          &copy; {new Date().getFullYear()} Irakli Khizanishvili. All rights
          reserved.
        </p>
      </div>
    </div>
  );
}
