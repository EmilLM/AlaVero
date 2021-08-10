import { useEffect, useRef } from 'react';

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
