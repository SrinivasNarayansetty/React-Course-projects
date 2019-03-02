let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
    // console.log('addOne', count);

}
const minusOne = () => {
    console.log('minus one');
    count--;
    renderCounterApp();
}
const reset = () => {
    console.log('reset');
    count = 0;
    renderCounterApp();
}
const someId = 'my-id';


// console.log(templateTwo);



const renderCounterApp = () =>{
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button id={someId} className="button" onClick={addOne}>+1</button>
            <button id={someId} className="button" onClick={minusOne}>-1</button>
             <button id={someId} className="button" onClick={reset}>reset</button>
        </div>
    )
    ReactDOM.render(templateTwo,appReact);
};

renderCounterApp();


const appReact = document.getElementById('app');
