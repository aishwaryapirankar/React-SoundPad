import React from 'react';
import logo from './logo.svg';
import './App.css';

import Box from './Box';
import sound1 from './1.wav';
import sound2 from './2.wav';
import sound3 from './3.wav';
import sound4 from './4.wav';
import sound5 from './5.wav';
import sound6 from './6.wav';
import sound7 from './7.mp3';
import sound8 from './8.wav';
import sound9 from './9.wav';
import sound10 from './10.wav';
import sound11 from './11.mp3';
import sound12 from './12.wav';

function App() {

  return (
    <>
    <h1 id = "heading">SoundPad</h1>
    <div id="allbox">
      <Box text="A" sound = {sound1} />

      <Box text="B" sound = {sound2}/>

      <Box text="C" sound = {sound3}/>

    </div>

    <div id="allbox">
      <Box text="D" sound = {sound4}/>

      <Box text="E" sound = {sound5}/>

      <Box text="F" sound = {sound6}/>

    </div>

    <div id="allbox">
      <Box text="G" sound = {sound7}/>

      <Box text="H" sound = {sound8}/>

      <Box text="I" sound = {sound9}/>

    </div>

    <div id="allbox">
      <Box text="J" sound = {sound10}/>

      <Box text="K" sound = {sound11}/>

      <Box text="L" sound = {sound12}/>

    </div>
    </>
  );
}

export default App;
