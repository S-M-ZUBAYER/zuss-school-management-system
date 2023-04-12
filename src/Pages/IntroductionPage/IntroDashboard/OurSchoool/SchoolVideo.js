import React from 'react';
import ReactPlayer from 'react-player';

function Video() {
    return (
        <div className="my-8">
            <h2 className="text-2xl font-bold mb-4">Our School Video</h2>
            <div className="w-10/12 rounded-lg mx-auto">
                <ReactPlayer url="https://youtu.be/J8YdkE9stzA" controls={true} width="100%" height="400px" />
            </div>


        </div>
    );
}

export default Video;
