function CounterControls(){

    const incrementer = 5;

	return (
        <section className="counter-controls">
            <h2>Counter Controls</h2>
            <div className="counter-control-buttons">
                <button>Increase Counter</button>
                <button>Decrease Counter</button>
                <button>Increase Counter By {incrementer}</button>
            </div>
        </section>
	);

}

export default CounterControls;