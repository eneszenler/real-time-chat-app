import React, { useEffect, useRef } from 'react'

function UseRef() {
    const inputRef = useRef();
    const divRef = useRef();

    const onFocusButton = () => {
        inputRef.current.focus();
        inputRef.current.placeholder = "Focus olundu"
        console.log(inputRef.current);
    };

    const onColorButton = () => {
        divRef.current.style.backgroundColor = "#997c7a"
    }

    useEffect(() => {
        console.log(inputRef.current);
    });


    return (
        <div ref={divRef} style={{ marginTop: 200 }}>
            <input type="text" ref={inputRef} placeholder="Değer Giriniz" />
            <br />
            <button onClick={onFocusButton} style={{ margin: 5 }}>Input'a Focus Ol</button>
            <button onClick={onColorButton}>Div'e BackgroundColor Ekle</button>
        </div>
    )
}

export default UseRef