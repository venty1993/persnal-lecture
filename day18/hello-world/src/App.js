import logo from './logo.svg';
import './App.css';

function List(prop) {
  return (
    <li className="to-do-list-content">
      <input type="checkbox" />
      <p className="list-text">{prop.내용}</p>
      <p className="list-day">{prop.날짜}</p>
      <button href="#" className="del-button">삭제</button>
    </li>
  )
}

function App() {
  return (
    // js에서 이미 class라는게 있다.
    // 리액트는 html처럼 보이지만 자바스크립트 기반이기떄문에
    // class 대신 className을 이용한다.
    <div className="App">
      <div className="container">
        <div className="add-list-container">
          <h2>할일 추가하기</h2>
          <div className="add-function-wrapper">
            <input type="text" id="add-input" placeholder="할 일을 입력해주세요" />
            <button href="#" id="add-button">추가</button>
          </div>
        </div>
        <div className="to-do-list-container">
          <h2>오늘의 할 일</h2>
          <ul id="to-do-list">
            <List 내용="밥먹기" 날짜="오늘"></List>
            <List 내용="화장실가기" 날짜="내일"></List>
            <List 내용="잠자기" 날짜="매일"></List>
            <List 내용="눕기" 날짜="매시간"></List>
            <List 내용="양치하기" 날짜="ㅋㅋ"></List>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
