import React from 'react';
import { NativeRouter, Route, Routes } from 'react-router-native';
import Asia from './component/Asia/Asia';
import ExploreWorld from './component/ExploreWorld/ExploreWorld';
import Home from './component/Home/Home/Home';

export default function App() {
  return (
    <NativeRouter>
      <Routes>
        <Route exact path="/" element={<Home></Home>} />
        <Route exact path="/explore" element={<ExploreWorld></ExploreWorld>} />
        <Route exact path="/asia" element={<Asia></Asia>} />
      </Routes>
    </NativeRouter>
  );
}