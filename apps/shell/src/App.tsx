import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/AppLayout";
import { Home } from "./pages/Home";
import RemoteEventDemo from "./pages/RemoteEventDemo";
import { ScamChecker } from "./pages/ScamChecker";

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scam-checker" element={<ScamChecker />} />
        <Route path="/remote-events-demo" element={<RemoteEventDemo />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
