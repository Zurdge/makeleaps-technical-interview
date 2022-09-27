import {useEffect, useState} from 'react';

interface responseData {
    price: number;
    direction: 'up' | 'down';
    currentTime: string;
    previousTime: string;
}
export const ApiHook = () => {
    const [counter, setCounter] = useState<responseData>({
        price: 0,
        direction: 'down',
        currentTime: new Date().toTimeString(),
        previousTime: new Date().toTimeString(),
    });
    useEffect(() => {
        const timer = setInterval(() => {
            setCounter((prev) => {
                const price =
                    prev.price + Math.floor(-50 + Math.random() * 100);

                const direction = prev.price < price ? 'down' : 'up';
                const currentTime = new Date().toTimeString();
                const previousTime = prev.currentTime;
                return {
                    price,
                    direction,
                    currentTime,
                    previousTime,
                };
            });
        }, 1200);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return counter;
};
