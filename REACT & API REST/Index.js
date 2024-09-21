import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Header name={"Paulo"} number={10} props={Wololo} />
        <Header name={"Maria"} number={1000} props={"MR"} />
        <App />
    </React.StrictMode>
);

//If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Laern more: http://bitly/CRA-vitals
reportWebVitals();
