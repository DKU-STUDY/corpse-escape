import { Setting } from "./components";
import { initSettingState, SettingContext, settingReducer } from "./context";
import { useReducer } from "react";

function App() {
  const [state, dispatch] = useReducer(settingReducer, initSettingState);
  return (
    <SettingContext.Provider value={{ ...state, dispatch }}>
      <div className="App">
        <Setting />
      </div>
    </SettingContext.Provider>
  );
}

export default App;
