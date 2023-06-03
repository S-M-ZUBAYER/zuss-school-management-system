import React from 'react';
import ImageUpload from './ImageUploadForCalender/ImageUpload';
import Calendar from './GenerateCalender/GenerateCalender';

const AcademicCalender = () => {
    return (
        <div>
            <ImageUpload></ImageUpload>
            <Calendar></Calendar>
        </div>
    );
};

export default AcademicCalender;