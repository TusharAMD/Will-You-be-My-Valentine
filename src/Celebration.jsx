import { useEffect } from 'react';
import confetti from 'canvas-confetti';

function Celebration({ name }) {
    useEffect(() => {
        // Launch confetti on mount
        const duration = 5 * 1000;
        const end = Date.now() + duration;

        const frame = () => {
            confetti({
                particleCount: 3,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#ff69b4', '#ff1493', '#ffffff']
            });
            confetti({
                particleCount: 3,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#ff69b4', '#ff1493', '#ffffff']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        };
        frame();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] animate-bounce">
            <h1 className="text-5xl font-extrabold text-center text-pink-600 my-4 drop-shadow-md">
                YAY! Happy Valentine's Day, {name}! 🥳
            </h1>
            <img 
                src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzg2YTFkamZsMnJhMHk3NnZjY3dnYXlxZ21jN3lzdG5zazFrbG9odSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BOPz50G5Cf2Y5XS9Ba/giphy.gif" 
                alt="Cute bear heart" 
                className="rounded-lg shadow-lg my-4 w-64"
            />
            <h3 className="text-2xl font-medium text-center text-pink-500 my-2">
                You've made my heart skip a beat! 💖
            </h3>
        </div>
    );
}

export default Celebration;