let turn = 'X';
let turncount = 0;
let px = 0;
let po = 0;
let draw = 0;
let ab = document.querySelector('.board');
let winner_scenarios = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
[0, 3, 6], [1, 4, 7], [2, 5, 8],
[0, 4, 8], [2, 4, 6]];

let arr = new Array(9).fill('empty');

let check_winner = () => {
    for (let [a, b, c] of winner_scenarios) {

        if (arr[a] !== 'empty' && arr[a] === arr[b] && arr[a] === arr[c]) {
            return true;
        }
    }
};

let print = (e) => {
    let b = e.target;
    if (arr[b.id] === 'empty') {
        if (turn === 'X') {
            b.textContent = 'X';
            arr[b.id] = 'X';
            if (check_winner()) {
                let c = document.getElementById('result');
                c.textContent = 'Player X Wins!';
                px++;
                document.getElementById('score-x').textContent = px;
                ab.removeEventListener('click', print);
                return;
            }

            turn = 'O';
            turncount++;
            if (turncount === 9) {
                let c = document.getElementById('result');
                c.textContent = 'It is a Draw!';
                draw++;
                document.getElementById('score-draw').textContent = draw;
                ab.removeEventListener('click', print);
            }

        }
        else {

            if (turn === 'O') {
                b.textContent = 'O';
                arr[b.id] = 'O';
                if (check_winner()) {
                    let c = document.getElementById('result');
                    c.textContent = 'Player O Wins!';
                    po++;
                    document.getElementById('score-o').textContent = po;
                    ab.removeEventListener('click', print);
                    return;
                }
                turn = 'X';
                turncount++;
                if (turncount === 9) {
                    let c = document.getElementById('result');
                    c.textContent = 'It is a Draw!';
                    ab.removeEventListener('click', print);
                    draw++;
                    document.getElementById('score-draw').textContent = draw;
                }
            }
        }
    }
}

let reset = () => {
    arr = new Array(9).fill('empty');
    turn = 'X';
    turncount = 0;
    const cp = document.querySelector('.current-player');
    if (cp) cp.textContent = 'X';
    document.getElementById('result').textContent = '';
    ab.addEventListener('click', print);
    for (let i = 0; i < 9; i++) {
        document.getElementById(i).textContent = '';
    }
}

document.getElementById('rst').addEventListener('click', reset);

ab.addEventListener('click', print);

