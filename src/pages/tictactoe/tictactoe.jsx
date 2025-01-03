import "./tictactoe.css";
import Board from "./board";
function TicTacToe({soundStatus}) {
  return (
    <div className="game h-full">
      <Board  soundStatus={soundStatus}/>
      {/* <a href="https://www.flaticon.com/free-icons/reject" title="reject icons">Reject icons created by meaicon - Flaticon</a> */}
      {/* <a href="https://www.flaticon.com/free-icons/letter-o" title="letter o icons">Letter o icons created by Md Tanvirul Haque - Flaticon</a> */}
    </div>
  );
}

export default TicTacToe
