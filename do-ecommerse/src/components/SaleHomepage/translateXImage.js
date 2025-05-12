import { useEffect, useRef, useState } from "react";


const useTranslateX = () => {
    const [scrollDirection, setScrollDirection] = useState(null);
    
        const previousScrollPosition = useRef(0);
    
        const [translateXPosition, setTranslateXPosition] = useState(80);
    
        const [scrollPosition, setScrollPosition] = useState(0);
    
    
        const scrollTracking = () => {
            const currentScrollPosition = window.scrollY;
            if (currentScrollPosition > previousScrollPosition.current) {
                setScrollDirection('down');
            } else {
                setScrollDirection('up');
            }
            previousScrollPosition.current =
                currentScrollPosition <= 0 ? 0 : currentScrollPosition;
    
            setScrollPosition(currentScrollPosition);
        }
    
        useEffect(() => {
            window.addEventListener('scroll', scrollTracking);
            return () => window.removeEventListener('scroll', scrollTracking);
        }, []);
    
        console.log(scrollPosition);
    
        const handletranslateX = () => {
            if (scrollDirection === 'down' && scrollPosition >= 1500) {
                setTranslateXPosition(prev => (prev <= 0 ? 0 : prev - 1));
            } else if (scrollDirection === 'up') {
                setTranslateXPosition(prev => (prev >= 80 ? 80 : prev + 1));
            }
        }

        useEffect(() => {
            handletranslateX()
        }, [scrollPosition])
    
        return { translateXPosition };
}
    


export default useTranslateX;