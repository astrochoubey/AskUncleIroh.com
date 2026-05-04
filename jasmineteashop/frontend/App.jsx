import Header from "./src/components/Header";
import InputBox from "./src/components/InputBox";
import ResponseBox from "./components/ResponseBox";

export default function App() {
  return (
    <div className="min-h-screen bg-amber-50 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-xl w-full">
        <Header />
        <InputBox />
        <ResponseBox />
        <Footer />
      </div>
    </div>
  );
}