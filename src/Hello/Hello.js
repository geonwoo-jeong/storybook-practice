import React from 'react';
import PropTypes from 'prop-types';

/**
 * Helloを見せたい場合、Hello Componentを使ってください。
 *
 * - `big`を`true` に設定すれば、**大きく**表示されます。
 * - `onHello`と`onBye` propsに設定し、ボタンをクリックした時、呼び出す関数の指定が可能です。
 */
const Hello = ({ name, big, onHello, onBye }) => {
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

Hello.propTypes = {
  /** 名称 */
  name: PropTypes.string.isRequired,
  /** この値を「True」に設定すれば、H1タグでレンダリングされます。 */
  big: PropTypes.bool,
  /** Helloボタンを押したとき呼び出す関数 */
  onHello: PropTypes.func,
  /** Byeボタンを押したとき呼び出す関数 */
  onBye: PropTypes.func
};

export default Hello;
