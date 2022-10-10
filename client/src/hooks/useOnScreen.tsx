import {useState, useEffect, MutableRefObject} from 'react'

// Hook
function useOnScreen<T extends Element>(EventCardRef: MutableRefObject<T>, threshold = 0.5): boolean {
  // State and setter for storing whether element is visible
  // const EventCardRef: any = useRef<HTMLDivElement>()
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold,
      },
    )
    if (EventCardRef.current) {
      observer.observe(EventCardRef.current)
    }
    return () => {
      if (EventCardRef.current) {
        observer.unobserve(EventCardRef.current)
      }
    }
  }, []) // Empty array ensures that effect is only run on mount and unmount
  return isVisible
}

export default useOnScreen
