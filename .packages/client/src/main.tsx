import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { initSettingState, SettingContext, settingReducer } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <SettingContext.Provider
      value={{
        ...initSettingState,
        reducer: settingReducer,
      }}
    >
      <App />
    </SettingContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
