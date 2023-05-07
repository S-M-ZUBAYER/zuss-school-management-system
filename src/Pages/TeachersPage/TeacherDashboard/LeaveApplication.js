import { useState } from "react";
import axios from 'axios';
import { useDropzone } from 'react-dropzone';



function LeaveApplication({ name, color }) {

    console.log(name)
    const [fontSize, setFontSize] = useState(16);
    const [fontFamily, setFontFamily] = useState("sans-serif");
    const [isBold, setIsBold] = useState(false);
    const [isItalic, setIsItalic] = useState(false);
    const [isUnderline, setIsUnderline] = useState(false);


    // part for upload img

    const [file, setFile] = useState(null);
    const [imageUrl, setImageUrl] = useState('');


    const uploadImage = async () => {
        try {
            const formData = new FormData();
            formData.append('image', file);
            formData.append('key', process.env.REACT_APP_imgbbKey);

            const response = await axios.post('https://api.imgbb.com/1/upload', formData);

            setImageUrl(response.data.data.url);
            console.log(imageUrl)
        } catch (error) {
            console.error(error);
        }
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: 'image/*',
        multiple: false,
        onDrop: (acceptedFiles) => {
            setFile(acceptedFiles[0]);
        },
    });


    const handleFontSizeChange = (event) => {
        setFontSize(event.target.value);
    };

    const handleFontFamilyChange = (event) => {
        setFontFamily(event.target.value);
    };

    const handleBoldClick = () => {
        setIsBold(!isBold);
    };

    const handleItalicClick = () => {
        setIsItalic(!isItalic);
    };

    const handleUnderlineClick = () => {
        setIsUnderline(!isUnderline);
    };

    return (
        <div className="h-screen bg-gray-100 flex flex-col">


            <div>
                <div {...getRootProps()} className="border-dashed border-2 p-4">
                    <input {...getInputProps()} />
                    {isDragActive ? (
                        <p>Drop the files here ...</p>
                    ) : (
                        <p>Drag and drop an image file here, or click to select a file</p>
                    )}
                </div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={uploadImage}
                    disabled={!file}
                >
                    Upload
                </button>
                {imageUrl && <img src={imageUrl} alt="Uploaded" />}
            </div>




            <div className="flex bg-white border-b border-gray-300 p-4">
                <div className="flex items-center mr-4">
                    <button
                        className={`mr-2 ${isBold ? "text-blue-600 font-bold" : "font-normal"
                            }`}
                        onClick={handleBoldClick}
                    >
                        B
                    </button>
                    <button
                        className={`mr-2 ${isItalic ? "text-blue-600 italic" : "not-italic"
                            }`}
                        onClick={handleItalicClick}
                    >
                        I
                    </button>
                    <button
                        className={`mr-2 ${isUnderline ? "text-blue-600 underline" : "no-underline"
                            }`}
                        onClick={handleUnderlineClick}
                    >
                        U
                    </button>
                </div>
                <div className="flex items-center mr-4">
                    <label htmlFor="font-size" className="mr-2">
                        Font Size:
                    </label>
                    <select
                        id="font-size"
                        className="border border-gray-400 rounded-md py-1 px-2"
                        value={fontSize}
                        onChange={handleFontSizeChange}
                    >
                        <option value="12">12</option>
                        <option value="14">14</option>
                        <option value="16">16</option>
                        <option value="18">18</option>
                        <option value="20">20</option>
                        <option value="24">24</option>
                        <option value="32">32</option>
                    </select>
                </div>
                <div className="flex items-center">
                    <label htmlFor="font-family" className="mr-2">
                        Font Family:
                    </label>
                    <select
                        id="font-family"
                        className="border border-gray-400 rounded-md py-1 px-2"
                        value={fontFamily}
                        onChange={handleFontFamilyChange}
                    >
                        <option value="sans-serif">Sans-serif</option>
                        <option value="serif">Serif</option>
                        <option value="monospace">Monospace</option>
                    </select>
                </div>
            </div>
            <div className="my-32 bg-white">
                <div className={`relative z-10 border-blue-500 border-dashed border-4 ${color} rounded-lg p-4 m-10`}>
                    <span class="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 text-gray-200 opacity-10 text-4xl font-bold">
                        {/* <img z-10 src="https://tse4.mm.bing.net/th?id=OIP.IhMJ0rAv6sBTVr5doQJHgAHaHa&pid=Api&P=0"></img> */}
                        <img z-10 src={imageUrl}></img>
                    </span>

                    <h1 className=" text-lg z-40 font-semibold text-yellow-900">{name}</h1>

                    <div
                        contentEditable
                        className={`flex-1 h-screen z-40 text-start p-4 text-${fontFamily} ${isBold ? "font-bold" : "font-normal"
                            } ${isItalic ? "italic" : "not-italic"} ${isUnderline ? "underline" : "not-underline"
                            }`}
                        style={{ fontSize: `${fontSize}px` }}
                    />
                </div>
            </div>
        </div>

    );
}

export default LeaveApplication;
