import React, { useState } from 'react';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import AboutScreen from './screens/AboutScreen';

export default function App() {
  const [tela, setTela] = useState('Home');

  if (tela === 'Home') {
    return <HomeScreen navegar={setTela} />;
  }
  if (tela === 'Details') {
    return <DetailsScreen navegar={setTela} />;
  }
  if (tela === 'About') {
    return <AboutScreen navegar={setTela} />;
  }

  return null;
}
