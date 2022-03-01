import React, { useEffect, useState } from 'react'

function Render() {
    const logThis = () => { };

    const [funcRef, setFuncRef] = useState(() => logThis);

    const [count, setCount] = useState(0);

    useEffect(() => {
        setFuncRef((state) => logThis);
        console.log(funcRef === logThis);
        console.log({ funcRef });
        console.log({ logThis });
    }, [count])

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Increase Ref Value</button>
        </div>
    )
}

export default Render