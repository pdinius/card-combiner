import React from 'react';
import { PokemonType } from '../../assets/data';

interface CardProps {
  symbol: PokemonType;
  value: number;
}

export function Card(myData: CardProps) {
  return <>{myData.symbol}</>;
}