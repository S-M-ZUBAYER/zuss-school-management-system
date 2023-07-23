import React, { useState } from 'react';

const AddClassInfo = () => {
    const [classNames, setClassNames] = useState([]);
    const [className, setClassName] = useState('');
    const [section, setSection] = useState('');
    const [shift, setShift] = useState('');


    console.log(classNames, section, shift);

    const addClassName = () => {
        if (className.trim() !== '') {
            setClassNames([...classNames, { name: className, sections: [] }]);
            setClassName('');
        }
    };

    const removeClassName = (index) => {
        const updatedClassNames = classNames.filter((_, i) => i !== index);
        setClassNames(updatedClassNames);
    };

    const addSection = (index) => {
        if (section.trim() !== '') {
            const updatedClassNames = [...classNames];
            updatedClassNames[index].sections.push({ name: section, shifts: [] });
            setClassNames(updatedClassNames);
            setSection('');
        }
    };

    const removeSection = (classIndex, sectionIndex) => {
        const updatedClassNames = [...classNames];
        updatedClassNames[classIndex].sections.splice(sectionIndex, 1);
        setClassNames(updatedClassNames);
    };

    const addShift = (classIndex, sectionIndex) => {
        if (shift.trim() !== '') {
            const updatedClassNames = [...classNames];
            updatedClassNames[classIndex].sections[sectionIndex].shifts.push(shift);
            setClassNames(updatedClassNames);
            setShift('');
        }
    };

    const removeShift = (classIndex, sectionIndex, shiftIndex) => {
        const updatedClassNames = [...classNames];
        updatedClassNames[classIndex].sections[sectionIndex].shifts.splice(
            shiftIndex,
            1
        );
        setClassNames(updatedClassNames);
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Class and Section Manager</h1>

            <div className="flex mb-4">
                <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-md mr-2 text-black"
                    placeholder="Enter ClassName"
                    value={className}
                    onChange={(e) => setClassName(e.target.value)}
                />
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-md"
                    onClick={addClassName}
                >
                    Add ClassName
                </button>
            </div>

            {classNames.map((item, classIndex) => (
                <div key={classIndex} className="border rounded-md p-4 mb-4">
                    <div className="flex justify-between mb-2">
                        <h2 className="text-lg font-semibold">{item.name}</h2>
                        <button
                            className="px-2 py-1 text-red-600"
                            onClick={() => removeClassName(classIndex)}
                        >
                            Remove
                        </button>
                    </div>

                    <div className="flex mb-4">
                        <input
                            type="text"
                            className="w-full px-4 py-2 border rounded-md mr-2 text-black"
                            placeholder="Enter Section"
                            value={section}
                            onChange={(e) => setSection(e.target.value)}
                        />
                        <button
                            className="px-4 py-2 bg-green-500 text-white rounded-md"
                            onClick={() => addSection(classIndex)}
                        >
                            Add Section
                        </button>
                    </div>

                    {item.sections.map((sectionItem, sectionIndex) => (
                        <div key={sectionIndex} className="mb-2">
                            <div className="flex mb-2">
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border rounded-md mr-2 text-black"
                                    placeholder="Enter Shift"
                                    value={shift}
                                    onChange={(e) => setShift(e.target.value)}
                                />
                                <button
                                    className="px-4 py-2 bg-green-500 text-white rounded-md"
                                    onClick={() => addShift(classIndex, sectionIndex)}
                                >
                                    Add Shift
                                </button>
                            </div>
                            {sectionItem.shifts.map((shiftItem, shiftIndex) => (
                                <div key={shiftIndex} className="flex justify-between">
                                    <p>{shiftItem}</p>
                                    <button
                                        className="px-2 py-1 text-red-600"
                                        onClick={() => removeShift(classIndex, sectionIndex, shiftIndex)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default AddClassInfo;
