import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { addNumber, subNumber } from '../../modules/counter/actions'
const Counter = () =>{
    const dispatch = useDispatch()
    const number = useSelector((state)=>state.number)
    const handleAdd = () => {
        dispatch(addNumber(1))
    }
    const handleSub = () => {
        dispatch(subNumber(1))
    }
    return(
        <div className='counter-container'>
            <h1>{number}</h1>
            <button onClick={handleAdd}>Adicionar</button>
            <button onClick={handleSub}>Diminuir</button>
        </div>
    )
}
export default Counter