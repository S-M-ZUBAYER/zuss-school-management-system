import React from 'react';

const Activities = () => {

    const arr = [
        {
            name: "Sport 2013",
            date: "12 jul 2013", pic: "ksjdlkflsajldkfjaldsjfs", pic: "ksjdlkflsajldkfjaldsjfs",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed deleniti architecto dolor amet vel quidem distinctio accusantium eos voluptatem autem delectus dolorem magnam mollitia veritatis suscipit esse, cupiditate dolorum? Eveniet."
        },
        , {
            name: "Sport 2013",
            date: "12 jul 2013", pic: "ksjdlkflsajldkfjaldsjfs",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed deleniti architecto dolor amet vel quidem distinctio accusantium eos voluptatem autem delectus dolorem magnam mollitia veritatis suscipit esse, cupiditate dolorum? Eveniet."
        },
        {
            name: "Sport 2013",
            date: "12 jul 2013", pic: "ksjdlkflsajldkfjaldsjfs",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed deleniti architecto dolor amet vel quidem distinctio accusantium eos voluptatem autem delectus dolorem magnam mollitia veritatis suscipit esse, cupiditate dolorum? Eveniet."
        },
        {
            name: "Sport 2013",
            date: "12 jul 2013", pic: "ksjdlkflsajldkfjaldsjfs",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed deleniti architecto dolor amet vel quidem distinctio accusantium eos voluptatem autem delectus dolorem magnam mollitia veritatis suscipit esse, cupiditate dolorum? Eveniet."
        },
        {
            name: "Sport 2013",
            date: "12 jul 2013", pic: "ksjdlkflsajldkfjaldsjfs",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed deleniti architecto dolor amet vel quidem distinctio accusantium eos voluptatem autem delectus dolorem magnam mollitia veritatis suscipit esse, cupiditate dolorum? Eveniet."
        },]


    return (
        <div className="grid grid-cols-3 gap-4">
            {
                arr.map(element => {
                    return <div className="max-w-lg border-2 rounded-lg m-6 p-4 shadow-md text-white dark:bg-gray-900  dark:text-gray-100">
                        <div className="flex justify-between pb-4 border-bottom">
                            <div className="flex items-center">
                                <a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-100">School Name</a>
                            </div>

                        </div>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <img src="https://source.unsplash.com/random/480x360/?4" alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                            </div>
                            <div className="space-y-2">
                                <a rel="noopener noreferrer" href="#" className="block">
                                    <h3 className="text-xl font-semibold dark:text-violet-400">Facere ipsa nulla corrupti praesentium pariatur architecto</h3>
                                </a>
                                <p className="leading-snug dark:text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.</p>
                            </div>
                        </div>
                    </div>

                })
            }
        </div>

    );
};

export default Activities;