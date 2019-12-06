import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import InputNumber from "./common/InputNumber";
import Confirm from "./common/confirm";


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

    async componentDidMount(){
        let res = await Confirm("确定删除吗");
        if(res) {
            console.log("是");
        } else {
            console.log("否");
        }
    }

}

export default App;
