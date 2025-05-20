import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/layout";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col overflow-hidden bg-white ">
      { }
      <h1>Header Component</h1>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App;
