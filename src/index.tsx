import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import React from "react";

<<<<<<< HEAD
createRoot(document.querySelector("#root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
=======
createRoot(document.querySelector("#root")!).render(<App />);
>>>>>>> f63ad55ec7f5289d99ae633dbf95157c9a7336d6
