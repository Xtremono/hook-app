import { useState } from "react"


export const useCounter = (initialValue = 10) => {

  const [counter, setCounter] = useState(initialValue)


  return {
    counter,
  }


}
