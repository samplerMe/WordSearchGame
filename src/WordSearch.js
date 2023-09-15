import React, { useState, useEffect ,useRef} from 'react';
import './WordSearch.css';
import winSound from './win.mp3';
const gridSize = 10;
const words = ["monkey", "owl", "frog", "spider", "tortoise", "snail"];

const crosswordWordsSize = 6;

const oriented = {
  NONE: 0,
  X: 1,
  Y: 2,
  Z: 3
};

class Crossword {
  constructor() {
    this.crosswordWords = words;
    this.inCrossword = new Array(crosswordWordsSize).fill(true);
    this._Crossword = Array.from({ length: gridSize }, () => new Array(gridSize).fill('-'));
    this.maxWordLength = this.crosswordWords.reduce((max, word) => Math.max(max, word.length), 0);

    if (this.maxWordLength > gridSize) {
      console.log("Invalid params");
      process.exit(0);
    }
  }

  createCrossword() {
    let index = crosswordWordsSize;

    while (index !== 0) {
      let isPlaced = false;
      let count = 0;

      while (!isPlaced) {
        if (count > 200) {
          console.log("Not Possible");
          process.exit(0);
        }

        const x = Math.floor(Math.random() * gridSize);
        const y = Math.floor(Math.random() * gridSize);

        if (this.isPossibleDiagonal(x, y, index - 1)) {
          this.wordPlace(x, y, index - 1, oriented.Z);
          isPlaced = true;
          this.inCrossword[index - 1] = true;
        } else if (this.isPossibleVertical(x, y, index - 1)) {
          this.wordPlace(x, y, index - 1, oriented.Y);
          isPlaced = true;
          this.inCrossword[index - 1] = true;
        } else if (this.isPossibleHorizontal(x, y, index - 1)) {
          this.wordPlace(x, y, index - 1, oriented.X);
          isPlaced = true;
          this.inCrossword[index - 1] = true;
        }

        count++;
      }

      index--;
    }
    this.printCrossword();

    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        if (this._Crossword[i][j] === '-') {
          this._Crossword[i][j] = this.randomChar();
        }
      }
    }
  }

  printCrossword() {
    for (let i = 0; i < gridSize; i++) {
      console.log(this._Crossword[i].join('  '));
      console.log('\n');
    }
  }

  randomChar() {
    return String.fromCharCode(97 + Math.floor(Math.random() * 26));
  }

  wordPlace(x, y, index, val) {
    switch (val) {
      case oriented.X:
        for (let i = 0; i < this.crosswordWords[index].length; i++) {
          this._Crossword[i + x][y] = this.crosswordWords[index][i];
        }
        break;
      case oriented.Y:
        for (let i = 0; i < this.crosswordWords[index].length; i++) {
          this._Crossword[x][i + y] = this.crosswordWords[index][i];
        }
        break;
      case oriented.Z:
        for (let i = 0; i < this.crosswordWords[index].length; i++) {
          this._Crossword[x + i][y + i] = this.crosswordWords[index][i];
        }
        break;
      default: return;
    }
  }

  isPossibleHorizontal(x, y, index) {
    let i;
    for (i = x; i - x < this.crosswordWords[index].length && i < gridSize; i++) {
      if (this._Crossword[i][y] !== '-') {
        return false;
      }
    }
    return i < gridSize;
  }

  isPossibleVertical(x, y, index) {
    let i;
    for (i = y; i - y < this.crosswordWords[index].length && i < gridSize; i++) {
      if (this._Crossword[x][i] !== '-') {
        return false;
      }
    }
    return i < gridSize;
  }

  isPossibleDiagonal(x, y, index) {
    let i;
    for (i = 0; i < this.crosswordWords[index].length && i + x < gridSize && i + y < gridSize; i++) {
      if (this._Crossword[x + i][y + i] !== '-') {
        return false;
      }
    }
    return i + x < gridSize && i + y < gridSize;
  }
}
function Square({ value, data, onSquareClick }) {
  return (
    <button id={value} className={`square`} onClick={() => onSquareClick(value)}>
      {data}
    </button>
  );
}


function RowBoard({ rowNo, crossword, onSquareClick }) {
  return (
    <span className={`row`}>
      {crossword[rowNo].map((value, index) => (
        <Square
          key={index + rowNo * gridSize}
          value={index + rowNo * gridSize}
          data={crossword[rowNo][index]}
          onSquareClick={onSquareClick}
        ></Square>
      ))}
    </span>
  );
}

function Board({ crossword, onSquareClick }) {
  return (
    <div className="board">
      {crossword.map((row, index) => (
        <RowBoard
          key={index}
          rowNo={index}
          crossword={crossword}
          onSquareClick={onSquareClick}
        />
      ))}
    </div>
  );
}

