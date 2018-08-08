import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// class ShoppingList extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Shopping List for {this.props.name}</h1>
//                 <ul>
//                     <li>Instagram</li>
//                     <li>WhatsApp</li>
//                     <li>Oculus</li>
//                 </ul>
//             </div>
//         );
//     }
// }


class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        };
    }
    render() {
        return (
            <button className="square" onClick={() => this.props.onClick()}>
                {this.props.value}
            </button >
        );
    }
}


function NewSquare(props) {
    return (
        <button className="square" onClick={() => props.onClick()}>
            {props.value}
        </button >
    );
}


function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            nextValue: 'X'
        }
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = this.state.nextValue;
        console.log('handle click called for: ' + squares);
        const won = calculateWinner(squares);
        var nextTurn;
        if (won) {
            nextTurn = '-';
        } else {
            nextTurn = this.state.nextValue == 'X' ? 'O' : 'X';
        }
        this.setState({ squares: squares, nextValue: nextTurn });
    }

    renderSquare(i) {
        return (
            <NewSquare
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    }

    render(i) {
        const status = "Player " + this.state.nextValue + " turn";
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}


ReactDOM.render(
    // <h1>Hello, world!</h1>,
    <Board value="1" />,
    document.getElementById('root')
);

