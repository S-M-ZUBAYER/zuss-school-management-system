import React from 'react';
import ImageUpload from './ImageUploadForCalender/ImageUpload';
import CalendarRangeInputFiled from './CalenderInputField/CalenderInputField';
import CalenderEventInputField from './CalenderEventInputField/CalenderEventInputField';
import Calendar from './GenerateCalender/GenerateCalender';

const AcademicCalender = () => {
    return (
        <div>
            <ImageUpload></ImageUpload>
            <CalendarRangeInputFiled></CalendarRangeInputFiled>
            <CalenderEventInputField></CalenderEventInputField>
            <Calendar></Calendar>
        </div>
    );
};

export default AcademicCalender;