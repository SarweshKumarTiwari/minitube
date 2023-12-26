import WebRoutes from "./routes/WebRoutes";
import AuthContextProvider from "./contexts/AuthContext/AuthContextProvider";
function App() {
  return (
    <AuthContextProvider>
      <WebRoutes />
    </AuthContextProvider>
  );
}

export default App;
