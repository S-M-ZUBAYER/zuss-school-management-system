import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ImageUploader = () => {
    const [image, setImage] = useState(null);
    const [newClassName, setNewClassName] = useState([]);
    const [classNames, setClassNames] = useState([]);
    const [selectedClassName, setSelectedClassName] = useState('');
    const [newSection, setNewSection] = useState('');
    const [newShift, setNewShift] = useState('');
    const [sections, setSections] = useState({});

    const handleFileUpload = (acceptedFiles) => {
        // Handle file upload logic
    };

    const handleInputChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            handleFileUpload([file]);
        }
    };

    const handleAddClass = () => {
        if (newClassName.trim() === '') {
            toast.error('Please enter a class name.');
            return;
        }

        setClassNames((prevClassNames) => [...prevClassNames, newClassName]);
        setSections((prevSections) => ({
            ...prevSections,
            [newClassName]: [],
        }));
        setNewClassName('');
    };

    const handleAddSection = () => {
        if (!selectedClassName || newSection.trim() === '') {
            toast.error('Please select a class and enter a section name.');
            return;
        }

        setSections((prevSections) => ({
            ...prevSections,
            [selectedClassName]: [
                ...prevSections[selectedClassName],
                { section: newSection, shifts: [] },
            ],
        }));
        setNewSection('');
    };

    const handleAddShift = (sectionIndex) => {
        if (!selectedClassName || newShift.trim() === '') {
            toast.error('Please select a class, section, and enter a shift name.');
            return;
        }

        setSections((prevSections) => {
            const updatedSections = { ...prevSections };
            const section = updatedSections[selectedClassName][sectionIndex];
            section.shifts = [...section.shifts, newShift];
            return updatedSections;
        });
        setNewShift('');
    };

    return (
        <div className="container mx-auto p-4">
            <div className="mb-4">
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleInputChange}
                    className="mb-2"
                />
                {image && (
                    <div>
                        <img src={image} alt="Uploaded" className="max-w-full h-auto" />
                    </div>
                )}
            </div>

            <div className="mb-4">
                <input
                    className="text-black mr-2 px-2 py-1 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                    type="text"
                    placeholder="Enter class name"
                    value={newClassName}
                    onChange={(e) => setNewClassName(e.target.value)}
                />
                <button
                    onClick={handleAddClass}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
                >
                    Add Class
                </button>
            </div>

            <div>
                <h3 className="mb-2">Class Names:</h3>
                <ul className="list-disc ml-6">
                    {classNames.map((className) => (
                        <li key={className} className="mb-4">
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="selectedClassName"
                                    value={className}
                                    onChange={(e) => setSelectedClassName(e.target.value)}
                                    className="mr-2"
                                />
                                {className}
                            </label>
                            {selectedClassName === className && (
                                <div className="ml-6">
                                    <input
                                        type="text"
                                        placeholder="Enter section"
                                        value={newSection}
                                        onChange={(e) => setNewSection(e.target.value)}
                                        className="mr-2 px-2 py-1 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                                    />
                                    <button
                                        onClick={handleAddSection}
                                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
                                    >
                                        Add Section
                                    </button>
                                    <ul className="list-disc ml-6">
                                        {sections[className]?.map((section, sectionIndex) => (
                                            <li key={sectionIndex} className="mb-4">
                                                <label className="inline-flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        onChange={() => { }}
                                                        className="mr-2"
                                                    />
                                                    {section.section}
                                                </label>
                                                <div className="ml-6">
                                                    <input
                                                        type="text"
                                                        placeholder="Enter shift"
                                                        value={newShift}
                                                        onChange={(e) => setNewShift(e.target.value)}
                                                        className="mr-2 px-2 py-1 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                                                    />
                                                    <button
                                                        onClick={() => handleAddShift(sectionIndex)}
                                                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
                                                    >
                                                        Add Shift
                                                    </button>
                                                    <ul className="list-disc ml-6">
                                                        {section.shifts.map((shift, shiftIndex) => (
                                                            <li key={shiftIndex}>{shift}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ImageUploader;
