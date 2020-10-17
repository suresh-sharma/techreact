import React from 'react';
import './App.css';
import InputElement from './inputText';
import {Shoppinglist} from "./Shoppinglist";
import {Comment} from './Comment';
import Clock from './Clock';
import ButtonEvents from './ButtonEvents';
import CounterButton from './CounterButton';
import Hookcounter from './component/hookcounter'
import HookCounterTwo from './component/HookCounterTwo';
import HookCounterThree from './component/HookCounterThree';
import HookCounterFour from './component/HookCounterFour';
import HookTimer from './component/HookTimer';
import Useform from './component/Useform';
const commentData = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};


function App() {
  return (
    <div className="App"> 
      <section>
        <InputElement></InputElement>
      </section>
      <Shoppinglist name="Socail Media"></Shoppinglist>
      <Comment  date={commentData.date} text={commentData.text} author={commentData.author} ></Comment>
      <Clock></Clock>
      <ButtonEvents></ButtonEvents>
      <CounterButton></CounterButton>
      <Hookcounter></Hookcounter>
      <HookCounterTwo></HookCounterTwo>
      <HookCounterThree></HookCounterThree>
      <HookCounterFour></HookCounterFour>
      <HookTimer></HookTimer>
      <Useform></Useform>
    </div>
  );
}

export default App;
