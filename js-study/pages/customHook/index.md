```
리액트 기본 예제 훅
```

```
import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
```

```
import React, { useState, useEffect } from 'react';

function FriendListItem(props) {
  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  return (
    <li style={{ color: isOnline ? 'green' : 'black' }}>
      {props.friend.name}
    </li>
  );
}
```

```
API 훅
day 추가 버튼을 누르면 addDay() 함수가 실행되고 fetch()를 통해 서버에 추가할 데이터를 전달한다.
성공하면 '생성이 완료되었다는' alert 창으로 띄운다.
import useFetch from "../hooks/useFetch"
import { useHistory } from "react-router-dom"
export default function CreateDay() {
     const days = useFetch("http://localhost:3001/days")
     const history = useHistory();
     function addDay(){
          fetch(`http://localhost:3001/days/`, {
            method: "POST",
            headers: { "Content-Type": "application/json", },
            body: JSON.stringify({
                 day: days.length + 1 }),
                  }).then(res => {
                       if(res.ok) {
                        alert("생성이 완료되었습니다.")
                         history.push(`/`);
                         }
                    })
                }
        return (
            <div>
                <h3>현재 일수 : {days.length}</h3>
                <button onClick={addDay}>Day 추가</button>
            </div>
        )
    }

```
