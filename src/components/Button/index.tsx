import React, { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor: string;
  children: React.ReactNode;
}

export function Button({ bgColor, children, ...rest }: ButtonProps) {
  return (
    <S.Button
      {...(bgColor && { style: { backgroundColor: bgColor } })}
      {...rest}
    >
      {children}
    </S.Button>
  );
}
