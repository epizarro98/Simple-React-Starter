import React, { Component } from 'react'

class Calculator extends Component {

    state = {
        count: 0,
        num1: 0,
        num2: 0,
        minusNum1: 0,
        minusNum2: 0,
        multNum1: 0,
        multNum2: 0,
        divNum1: 0,
        divNum2: 0
    }
    setNum = (e, num) =>{
        this.setState({
            [num]: e.target.value
        })
    }

    getTotal = () => {
        const grandTotal = parseInt(this.state.num1) + parseInt(this.state.num2)

        this.setState({
            num1: 0,
            num2: 0,
            total: grandTotal
        })
    }

    getTotalMin = () => {
        const grandTotalMin = parseInt(this.state.minusNum1) - parseInt(this.state.minusNum2)

        this.setState({
            minusNum1: 0,
            minusNum2: 0,
            totalMin: grandTotalMin
        })
    }

    getTotalMult = () => {
        const grandTotalMult = parseInt(this.state.multNum1) * parseInt(this.state.multNum2)

        this.setState({
            multNum1: 0,
            multNum2: 0,
            totalMult: grandTotalMult
        })
    }

    getTotalDiv = () => {
        const grandTotalDiv = parseInt(this.state.divNum1) / parseInt(this.state.divNum2)

        this.setState({
            divNum1: 0,
            divNum2: 0,
            totalDiv: grandTotalDiv
        })
    }

    render() {
        return (
<div className="container">
  <h1>Calculator</h1>
    <div className="add">
        <input type="number"
        name="num1"
        placeholder="Enter your first number"
        value={this.state.num1}
        onChange={ (e) => this.setNum(e, 'num1') }
        />

        <span>+</span>
        <input type="number"
        name="num2"
        placeholder="Enter your second number"
        value={this.state.num2}
        onChange={ (e) => this.setNum(e, 'num2') }
        />
        <button onClick={this.getTotal}>=</button>
        <h3>Addition results go here!</h3>
        <p>{this.state.total}</p>
    </div>

    <div className='subtract'>
        <input type="number"
        name="minusNum1"
        placeholder="Enter your first number"
        value={this.state.minusNum1}
        onChange={ (e) => this.setNum(e, 'minusNum1') }
        />

        <span>-</span>
        <input type="number"
        name="minusNum2"
        placeholder="Enter your second number"
        value={this.state.minusNum2}
        onChange={ (e) => this.setNum(e, 'minusNum2') }
        />
        <button onClick={this.getTotalMin}>=</button>
        <h3>Subtraction results go here!</h3>
        <p>{this.state.totalMin}</p>
    </div>

    <div className='multiply'>
        <input type='number'
        name='multNum1'
        placeholder='Enter your first number'
        value={this.state.multNum1}
        onChange={ (e) => this.setNum(e, 'multNum1') }
        />
        <span>*</span>
        <input type='number'
        name='multNum2'
        placeholder='Enter your second number'
        value={this.state.multNum2}
        onChange={ (e) => this.setNum(e, 'multNum2') }
        />
        <button onClick={this.getTotalMult}>=</button>
          <h3>Multiplication results go here!</h3>
          <p>{this.state.totalMult}</p>
    </div>

    <div className='divide'>
        <input type='number'
        name='divNum1'
        placeholder='Enter your first number'
        value={this.state.divNum1}
        onChange={ (e) => this.setNum(e, 'divNum1') }
        />
        <span>%</span>
        <input type='number'
        name='divNum2'
        placeholder='Enter your second number'
        value={this.state.divNum2}
        onChange={ (e) => this.setNum(e, 'divNum2') }
        />
        <button onClick={this.getTotalDiv}>=</button>
          <h3>Division results go here!</h3>
          <p>{this.state.totalDiv}</p>
    </div>
  </div>
        )
    }
}

export default Calculator
