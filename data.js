"use strict";

// 分類: 同次形 / 定数変化法 / ベルヌーイ型 / リッカチ型 / ダランベール型 /
// その他基礎的な形（例: 変数分離形、オイラー型など）。1問につきタグは1つ。
// link : 0 -> 準備中
// ブラウザ上で直接開いても読み込めるようにグローバル変数で公開する
const integralsData = [
  {
    expression: String.raw`\frac{\mathrm{d}y}{\mathrm{d}x} + y = 0`,
    link: 0,
    tags: ['線形'],
    difficulty: '初級'
  },
  {
    expression: String.raw`\frac{\mathrm{d}^2 y}{\mathrm{d}x^2} + y = 0`,
    link: 0,
    tags: ['線形'],
    difficulty: '初級'
  },
  {
    expression: String.raw`x\frac{\mathrm{d}y}{\mathrm{d}x} + y = 0`,
    link: 0,
    tags: ['変数分離形'],
    difficulty: '初級'
  },
  {
    expression: String.raw`\frac{\mathrm{d}y}{\mathrm{d}x} + 3y = e^{2x}`,
    link: 0,
    tags: ['定数変化法'],
    difficulty: '初級'
  },
  {
    expression: String.raw`\frac{\mathrm{d}y}{\mathrm{d}x} + \frac{1}{x}y = x^2`,
    link: 0,
    tags: ['定数変化法'],
    difficulty: '中級'
  },
  {
    expression: String.raw`\frac{\mathrm{d}^2 y}{\mathrm{d}x^2} + 4y = \sin 2x`,
    link: 0,
    tags: ['定数変化法'],
    difficulty: '中級'
  },
  {
    expression: String.raw`2x\frac{\mathrm{d}y}{\mathrm{d}x}+y-3xy^2=0`,
    link: 0,
    tags: ['ベルヌーイ型'],
    difficulty: '中級'
  },
  {
    expression: String.raw`\frac{\mathrm{d}y}{\mathrm{d}x} = (y-4x+1)^2`,
    link: 0,
    tags: ['リッカチ型'],
    difficulty: '上級'
  },
  {
    expression: String.raw`y = 2x\frac{\mathrm{d}y}{\mathrm{d}x}+\left(\frac{\mathrm{d}y}{\mathrm{d}x}\right)^2`,
    link: 0,
    tags: ['ダランベール型'],
    difficulty: '上級'
  },
  {
    expression: String.raw`\frac{\mathrm{d}y}{\mathrm{d}x} = x y`,
    link: 0,
    tags: ['変数分離形'],
    difficulty: '初級'
  },
  {
    expression: String.raw`\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{1}{y+x}`,
    link: 0,
    tags: ['変数分離形'],
    difficulty: '中級'
  },
  {
    expression: String.raw`x^2\frac{\mathrm{d}^2 y}{\mathrm{d}x^2} + x\frac{\mathrm{d}y}{\mathrm{d}x} - y = 0`,
    link: 0,
    tags: ['オイラー型'],
    difficulty: '中級'
  },
  {
    expression: String.raw`\frac{\mathrm{d}^2 y}{\mathrm{d}x^2} + 2\frac{\mathrm{d}y}{\mathrm{d}x} + y = 0`,
    link: 0,
    tags: ['線形'],
    difficulty: '中級'
  },
  {
    expression: String.raw`\frac{\mathrm{d}y}{\mathrm{d}x}=\frac{x^2+y^2}{xy}`,
    link: 0,
    tags: ['同次形'],
    difficulty: '中級'
  },
  {
    expression: String.raw`\frac{\mathrm{d}y}{\mathrm{d}x} = \sin x - y`,
    link: 0,
    tags: ['定数変化法'],
    difficulty: '初級'
  },
  {
    expression: String.raw`\frac{\mathrm{d}^2 y}{\mathrm{d}x^2} - y = e^{x}`,
    link: 0,
    tags: ['定数変化法'],
    difficulty: '中級'
  },
  {
    expression: String.raw`\frac{\mathrm{d} y}{\mathrm{d}x}+2xy-x^3y^2=0`,
    link: 0,
    tags: ['ベルヌーイ型'],
    difficulty: '上級'
  },
  {
    expression: String.raw`x\frac{\mathrm{d} y}{\mathrm{d}x}+\frac1{\frac{\mathrm{d} y}{\mathrm{d}x}}-y=0`,
    link: 0,
    tags: ['その他'],
    difficulty: '上級'
  },
  {
    expression: String.raw`\frac{\mathrm{d} y}{\mathrm{d}x}-\frac{y}x-\frac{y^3}x=0`,
    link: 0,
    tags: ['その他'],
    difficulty: '中級'
  },
  {
    expression: String.raw`(x+y-1)\frac{\mathrm{d} y}{\mathrm{d}x}-x+y-1=0`,
    link: 0,
    tags: ['同次形'],
    difficulty: '中級'
  },
  {
    expression: String.raw`\frac{\mathrm{d}}{\mathrm{d}x}\begin{pmatrix}y_1 \\ y_2 \end{pmatrix}=\begin{pmatrix}1 & -1 \\ 1 & 3 \end{pmatrix}\begin{pmatrix}y_1 \\ y_2 \end{pmatrix}`,
    link: 0,
    tags: ['線形'],
    difficulty: '上級'
  },
  {
    expression: String.raw`\frac{\mathrm{d}}{\mathrm{d}x}\begin{pmatrix}y_1 \\ y_2 \end{pmatrix}=\begin{pmatrix}1 & -1 \\ 1 & 3 \end{pmatrix}\begin{pmatrix}y_1 \\ y_2 \end{pmatrix}`,
    link: 0,
    tags: ['変数分離形'],
    difficulty: '上級'
  },
];

// ES modules (import/export) は file:// で開いた際に CORS 制約に引っかかるため、
// グローバルに微分方程式データを展開して通常の <script> から参照させる。
window.integralsData = integralsData;
