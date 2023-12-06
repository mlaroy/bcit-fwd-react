import { useSelector } from 'react-redux';

function Counter(){

    const count = useSelector(state => state.counter.value);

	return (
        <section className="counter-output">
            <h2>Counter State Output</h2>
            <p>Counter: {count}</p>
        </section>
	);

}

export default Counter;
