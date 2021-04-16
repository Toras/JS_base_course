'use strict'

const chessBoard = {
    namesStr: ' 12345678',
    namesCol: ' ABCDEFGH',
    game: [
            [
              ['ч', 'Л'], ['ч', 'К'], ['ч', 'С'], ['ч', 'Ф'], ['ч', 'Кр'], ['ч', 'С'], ['ч', 'К'], ['ч', 'Л']
            ],
            [
              ['ч', 'п'], ['ч', 'п'], ['ч', 'п'], ['ч', 'п'], ['ч', 'п'], ['ч', 'п'], ['ч', 'п'], ['ч', 'п']
            ],
            [
              ['',''],['',''],['',''],['',''],['',''],['',''],['',''],['','']
            ],
            [
              ['',''],['',''],['',''],['',''],['',''],['',''],['',''],['','']
            ],
            [
              ['',''],['',''],['',''],['',''],['',''],['',''],['',''],['','']
            ],
            [
              ['',''],['',''],['',''],['',''],['',''],['',''],['',''],['','']
            ],
            [
              ['б', 'п'], ['б', 'п'], ['б', 'п'], ['б', 'п'], ['б', 'п'], ['б', 'п'], ['б', 'п'], ['б', 'п']
            ],
            [
              ['б', 'Л'], ['б', 'К'], ['б', 'С'], ['б', 'Ф'], ['б', 'Кр'], ['б', 'С'], ['б', 'К'], ['б', 'Л']
            ]
          ],
}

const tagChessBoard = document.querySelector('.chessBoard');
console.log(tagChessBoard);

for (let i=0;i<=8;i++) {
    const tableStr = document.createElement('tr');
    for (let j=0;j<=8;j++) {
        const tableCol = document.createElement('td');

        tableCol.className = 'tbMain';
        if ((i == 0 || j == 0) || ((i + j) % 2 == 0)) {
            tableCol.className += ' tbWhite';
        } else {
            tableCol.className += ' tbBlack';
        }

        switch (i) {
            case 0: 
                const cellText = chessBoard.namesCol[j];
                tableCol.innerHTML = cellText;
                break;
            default:
                let HTMLString = '';
                if (j != 0) {
                    let curColor = chessBoard.game[i-1][j-1][0];
                    let curFigure = chessBoard.game[i-1][j-1][1];
                    if (curColor == 'ч') {
                        tableCol.className += ' tbBlackFigure';
                    } else {
                        tableCol.className += ' tbWhiteFigure';
                    }
                    HTMLString += curFigure;
                }
                tableCol.innerHTML = HTMLString;
            }
        switch (j) {
            case 0:
                const cellText = chessBoard.namesStr[i];
                tableCol.innerHTML = cellText;
                break;
        }
        tableStr.appendChild(tableCol);
    }
    tagChessBoard.appendChild(tableStr);
}
