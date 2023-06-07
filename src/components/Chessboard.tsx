import React from 'react';
import './Chessboard.css'

const boardrank=[1,2,3,4,5,6,7,8];
const boardfile=["a","b","c","d","e","f","g","h"];

export default function Chessboard(){
    let board= [];
    for(let j=boardfile.length-1;j>=0;j--){
         for(let i=0; i<boardrank.length;i++){
            if((i+j+2)%2 ===0 ){
                board.push(<div className='black-tile' >{boardrank[j]}{boardfile[i]} </div> )
            }else{
                board.push(<div className='white-tile' >{boardrank[j]}{boardfile[i]} </div> )
            }
           

        }
    }
    return <div id= "chessboard"> {board}   </div>
}