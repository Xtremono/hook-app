import { useCounter } from "../Hooks/useCounter"





export const CounterWithCustomHook = () => {

  const { counter, increment, decrement, reset } = useCounter();

  return (
    <>

    <h1>Counter with Hook: { counter } </h1>
    <hr />

    <button className="btn btn-primary" onClick={increment}>+1</button>
    <button className="btn btn-primary" onClick={reset}>RESET</button>
    <button className="btn btn-danger" onClick={decrement}>-1</button>

    </>
  )
}
