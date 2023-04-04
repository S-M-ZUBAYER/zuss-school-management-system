import React, { useState } from 'react';

const LeaveApplication = () => {
    const [content, setContent] = useState('');

    const handleContentChange = (event) => {
        setContent(event.target.innerHTML);
    };

    const handleFontSizeChange = (event) => {
        document.execCommand('fontSize', false, event.target.value);
    };

    const handleFontFamilyChange = (event) => {
        document.execCommand('fontName', false, event.target.value);
    };

    const handleColorChange = (event) => {
        document.execCommand('foreColor', false, event.target.value);
    };

    const handleBold = () => {
        document.execCommand('bold', false, null);
    };

    const handleItalic = () => {
        document.execCommand('italic', false, null);
    };

    const handleUnderline = () => {
        document.execCommand('underline', false, null);
    };

    const handleAlignLeft = () => {
        document.execCommand('justifyLeft', false, null);
    };

    const handleAlignCenter = () => {
        document.execCommand('justifyCenter', false, null);
    };

    const handleAlignRight = () => {
        document.execCommand('justifyRight', false, null);
    };
    return (
        <div>
            <h1 className="text-lg font-semibold text-red-300 my-8">
                Please use this filed to create your leave application form:-
            </h1>


            <div>
                <div>
                    <select onChange={handleFontSizeChange}>
                        <option value="">Font Size</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                    </select>
                    <select onChange={handleFontFamilyChange}>
                        <option value="">Font Family</option>
                        <option value="Arial">Arial</option>
                        <option value="Verdana">Verdana</option>
                        <option value="Helvetica">Helvetica</option>
                        <option value="Times New Roman">Times New Roman</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Courier New">Courier New</option>
                        <option value="Lucida Console">Lucida Console</option>
                    </select>
                    <input type="color" onChange={handleColorChange} />
                    <button onClick={handleBold}>Bold</button>
                    <button onClick={handleItalic}>Italic</button>
                    <button onClick={handleUnderline}>Underline</button>
                    <button onClick={handleAlignLeft}>Align Left</button>
                    <button onClick={handleAlignCenter}>Align Center</button>
                    <button onClick={handleAlignRight}>Align Right</button>
                </div>
                <div
                    contentEditable="true"
                    onInput={handleContentChange}
                    dangerouslySetInnerHTML={{ __html: content }}
                ></div>
            </div>

        </div>
    );
};

export default LeaveApplication;