import WebRoutes from "./routes/WebRoutes";
import AuthContextProvider from "./contexts/AuthContext/AuthContextProvider";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import {store} from "../src/app/store"
const query = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={query}>
      <Provider store={store}>
        <AuthContextProvider>
          <WebRoutes />
        </AuthContextProvider>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
