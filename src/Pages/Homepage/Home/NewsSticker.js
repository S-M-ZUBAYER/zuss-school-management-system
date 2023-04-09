import React, { useRef, useEffect } from 'react';
import classNames from 'classnames';

const NewsTicker = ({ items }) => {
    const newsRef = useRef(null);

    useEffect(() => {
        const newsEl = newsRef.current;
        const newsWidth = newsEl.offsetWidth;
        const parentWidth = newsEl.parentElement.offsetWidth;
        let animation;

        if (newsWidth > parentWidth) {
            const animationDuration = newsWidth / 50;
            animation = newsEl.animate(
                [
                    { transform: 'translateX(0)' },
                    { transform: `translateX(-${newsWidth}px)` },
                ],
                {
                    duration: animationDuration * 1000,
                    iterations: Infinity,
                    playbackRate: 1,
                }
            );
        }

        return () => {
            if (animation) {
                animation.cancel();
            }
        };
    }, []);

    return (
        <div className="bg-blue-800 text-white px-4 py-2 text-sm">
            <div
                className={classNames(
                    'inline-block whitespace-nowrap overflow-hidden',
                    {
                        'hover:cursor-pointer': items.length > 1,
                    }
                )}
                ref={newsRef}
            >
                {items.map((item, index) => (
                    <span key={index} className="px-2">
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default NewsTicker;
