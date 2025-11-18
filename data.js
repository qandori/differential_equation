"use strict";

// 分類: 同次形 / 定数変化法 / ベルヌーイ型 / リッカチ型 / ダランベール型 /
// その他基礎的な形（例: 変数分離形、オイラー型など）。1問につきタグは1つ。
// link : 0 -> 準備中
// ブラウザ上で直接開いても読み込めるようにグローバル変数で公開する
const integralsData = [
  {
    expression: String.raw`\frac{dy}{dx} + y = 0`,
    link: 0,
    tags: ['同次形(1階線形定数係数)'],
    difficulty: '初級'
  },
  {
    expression: String.raw`\frac{d^2 y}{dx^2} + y = 0`,
    link: 0,
    tags: ['同次形(2階線形定数係数)'],
    difficulty: '初級'
  },
  {
    expression: String.raw`x\frac{dy}{dx} + y = 0`,
    link: 0,
    tags: ['同次形(オイラー型1階)'],
    difficulty: '初級'
  },
  {
    expression: String.raw`\frac{dy}{dx} + 3y = e^{2x}`,
    link: 0,
    tags: ['定数変化法(1階線形)'],
    difficulty: '初級'
  },
  {
    expression: String.raw`\frac{dy}{dx} + \frac{1}{x}y = x^2`,
    link: 0,
    tags: ['定数変化法(変数係数)'],
    difficulty: '中級'
  },
  {
    expression: String.raw`\frac{d^2 y}{dx^2} + 4y = \sin 2x`,
    link: 0,
    tags: ['定数変化法(2階線形定数係数)'],
    difficulty: '中級'
  },
  {
    expression: String.raw`\frac{dy}{dx} = y(1-y)`,
    link: 0,
    tags: ['ベルヌーイ型'],
    difficulty: '中級'
  },
  {
    expression: String.raw`\frac{dy}{dx} = y^2 + x`,
    link: 0,
    tags: ['リッカチ型'],
    difficulty: '上級'
  },
  {
    expression: String.raw`y = x\frac{dy}{dx} + x^2`,
    link: 0,
    tags: ['ダランベール型'],
    difficulty: '上級'
  },
  {
    expression: String.raw`\frac{dy}{dx} = x y`,
    link: 0,
    tags: ['その他(変数分離形)'],
    difficulty: '初級'
  },
  {
    expression: String.raw`\frac{dy}{dx} = \frac{1}{y+x}`,
    link: 0,
    tags: ['その他(変数分離形)'],
    difficulty: '中級'
  },
  {
    expression: String.raw`x^2\frac{d^2 y}{dx^2} + x\frac{dy}{dx} - y = 0`,
    link: 0,
    tags: ['その他(オイラー型2階斉次)'],
    difficulty: '中級'
  },
  {
    expression: String.raw`\frac{d^2 y}{dx^2} + 2\frac{dy}{dx} + y = 0`,
    link: 0,
    tags: ['同次形(2階線形定数係数)'],
    difficulty: '中級'
  },
  {
    expression: String.raw`\frac{dy}{dx} = \sin x - y`,
    link: 0,
    tags: ['定数変化法(1階線形)'],
    difficulty: '初級'
  },
  {
    expression: String.raw`\frac{d^2 y}{dx^2} - y = e^{x}`,
    link: 0,
    tags: ['定数変化法(2階線形定数係数)'],
    difficulty: '中級'
  }
];

// ES modules (import/export) は file:// で開いた際に CORS 制約に引っかかるため、
// グローバルに微分方程式データを展開して通常の <script> から参照させる。
window.integralsData = integralsData;
