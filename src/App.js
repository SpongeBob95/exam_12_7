import React from 'react';
import './App.css';
import InputNumber from "./common/InputNumber";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    render() {

        return (
            <div>
                <InputNumber value={this.state.value}
                             // onChange={(e) => {
                             //     this.setState({
                             //         value: e.target.value
                             //     })
                             // }}
                />
                <InputNumber defaultValue={this.state.value} onChange={(e) => {
                }}/>
            </div>
        )
    }

}

export default App;
