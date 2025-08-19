import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100">
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome to <span className="text-blue-600">PadhyaSoftware 🚀</span>
        </h1>
      </div>
    </>
  );
}

export default App;
