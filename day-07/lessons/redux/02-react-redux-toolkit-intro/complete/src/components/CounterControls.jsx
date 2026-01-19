import { useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from '../features/counter/counterSlice';

function CounterControls(){

    const dispatch = useDispatch();

    const incrementer = 5;

	return (
        <section className="counter-controls">
            <h2>Counter Controls</h2>
            <div className="counter-control-buttons">
                <button onClick={() => dispatch(increment())}>Increase Counter</button>
                <button onClick={() => dispatch(decrement())}>Decrease Counter</button>
                <button onClick={() => dispatch(incrementByAmount(incrementer))}>Increase Counter By {incrementer}</button>
            </div>
        </section>
	);

}

export default CounterControls;
