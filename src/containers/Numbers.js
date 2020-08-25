import React from 'react';
import Back from '../components/Back'
import './Numbers.css';

class Numbers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            type: 'trivia',
            message: ''
        };
        this.click = props.click;
    };

    getMessage = async function (num, type) {
        const resp = await fetch(`http://numbersapi.com/${num}/${type}?json`);
        const data = await resp.json();
        const text = data.text

        this.setState({ message: text })
    }

    componentDidMount() {
        this.getMessage(this.state.number, this.state.type)
    }

    onSearchChange = (event) => {
        let number = event.target.value
        number = !number ? '0' : number
        this.setState({ number: number });

        this.getMessage(number, this.state.type);
    }

    onClickChange = (type) => {
        let number = this.state.number
        if ((type === 'date') && (this.state.type !== 'date')) {
            number = '10/21'
            document.getElementsByTagName('input')[0].value = ''
        } else if ((type !== 'date') && (this.state.type === 'date')) {
            number = '0'
            document.getElementsByTagName('input')[0].value = ''
        }

        this.setState({type : type})
        
        const lis = document.querySelectorAll('li')
        for (let li of lis) {
            li.style.backgroundColor = 
                (li.getAttribute('id') === type) ?
                '#d5d6ee' : '#aaabbc';
        }


        this.setState({number : number})

        this.getMessage(number, type);
    }


    render() {
        return (
            <div className='tc dib br4 ba um'>
                <h1>Numbers API</h1>

                <div className='tc'>
                    <input
                        className='pa3 ba br3 b--green bg-lightest-blue tc search'
                        type="search"
                        placeholder={this.state.number}
                        onChange={this.onSearchChange}
                    />
                </div>

                <div>
                    <ul className='list tcz'>
                        <li id='trivia' style={{backgroundColor : '#cdcee4'}}>
                            <button onClick={() => this.onClickChange('trivia')}>Trivia Fact</button>
                        </li>
                        <li id='math'>
                            <button onClick={() => this.onClickChange('math')}>Math Fact</button>
                        </li>
                        <li id='year'>
                            <button onClick={() => this.onClickChange('year')}>Year Fact</button>
                        </li>
                        <li id='date'>
                            <button onClick={() => this.onClickChange('date')}>Date Fact</button>
                        </li>
                    </ul>
                </div>

                <h3 className='pa2 ma2'>{this.state.message}</h3>

                <Back click={this.click} />
            </div>
        );
    }
};

export default Numbers;