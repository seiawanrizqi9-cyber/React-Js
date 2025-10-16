import useCounter from './useCounter';    
import useToggle from './useToggle';      

const useToggleCounter = (initialCount = 0, initialToggle = false) => {
  const counter = useCounter(initialCount); 
  const [isVisible, toggleVisible] = useToggle(initialToggle);

  return {
    ...counter,
    isVisible,
    toggleVisible,
  };
};

export default useToggleCounter;