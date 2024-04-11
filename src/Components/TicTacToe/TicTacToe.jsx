import React, {useState, useRef} from 'react'
import './TicTacToe.css'
import circle_icon from '../Assets/circle-no-background.png'
import cross_icon from '../Assets/cross-no-background.png'
import circle_icon_winner from '../Assets/circle-winner-no-background.png'
import cross_icon_winner from '../Assets/cross-winner-no-background.png'


let data = ["", "", "", "", "", "", "", "", ""]

const TicTacToe = () => {

	let [count, setCount] = useState(0);
	let [circleVictories, setCircleVictories] = useState(0)
	let [crossVictories, setCrossVictories] = useState(0)
	let [lock, setLock] = useState(false);
	let victoriesRef = useRef(null);
	let moveRef = useRef(null);
	let box0 = useRef(null);
	let box1 = useRef(null);
	let box2 = useRef(null);
	let box3 = useRef(null);
	let box4 = useRef(null);
	let box5 = useRef(null);
	let box6 = useRef(null);
	let box7 = useRef(null);
	let box8 = useRef(null);


	let box_array = [box0, box1, box2, box3, box4, box5, box6, box7, box8];

	const toggle = (e, num) => {
		if (lock) {
			return 0;
		}
		if (data[num] === "") {
			if (count % 2 === 0) {
				e.target.innerHTML = `<img src='${cross_icon}'>`;
				data[num] = "x";
				setCount(++count);
			} else {
				e.target.innerHTML = `<img src='${circle_icon}'>`;
				data[num] = "o";
				setCount(++count);
			}
			updateMoves()
			checkWin()
		}
	}

	const checkWin = () => {
		for(let i=0; i < 3; i++){
			if(data[3*i+0]===data[3*i+1] && data[3*i+1]===data[3*i+2] && data[3*i+0]!==""){
				won(data[3*i+0]);
				if (data[3*i+0] === "x"){
					box_array[3*i+0].current.innerHTML = `<img src='${cross_icon_winner}' alt="winner cross image">`;
					box_array[3*i+1].current.innerHTML = `<img src='${cross_icon_winner}' alt="winner cross image">`;
					box_array[3*i+2].current.innerHTML = `<img src='${cross_icon_winner}' alt="winner cross image">`;
				} else {
					box_array[3*i+0].current.innerHTML = `<img src='${circle_icon_winner}' alt="winner circle image">`;
					box_array[3*i+1].current.innerHTML = `<img src='${circle_icon_winner}' alt="winner circle image">`;
					box_array[3*i+2].current.innerHTML = `<img src='${circle_icon_winner}' alt="winner circle image">`;
				}
			}
		}
		for(let i=0; i < 3; i++){
			if(data[0+i]===data[3+i] && data[3+i]===data[6+i] && data[0+i]!==""){
				won(data[0+i]);
				if (data[i] === "x"){
					box_array[i].current.innerHTML = `<img src='${cross_icon_winner}' alt="winner cross image">`;
					box_array[3+i].current.innerHTML = `<img src='${cross_icon_winner}' alt="winner cross image">`;
					box_array[6+i].current.innerHTML = `<img src='${cross_icon_winner}' alt="winner cross image">`;
				} else {
					box_array[i].current.innerHTML = `<img src='${circle_icon_winner}' alt="winner circle image">`;
					box_array[3+i].current.innerHTML = `<img src='${circle_icon_winner}' alt="winner circle image">`;
					box_array[6+i].current.innerHTML = `<img src='${circle_icon_winner}' alt="winner circle image">`;
				}
			}
		}
		if(data[0]===data[4] && data[4]===data[8] && data[0]!==""){
			won(data[0]);
			if (data[0] === "x"){
					box_array[0].current.innerHTML = `<img src='${cross_icon_winner}' alt="winner cross image">`;
					box_array[4].current.innerHTML = `<img src='${cross_icon_winner}' alt="winner cross image">`;
					box_array[8].current.innerHTML = `<img src='${cross_icon_winner}' alt="winner cross image">`;
				} else {
					box_array[0].current.innerHTML = `<img src='${circle_icon_winner}' alt="winner circle image">`;
					box_array[4].current.innerHTML = `<img src='${circle_icon_winner}' alt="winner circle image">`;
					box_array[8].current.innerHTML = `<img src='${circle_icon_winner}' alt="winner circle image">`;
				}
		}
		if(data[2]===data[4] && data[4]===data[6] && data[2]!==""){
			won(data[2]);
			if (data[2] === "x"){
					box_array[2].current.innerHTML = `<img src='${cross_icon_winner}' alt="winner cross image">`;
					box_array[4].current.innerHTML = `<img src='${cross_icon_winner}' alt="winner cross image">`;
					box_array[6].current.innerHTML = `<img src='${cross_icon_winner}' alt="winner cross image">`;
				} else {
					box_array[2].current.innerHTML = `<img src='${circle_icon_winner}' alt="winner circle image">`;
					box_array[4].current.innerHTML = `<img src='${circle_icon_winner}' alt="winner circle image">`;
					box_array[6].current.innerHTML = `<img src='${circle_icon_winner}' alt="winner circle image">`;
				}
		}
	}

	const won = (winner) => {
		setLock(true);
		if(winner==="x"){
			moveRef.current.innerHTML = `Congratulations: <img src=${cross_icon} alt="cross image"> wins`
			setCrossVictories(++crossVictories);
		} else {
			moveRef.current.innerHTML = `Congratulations: <img src=${circle_icon} alt="circle image"> wins`
			setCircleVictories(++circleVictories);
		}
	}

	const updateMoves = () => {
		if (count % 2 === 0) {
			moveRef.current.innerHTML = `<img src=${cross_icon} alt"cross image"> moves`
		} else {
			moveRef.current.innerHTML = `<img src=${circle_icon} alt="circle image"> moves`
		}
	}

	const reset = () => {
		setLock(false);
		data = ["", "", "", "", "", "", "", "", ""]
		updateMoves()
		box_array.map((e) => {
			e.current.innerHTML = "";
		})
	}



	return (
		<div className='container'>
			<h1 className='title'>Tic Tac Toe Game In <span className="react">React</span></h1>
			<h1 className='victories' ref={victoriesRef}>Victories <img src={cross_icon} alt="cross image"/>: {crossVictories}   <img src={circle_icon}/>:  {circleVictories}</h1>
			<h1 className='moves' ref={moveRef}><img src={cross_icon}/> moves</h1>
			<div ckassName='board'>
				<div className="row1"> 
					<div className="boxes" ref={box0} onClick={(e)=>{toggle(e,0)}}> </div>
					<div className="boxes" ref={box1} onClick={(e)=>{toggle(e,1)}}> </div>
					<div className="boxes" ref={box2} onClick={(e)=>{toggle(e,2)}}> </div>
				</div>
				<div className="row2"> 
					<div className="boxes" ref={box3} onClick={(e)=>{toggle(e,3)}}> </div>
					<div className="boxes" ref={box4} onClick={(e)=>{toggle(e,4)}}> </div>
					<div className="boxes" ref={box5} onClick={(e)=>{toggle(e,5)}}> </div>
				</div>
				<div className="row3"> 
					<div className="boxes" ref={box6} onClick={(e)=>{toggle(e,6)}}> </div>
					<div className="boxes" ref={box7} onClick={(e)=>{toggle(e,7)}}> </div>
					<div className="boxes" ref={box8} onClick={(e)=>{toggle(e,8)}}> </div>
				</div>
			</div>
			<button className="reset" onClick={()=>{reset()}}>Reset</button>
		</div>
	)
}


export default TicTacToe