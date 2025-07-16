// import React from 'react';

// const ScrollButtons = () => {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const scrollToBottom = () => {
//     window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
//   };

//   return (
//     <div style={styles.container}>
//       <button style={styles.button} onClick={scrollToTop}>↑ Top</button>
//       <button style={styles.button} onClick={scrollToBottom}>↓ Bottom</button>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     position: 'fixed',
//     right: '20px',
//     bottom: '40px',
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '10px',
//     zIndex: 1000,
//   },
//   button: {
//     padding: '10px 15px',
//     fontSize: '14px',
//     cursor: 'pointer',
//     backgroundColor: '#ec1c24',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '8px',
//     boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
//   },
// };

// export default ScrollButtons;

import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Make sure to install react-icons

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button after scrolling down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    isVisible && (
      <div onClick={scrollToTop} style={styles.button}>
        <FaArrowUp />
      </div>
    )
  );
};

const styles = {
  button: {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    backgroundColor: '#ec1c24',
    color: '#fff',
    padding: '10px 12px',
    borderRadius: '50%',
    cursor: 'pointer',
    zIndex: 1000,
    boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
    fontSize: '18px',
  },
};

export default ScrollToTop;
