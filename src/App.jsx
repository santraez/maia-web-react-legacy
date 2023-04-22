import { AppProvider } from "./context/AppContext";
import AppRouter from "./routes/AppRouter";

const App = () => {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
};

export default App;