import { useCallback, useEffect, useRef } from 'react';

const ScrollFadeIn = (direction = 'up', duration = 1, delay = 0) => {
   const element = useRef();
   const handleDirection = name => {
      switch (name) {
         case 'up':
            return 'translate3d(0, 50%, 0)';

         case 'upProject':
            return 'translate3d(0, 30%, 0)';

         default:
            return;
      }
   };

   const handleScroll = useCallback(
      ([entry]) => {
         const { current } = element;

         if (entry.isIntersecting) {
            current.style.transitionProperty = 'opacity transform';
            current.style.transitionDuration = `${duration}s`;
            current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
            current.style.transitionDelay = `${delay}s`;
            current.style.opacity = 1;
            current.style.transform = 'translate3d(0, 0, 0)';
         }
         return;
      },
      [delay, duration],
   );

   useEffect(() => {
      let observer;
      const { current } = element;

      if (current) {
         observer = new IntersectionObserver(handleScroll, { threshold: 0.5 });
         observer.observe(current);
      }
      return () => observer && observer.disconnect();
   }, [handleScroll]);

   /* 초기값 */
   return {
      ref: element,
      style: { opacity: 0, transform: handleDirection(direction) },
   };
};

export default ScrollFadeIn;
