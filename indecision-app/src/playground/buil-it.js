const appReact1 = document.getElementById('app');
let optionsShow = false;
let hiddenData = 'There is a content inside.Here it is';
const toggleVisisbility = () => {
    optionsShow = !optionsShow;
    renderBuiltData();
}

const renderBuiltData = () => {
    const template = (
        <div>
            <h1>Visisbility Toggle</h1>
            <button onClick={toggleVisisbility}>{optionsShow == true ? 'Hide Details' : 'Show Details'}</button>
            <p>{optionsShow ? hiddenData: ''}</p>
            {optionsShow & (
                <div>
                    <p>There is a content inside.Here it is</p>
                </div>
            )}
            <p>Here are the options</p>
        </div>
    )
    ReactDOM.render(template,appReact1);
}

renderBuiltData();