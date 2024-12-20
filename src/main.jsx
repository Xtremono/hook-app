import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'

//import { SimpleForm } from './02-useEffect/SimpleForm'
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
//import { FocusScreen } from './04-useRef/FocusScreen'
//import { Memorize } from './05-memos/Memorize'
//import { MemoHook } from './05-memos/MemoHook'
//import { CallBackHook } from './05-memos/CallBackHook'
//import { Padre } from './06-tarea-memo/Padre'
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
//import { CounterApp } from './01-useState/CounterApp'
//import { HooksApp } from './HooksApp'
//import './07-useReducer/intro-reducer';
//import { TodoApp } from './07-useReducer/TodoApp';
import { MainApp } from './08-useContext/MainApp';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  {/*<StrictMode>*/}
  <MainApp/>
  {/*</StrictMode>*/}
  </BrowserRouter>
)
