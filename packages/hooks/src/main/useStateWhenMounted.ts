import { useCallback, useEffect, useRef, useState } from "react";

// this function is for prevent memory leaks and using
// when assign state inside useeffects

const useStateWhenMounted = <Type>(initialValue: Type) => {
  const [state, setState] = useState(initialValue);
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const setNewState = useCallback((value: Type) => {
    if (isMounted.current) setState(value);
  }, []);

  return [state, setNewState];
};

export default useStateWhenMounted;
