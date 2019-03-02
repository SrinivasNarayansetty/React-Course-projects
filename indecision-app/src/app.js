console.log('hello react');

//JSX data 
const user = {
    name: 'Srinivasa rao',
    age:26,
    location:'New Delhi'
}

const app = {
    'title':'Indecision App',
    subTitle :'testing text',
    'options': ['one','two']
}

let options = app.options;



function getLocation(location) {
    if(location) {
        return <p>Location: {location}</p>
    } 
}
const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    console.log(option);
    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        console.log(app.options);
        renderData();
    }
}
const onRemoveAll = () => {
    app.options = [];
    renderData();
}

const onMakeDecision = () => {
    const randomnum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomnum];
    // console.log(randomnum);
    alert(option);
}

const appReact = document.getElementById('app');

const numbers = [55, 101, 1000];

const renderData = () => {
    const template = (<div>
        <h1>Indecision App</h1>
        <p>{app.options.length > 0 ? 'here are your options': 'No options'}</p>
        <button disabled={app.options.length == 0} onClick={onMakeDecision}>What should I do</button>
        <br/>
        <button onClick={onRemoveAll} >Remove All</button>
        <form onSubmit={onFormSubmit}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
        <p>{app.options.length}</p>
        {
            [<p key="a">a</p>, <p key="b">b</p>, <p key="c">c</p>]
        }
        <p>1</p>

        {
            numbers.map((number) => {
                return <p key={number}>Number: {number * 2}</p>;
            })
        }
    
        <ol>
            {/* map over array */} 
            {
                app.options.map((option) => {
                    return <li key={option}>{option}</li>;
                })
            }
        </ol>
      </div>);
    ReactDOM.render(template,appReact);

}

renderData();