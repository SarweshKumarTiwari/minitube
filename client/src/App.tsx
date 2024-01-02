import WebRoutes from "./routes/WebRoutes";
import AuthContextProvider from "./contexts/AuthContext/AuthContextProvider";
import { QueryClient, QueryClientProvider } from "react-query";
const query=new QueryClient();
function App() {
  return (
    <QueryClientProvider client={query}>
    <AuthContextProvider>
      <WebRoutes />
    </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
