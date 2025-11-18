"use strict";

// 適当に解ける簡単な微分方程式の例
// link : 0 -> 準備中
// ブラウザ上で直接開いても読み込めるようにグローバル変数で公開する
const integralsData = [
  {
    expression: String.raw`\frac{dy}{dx}+y=0`,
    link: 0,
    tags: ['1階線形', '斉次', '定数係数'],
    difficulty: '初級'
  },
  {
    expression: String.raw`\frac{dy}{dx}=x-y`,
    link: 0,
    tags: ['1階線形', '非斉次', '定数係数'],
    difficulty: '初級'
  },
  {
    expression: String.raw`\frac{d^2y}{dx^2}+y=0`,
    link: 0,
    tags: ['2階線形', '斉次', '定数係数'],
    difficulty: '初級'
  },
  {
    expression: String.raw`\frac{d^2y}{dx^2}-4y=0`,
    link: 0,
    tags: ['2階線形', '斉次', '定数係数'],
    difficulty: '初級'
  },
  {
    expression: String.raw`\frac{d^2y}{dx^2}+2\frac{dy}{dx}+y=0`,
    link: 0,
    tags: ['2階線形', '斉次', '定数係数'],
    difficulty: '中級'
  },
  {
    expression: String.raw`\frac{d^2y}{dx^2}-\frac{dy}{dx}-2y=0`,
    link: 0,
    tags: ['2階線形', '斉次', '定数係数'],
    difficulty: '中級'
  },
  {
    expression: String.raw`\frac{d^2y}{dx^2}+4\frac{dy}{dx}+13y=0`,
    link: 0,
    tags: ['2階線形', '斉次', '定数係数'],
    difficulty: '中級'
  },
  {
    expression: String.raw`\frac{dy}{dx}=y(1-y)`,
    link: 0,
    tags: ['1階非線形', 'ロジスティック'],
    difficulty: '中級'
  },
  {
    expression: String.raw`\frac{dy}{dx}=xy`,
    link: 0,
    tags: ['1階線形', '可分形'],
    difficulty: '初級'
  },
  {
    expression: String.raw`\frac{dy}{dx}+3y=e^{2x}`,
    link: 0,
    tags: ['1階線形', '非斉次', '定数係数'],
    difficulty: '初級'
  },
  {
    expression: String.raw`x\frac{dy}{dx}+y=x^2`,
    link: 0,
    tags: ['1階線形', '非斉次', '可分形'],
    difficulty: '中級'
  },
  {
    expression: String.raw`\frac{d^2y}{dx^2}=\sin x`,
    link: 0,
    tags: ['2階線形', '非斉次', '定数係数'],
    difficulty: '初級'
  },
  {
    expression: String.raw`\frac{d^2y}{dx^2}+y=\cos x`,
    link: 0,
    tags: ['2階線形', '非斉次', '定数係数'],
    difficulty: '中級'
  },
  {
    expression: String.raw`x^2\frac{d^2y}{dx^2}+x\frac{dy}{dx}-y=0`,
    link: 0,
    tags: ['2階線形', '斉次', 'オイラー型'],
    difficulty: '中級'
  },
  {
    expression: String.raw`x^2\frac{d^2y}{dx^2}-3x\frac{dy}{dx}+4y=0`,
    link: 0,
    tags: ['2階線形', '斉次', 'オイラー型'],
    difficulty: '上級'
  },
  {
    expression: String.raw`\frac{d^2y}{dx^2}+\frac{dy}{dx}=e^{-x}`,
    link: 0,
    tags: ['2階線形', '非斉次', '定数係数'],
    difficulty: '中級'
  },
  {
    expression: String.raw`\frac{dy}{dx}=\sin x - y`,
    link: 0,
    tags: ['1階線形', '非斉次', '定数係数'],
    difficulty: '初級'
  },
  {
    expression: String.raw`\frac{dy}{dx}=\frac{y}{x}+\frac1{x^2}`,
    link: 0,
    tags: ['1階線形', '非斉次', '可分形'],
    difficulty: '中級'
  },
  {
    expression: String.raw`\frac{d^2y}{dx^2}-y = e^{x}`,
    link: 0,
    tags: ['2階線形', '非斉次', '定数係数'],
    difficulty: '中級'
  },
  {
    expression: String.raw`\frac{d^2y}{dx^2}+9y = 3\sin 3x`,
    link: 0,
    tags: ['2階線形', '非斉次', '定数係数'],
    difficulty: '上級'
  }
];

// ES modules (import/export) は file:// で開いた際に CORS 制約に引っかかるため、
// グローバルに微分方程式データを展開して通常の <script> から参照させる。
window.integralsData = integralsData;
