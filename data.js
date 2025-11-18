"use strict";

// integrals : { expression, link, tags }
// link : 0 -> 準備中
export const data = [
  {
    expression: String.raw`\int_0^{\frac{\pi}2}\cos\log\tan x \ dx`,
    link: 0,
    tags: ['置換', '三角・双曲線の恒等変形']
  },
  {
    expression: String.raw`\int_0^\infty\frac{e^{\frac16x}+e^{\frac56x}-2e^{\frac12x}}{x(e^x-1)}\ dx`,
    link: 0,
    tags: ['級数展開']
  },
  {
    expression: String.raw`\int_0^\infty\frac{x^2e^{\frac12x}}{e^x+1}\ dx`,
    link: 0,
    tags: ['級数展開']
  },
  {
    expression: String.raw`\int_0^\infty\frac{1-\text{tanh}x}{\sqrt{\text{tanh}x}}\ dx`,
    link: 0,
    tags: ['置換', '三角・双曲線の恒等変形']
  },
  {
    expression: String.raw`\int_0^\infty\frac{\sin \log \tan x}{\log \tan x}\ dx`,
    link: 0,
    tags: ['フーリエ・直交展開', '三角・双曲線の恒等変形']
  },
  {
    expression: String.raw`\int_0^\infty\frac1{\sqrt{x}(x+1)}\ dx`,
    link: 0,
    tags: ['置換', 'ベータ・ガンマ']
  },
  {
    expression: String.raw`\int_0^1 \frac{\log x}{\sqrt{x}(1+x)}\ dx`,
    link: 0,
    tags: ['部分積分', 'ベータ・ガンマ']
  },
  {
    expression: String.raw`\int\prod_{i=0}^n\frac1{\log^ix}\ dx`,
    link: 0,
    tags: ['置換']
  },
  {
    expression: String.raw`\int_0^{\frac{\pi}2}\frac{\cos \log \tan x\log \cos x}{\sin^2 x} \ dx`,
    link: 0,
    tags: ['積分の中で微分', '三角・双曲線の恒等変形']
  },
  {
    expression: String.raw`\int_0^1 x\log \log \frac1x \ dx`,
    link: 0,
    tags: ['積分の中で微分', 'ベータ・ガンマ']
  },
  {
    expression: String.raw`\int_{\frac{\pi}4}^{\frac{\pi}2}\frac{\cos x\sqrt{\log \tan x}}{\sin^3x}\ dx`,
    link: 0,
    tags: ['置換', '三角・双曲線の恒等変形']
  },
  {
    expression: String.raw`\int_0^\infty\frac{\log x\log (1+x)}{x(1+x)}\ dx`,
    link: 0,
    tags: ['部分積分', '級数展開']
  },
  {
    expression: String.raw`\int_0^1 \frac{\log x\log (1+x)}{x(1-x)}\ dx`,
    link: 0,
    tags: ['部分積分', '級数展開']
  },
  {
    expression: String.raw`\int_0^{\frac{\pi}2}\frac{\log \cos x}{\tan x}\ dx`,
    link: 0,
    tags: ['置換', '積分の中で微分', '三角・双曲線の恒等変形']
  },
  {
    expression: String.raw`\int_0^\infty\frac{x\log \text{tanh}x}{\text{tanh}x }\ dx`,
    link: 0,
    tags: ['級数展開', '三角・双曲線の恒等変形']
  },
  {
    expression: String.raw`\int_0^{\frac1{\sqrt{3}}}\frac{x\text{arctan}x}{(1-x^2)\sqrt{1-2x^2}}\ dx`,
    link: 0,
    tags: ['置換']
  },
  {
    expression: String.raw`\int_0^{\pi}\log\left(\frac54+\cos x\right)\ dx`,
    link: 0,
    tags: ['フーリエ・直交展開']
  },
  {
    expression: String.raw`\int_0^\infty\sqrt{-\log(1-e^x)}\ dx`,
    link: 0,
    tags: ['級数展開', '置換']
  },
  {
    expression: String.raw`\int_0^2\frac1{(x+2)\sqrt{x+1}} dx`,
    link: 0,
    tags: ['置換']
  },
  {
    expression: String.raw`\int_1^2 \frac1{x\sqrt{1-\log^2x}} dx`,
    link: 0,
    tags: ['置換']
  }
];
