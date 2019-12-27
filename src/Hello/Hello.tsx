import React from 'react';

type HelloProps = {
  /** 名称 */
  name: string;
  /** この値を「True」に設定すれば、H1タグでレンダリングされます。 */
  big?: boolean;
  /** Helloボタンを押したとき呼び出す関数 */
  onHello?: () => void;
  /** Byeボタンを押したとき呼び出す関数 */
  onBye?: () => void;
};

const Hello = ({ name, big, onHello, onBye }: HelloProps) => {
  return (
    <div>
      {big ? <h1>Hello, {name}!</h1> : <p>Hello, {name}!</p>}
      <div>
        <button onClick={onHello}>Hello</button>
        <button onClick={onBye}>Bye</button>
      </div>
    </div>
  );
};

Hello.defaultProps = {
  big: false
};

export default Hello;