export default function WordSearch() {
  const [genWordList, setGenWordList] = useState([]);
  const [_Crossword, setCrossword] = useState([]);
  const [maxWordLength, setMaxWordLength] = useState(0);
  const [remainingWords, setRemainingWords] = useState(1);
  const [WordList, setWordList] = useState('');
  const [selectedWords,setSelectedWords] = useState([]);
  const [colors, setColors] = useState([]);
  const [charcolors,setCharcolors] = useState([]);
  const [colorselector, setColorSelector] = useState(0);
  const [filled,setfilled] = useState([]);
  const audioRef = useRef(null);


  useEffect(() => {
    const obj = new Crossword();
    obj.createCrossword();
    setGenWordList(JSON.parse(JSON.stringify(words)));
    setCrossword(obj._Crossword);
    setMaxWordLength(obj.maxWordLength);
    setRemainingWords(words.length)
    setColors(['#ff445c','#44FFE7']);
    setCharcolors(['#ffffff','#000000']);
    setfilled([].fill(false,0,gridSize*gridSize-1));
  }, []);

  // function replayGame() {
  //   window.location.reload();
  // }
  useEffect(() => {
    // Check if WordList matches any word in genWordList
    if (genWordList.includes(WordList)) {
      // WordList matches one of the words in genWordList
      setRemainingWords(remainingWords - 1);
      
      setfilled(()=>
      {
        selectedWords.forEach((value)=>{
          filled[value] = true;
        })
        return filled;

      });
      setSelectedWords([]);
      setWordList('');
      setColorSelector((colorselector+1)%colors.length);
      console.log(colorselector);
    }

    // Clear the selected word if it reaches maxWordLength
    if (WordList.length === maxWordLength+1) {
      selectedWords.forEach(selectedWord => {
        const square = document.getElementById(selectedWord);
        square.style.backgroundColor = "rgb(255, 255, 255)";
        square.style.color = "rgb(0, 0, 0)";
      });
      setSelectedWords([]);
      setWordList('');
    }
    if(remainingWords === 0)
    {
      const congMessage = document.getElementById('Congratulations');
      const p = congMessage.getElementsByTagName('p');
      congMessage.style.backgroundColor = "#ff445c";
      p[0].innerHTML = "Congratulations!!!";
      p[1].innerHTML= '<button onClick=window.location.reload()>Replay</button>';
      p[0].style.font ="italic bold 3rem 'Poppins', sans-serif";
      p[1].style.font = "bold 1rem 'Poppins', sans-serif";
      p[1].style.margin= "1% 0 0 40%";
      const button = p[1].getElementsByTagName('button')[0];
      button.style.height = "1.5rem";
      button.style.width = "5rem";
      button.style.bgcolor = "#ffffff"
      button.style.borderColor = "#888888";
      button.style.font = "100 1rem  'Poppins', sans-serif";
      
      audioRef.current.play();
    }
  }, [genWordList,maxWordLength,selectedWords, WordList, remainingWords,colors,colorselector,filled]);

  function handleClick(value) {
    if(filled[value])
      return;
    const selection = document.getElementById(value);
    
    // Check if the clicked square is already selected
    if (selectedWords.includes(value)) {
      selection.style.backgroundColor = "rgb(255, 255, 255)";
      selection.style.color = "rgb(0, 0, 0)";
      // Remove the clicked square from selectedWords
      setSelectedWords(selectedWords.filter(word => word !== value));
      
      // Find the index of the clicked square in WordList
      const index = WordList.indexOf(selection.innerHTML);
      if (index !== -1) {
        // Remove the character at the found index from WordList
        setWordList(WordList.slice(0, index) + WordList.slice(index + 1));
      }
    } else {
      selection.style.backgroundColor = colors[colorselector];
      selection.style.color = charcolors[colorselector];
      // Add the clicked square to selectedWords
      setSelectedWords([...selectedWords, value]);
      // Append the clicked square's content to WordList
      setWordList(WordList + selection.innerHTML);
    }
  }


  
  

  return (
    <>
    <div class="root">
    <div>
      <div className="Title" >
        <p>WordSearch (Animals)</p>
      </div>
      <div className="Scoreboard">
        <span><p>To Find</p></span>
        <span ><p id="remCount">{`${remainingWords}`}</p> 
        </span>
        
      </div>
      </div>
      <Board crossword={_Crossword} onSquareClick={handleClick} />
    <div>
      <span id="Congratulations"><p></p><p></p></span>
    </div>
    <div>
    <audio ref={audioRef}>
      <source src={winSound} type="audio/mpeg" />
    </audio>
  </div>
  </div>
    </>
  );
}


