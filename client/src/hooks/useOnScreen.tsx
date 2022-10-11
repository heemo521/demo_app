import {useState, useEffect, MutableRefObject} from 'react'

function useOnScreen<T extends Element>(EventCardRef: MutableRefObject<T>, threshold = 0.5): boolean {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
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
  }, [])
  return isVisible
}

export default useOnScreen
