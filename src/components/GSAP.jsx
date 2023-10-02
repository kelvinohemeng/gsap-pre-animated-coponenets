import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const GsapScrollZoom = ({ children }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  useEffect(() => {
    // gsap

    const element = ref.current;
    const containerElement = containerRef.current;

    gsap.to(element, {
      scale: 5,
      scrollTrigger: {
        trigger: element,
        scrub: 2,
        start: "center center",
        end: "center center",
        ease: "expo.out",
      },
    });
  }, []);
  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "600px",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        marginBlock: "20vh",
      }}
    >
      <div
        ref={ref}
        className=" zoom-content"
        style={{
          height: "100%",
          background: "yellow",
          display: "flex",
          alignItems: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
};
export const GsapScrollZoomPin = ({ children }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  useEffect(() => {
    // gsap

    const element = ref.current;
    const containerElement = containerRef.current;

    gsap.to(element, {
      scale: 5,
      scrollTrigger: {
        trigger: containerElement,
        pin: element,
        scrub: 2,
        start: "center center",
        // end: "top center",
        ease: "expo.out",
        // markers: true,
      },
    });
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        height: "100%",
        overflowX: "hidden",
      }}
    >
      <div
        ref={ref}
        className=" zoom-content"
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export const GsapScrollX = ({ children }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // gsap
    const element = ref.current;
    const containerElement = containerRef.current;
    gsap.from(element, {
      scrollTrigger: {
        trigger: containerElement,
        // pin: true,
        // scrub: 1,
        // markers: true,
        start: "top center",
        toggleActions: "restart pause resume pause",
      },
      opacity: 0,
      xPercent: 50,
      duration: 1,
    });
  }, []);
  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div
        ref={ref}
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export const GsapScrollXPin = ({ children }) => {
  const ref = useRef(null);

  const containerRef = useRef(null);

  useEffect(() => {
    // gsap
    const element = ref.current;
    const containerElement = containerRef.current;
    let x = containerElement.scrollWidth;
    gsap.to(element, {
      x: () => {
        return (
          -(
            containerElement.scrollWidth - document.documentElement.clientWidth
          ) + "px"
        );
      },
      // ease: "power1",
      // duration: 2,
      scrollTrigger: {
        trigger: element,
        start: () => "center center",
        end: () => {
          return "+=" + x;
        },
        scrub: 0.6,
        pin: element,
        anticipatePin: 1,
        // markers: true,
      },
    });
  }, []);
  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      <div
        ref={ref}
        style={{
          // use the translate to determine the direction for the scrolling
          transform: "translateX(120%)",
          width: "fit-content",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: "80px",
          zIndex: "9999",
          //   paddingInline: "6rem",
        }}
      >
        {children}
      </div>
      <div className="parra">
        <h3>soo cool ...</h3>
      </div>
    </div>
  );
};

export const GsapReveal = ({ children }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // gsap
    const element = ref.current;
    const containerElement = containerRef.current;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerElement,
        markers: true,
        start: "-=100px center",
        toggleActions: "restart pause resume pause",
      },
    });
    tl.from(element, {
      opacity: 0,
      yPercent: 100,
      duration: 1,
      ease: "expo.out",
    }).to(element, {
      opacity: 1,
      yPercent: 0,
      duration: 1,
      ease: "expo.out",
    });
  }, []);
  return (
    <div
      ref={containerRef}
      style={
        {
          // width: "fit-content",
          // height: "fit-content",
          // padding: "20px",
        }
      }
    >
      <div ref={ref}>{children}</div>
    </div>
  );
};
