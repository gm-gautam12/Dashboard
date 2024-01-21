import Login from "./utils/Login";
import Home from "./utils/Home";
import {Route,Routes} from "react-router-dom";

/**
 * The App component renders a div with two routes, one for the Login component and one for the Home
 * component.
 * @returns The App component is returning a div element with the class name "w-full overflow-hidden".
 * Inside the div, there is a Routes component that contains two Route components. The first Route
 * component has a path of "/" and renders a Login component. The second Route component has a path of
 * "/home" and renders a Home component.
 */
const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
