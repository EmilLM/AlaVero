import { useEffect, useRef, useState } from 'react';

export const useClickOutside = (handler) => {
	const domRef = useRef(null);

	useEffect(() => {
		const maybeHandler = (event) => {
			if (domRef && !domRef.current?.contains(event.target)) {
				handler();
			}
		};
		document.addEventListener('mousedown', maybeHandler);
		return () => document.removeEventListener('mouseDown', maybeHandler);
	});

	return domRef;
};

export const useScrollDirection = () => {
	const [scrollDirection, setScrollDirection] = useState(null);
	// const [prevOffset, setPrevOffset] = useState(0);

	const toggleScrollDirection = () => {
		let scrollY = window.scrollY;
		if (scrollY < 200) {
			setScrollDirection(null);
		} else setScrollDirection(true);
		// if (scrollY > prevOffset) {
		// 	setScrollDirection('down');
		// } else if (scrollY < prevOffset) {
		// 	setScrollDirection('up');
		// }
		// setPrevOffset(scrollY);
	};
	useEffect(() => {
		window.addEventListener('scroll', toggleScrollDirection);
		return () => {
			window.removeEventListener('scroll', toggleScrollDirection);
		};
	});
	return scrollDirection;
};
