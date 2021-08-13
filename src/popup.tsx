import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";

const Popup = () => {
    const [count, setCount] = useState(0);
    const [currentURL, setCurrentURL] = useState<string>();

    useEffect(() => {
        chrome.browserAction.setBadgeText({text: count.toString()});
    }, [count]);

    useEffect(() => {
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            setCurrentURL(tabs[0].url);
        });
    }, []);


    return (
        <>
            <div style={{width: 600, height: 300}}>
                <h1>Login 2Passwd</h1>
                <input type="text" placeholder={"Email"}/>
                <input type="text" placeholder={"Password"}/>
                <input type="text" placeholder={"Service Addr"}/>
                <button>Login</button>
            </div>
        </>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <Popup/>
    </React.StrictMode>,
    document.getElementById("root")
);
