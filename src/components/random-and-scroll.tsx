import { useState, useEffect, useCallback } from "react";
import { get_random } from "../util/randomInt";

// imitation of a request to the **server**. just get the number asynchronously
const generateRandomNumber = () => Promise.resolve(Math.random());

const RandomAndScroll = () => {
  const [num, setNum] = useState<number>(0);
  const [numB, setNumB] = useState(0);
  const [scroll, setScroll] = useState<number>(0);
  const [isThrottle, setIsThrottle] = useState<boolean>(true);

  /** onScroll event(setScroll) every 0.5s */
  const onscrollHandler = useCallback((isThrottle: boolean) => {
    if (!isThrottle) return;

    const timeout = setTimeout(() => {
      if (isThrottle) {
        setIsThrottle(false);
        setScroll(window.scrollY);
        console.log("onscroll");
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    /** setNum asynchronously when component mount */
    async function setNumAsync() {
      const newNum = await generateRandomNumber();
      setNum(newNum);
    }
    setNumAsync();

    const newNum = get_random(10);
    if (!Number.isNaN(newNum)) {
      setNumB(newNum);
    }

    // scroll eventListner
    window.addEventListener("scroll", () => onscrollHandler(isThrottle));
    return () =>
      window.removeEventListener("scroll", () => onscrollHandler(isThrottle));
  }, [onscrollHandler, isThrottle]);

  return (
    <div
      style={{ height: "120vh", paddingTop: "30vh", boxSizing: "border-box" }}
    >
      <div> Number: {num} </div>
      <div> Number 1~10: {numB} </div>
      <div> Scroll: {scroll} </div>
    </div>
  );
};

export default RandomAndScroll;
