import { useRef, useState } from "react";
import "../styles.css";

export default function LogButtonClicks() {
    const [count, setCount] = useState(1);
    const countRef = useRef(0);

    const handleState = () => {
        setCount(count + 1);
        console.log(`Clicked ${count} times`);
    };

    const handleRef = () => {
        countRef.current++;
        console.log(`Clicked ${countRef.current} times`);
    };

    console.log("I rendered!");

    return (
        <div className="App">
            <button onClick={handleRef}>Click Ref</button>
            <button onClick={handleState}>Click State</button>
        </div>
    );
}
