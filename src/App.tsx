import Navbar from "./components/Navbar";
import {PublicRoutes} from "./routes";

function App() {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="w-2/3 mx-auto">
        <PublicRoutes />
      </div>
    </div>
  );
}

export default App;
