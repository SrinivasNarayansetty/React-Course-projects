const obj = {
    name: 'Vikram',
    getName() {
        return this.name;
    }
}
const getName = obj.getName.bind({name: 'Kiran'});
console.log(getName());


class IndecisionApp extends React.Component {
    render() {
        const title="Indecision App";
        const subTitle="Put your life in hands of a computer";
        const options = ['Thing One', 'Thing Two', 'Thing Three'];
        return (
            <div>
                <Header title={title} subTitle={subTitle}/>
                <Options options={options}/>
                <AddOption></AddOption>
            </div>
        )
    }
}
class Header extends React.Component {
    render() {
        // console.log(this.props);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
        )
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
    }
    removeAll() {
       console.log(this.props.options);
    }
    render() {
        return(
            <div>
                <button onClick={this.removeAll.bind(this)}>Remove All</button>
                {
                    this.props.options.map((option) => <Option key={option} title={option}/> )
                }
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return(
            <div>
                {this.props.title}
            </div>
        )
    }
}


class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if(option) {
            alert(option);
        }
    }
    render() {
        return(
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Options</button>
                </form>
            </div>
        )
    }
}


class Action extends React.Component {
    handlePick() {
        alert('handlePick');
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        )
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));