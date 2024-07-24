/*eslint-disable*/

//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  let post = '블로그제목';
  let [title,nameChange] = useState(['양현동','김다운']);
  let [title2,setTitle2] = useState(['남자코트 추천','강남 우동맛집','파이썬독학']);

  let [favorite,add] = useState(0);
  let [favorite2,add2] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [modalNum,setModalNum] = useState(0);

  let [text,textInput] = useState('');

  // let Temp2 =[];


  // for(let i=0;i<title2.length;i++){
  //   Temp2.push (
  //     <div className="list" key ={i}>
  //       <h4>{title2[i]} <span onClick={() =>{
  //         let copy = [...favorite2];
  //         copy[i]=copy[i]+1;
  //         add2(copy)
  //         }}>👍</span> {i} {favorite2[i]}</h4>
  //       <p>2월 17일 발행</p>
  //     </div>
  //   )
  // }


  function titleChange(){
    let copy =[...title]
    copy[0]='다시양현동';
    nameChange(copy);
  }

  //원본 보존 불가
  
  // function titleChange(){
  //   title[0]='다시양현동';
  //   nameChange([...title]);
  // }

  function modalView(){
    if(modal==true){
      setModal(false);
    }else{
      setModal(true);
    }
  }

  [1,2,3].map(function(a){
    return '1233211'
  })
  //함수선언
  function onKey(e){
    if(e.key=='Enter'){
      submit();
    }
  }
  //함수표현식
  const handleOnkeyPress=(e)=>{
      if(e.key=='Enter'){
        submit();
      }
  }

  function submit(){
    title2.unshift(text);
    setTitle2([...title2]);
  }


  return (
    <div className="App">
      {/* <div className="black-nav">
        <h4 id={post}>블로그임</h4>
      </div>
      <h4 style={ {color : 'blue', fontSize : '30px'}}>{post}<button onClick={titleChange}>제목수정</button></h4>
      <div className="list">
        <h4>{title[0]} <span onClick={() =>{add(favorite+1)}}>👍</span> {favorite} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[0]}<span onClick={()=>{nameChange(title=['변경사항저장','변경사항저장'])}}>✔</span></h4>
        <p>2월 17일 발행</p>
      </div> */}
      <h4 style={{background:'yellow'}}>ReactBlog</h4>
      {
        title2.map(function(a,i){
          return (
            <div className="list" key ={i}>
              <h4 onClick={()=>{setModal(!modal); setModalNum(i);}}>{title2[i]} 
              <span onClick={(e) =>{
                e.stopPropagation();
                let copy = [...favorite2];
                copy[i]=copy[i]+1;
                add2(copy)
                }}>👍</span> {favorite2[i]} 
                <button onClick={(e)=>{
                  e.stopPropagation();
                  title2.splice(i,1);
                  setTitle2([...title2]);
                }}>삭제</button></h4>
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }
      <input onChange={(e)=>{
        textInput(e.target.value);
      }}
            onKeyDown={onKey}
      ></input>
      <button onClick={submit}>선택</button>

       {/* {Temp2} */}

      {/* <Temp></Temp>

    <button onClick={modalView}>모달창표출버튼</button>*/}
      {
        modal==true ? <Modal color={'yellow'} param={title2} setTitle2={setTitle2} modalNum={modalNum}/>:null
      } 

    </div>
  );
}

// const Temp = () =>{
//   return(
//   <>
//    <div className="modal">
//       <h4>제목테스트</h4>
//       <p>날짜</p>
//       <p>상세내용</p>
//     </div>
//     <div></div>
//   </>
//   )
// }

function Modal(props){
        //내가 궁금해서 해본 소스
        // let [title2,setTitle1]=useState([]);
        // if(title2.length!=3){
        //   props.param.map(function(a){
        //     title2.push(a);
        //   })
        // }
        // console.log("start");
        return(
          <div className="modal" style={{background:props.color}}>
            <h4>{props.param[props.modalNum]}</h4>
            <p>날짜</p>
            <p>상세내용</p>
            { <button onClick={()=>{
              props.param[0]=props.param[1];
              props.setTitle2([...props.param])}}>글수정</button>
              
              //내가 궁금해서 해본 소스
              // title2[0]=title2[1];
              // setTitle1([...title2])}}>글수정</button>
            }
          </div>
      )
}

export default App;
