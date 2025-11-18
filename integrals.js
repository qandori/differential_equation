import {data} from './data.js';

// メインページ以外では処理しない
const showButton = document.getElementById('show');
const equation = document.getElementById('eq');
const answer = document.getElementById('link');
const answerContainer = document.getElementById('answer');
const tagList = document.getElementById('tag-filters');

if (showButton && equation && answer && answerContainer && tagList) {
  const activeTags = new Set();

  // 利用可能なタグ一覧を生成（flatMap 非対応ブラウザ考慮で reduce を使用）
  const tags = Array.from(
    new Set(
      data.reduce((all, item) => {
        item.tags.forEach(t => all.push(t));
        return all;
      }, [])
    )
  ).sort();
  tags.forEach(tag => {
    const label = document.createElement('label');
    label.className = 'tag-filter';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = tag;
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        activeTags.add(tag);
      } else {
        activeTags.delete(tag);
      }
    });

    const tagName = document.createElement('span');
    tagName.textContent = tag;

    label.appendChild(checkbox);
    label.appendChild(tagName);
    tagList.appendChild(label);
  });

  const getFilteredData = () => {
    if (activeTags.size === 0) {
      return data;
    }
    return data.filter(item => item.tags.some(tag => activeTags.has(tag)));
  };

  function fnc() {
    const pool = getFilteredData();

    if (pool.length === 0) {
      equation.textContent = '該当する積分がありません。チェックを減らしてください。';
      answerContainer.style.display = 'none';
      return;
    }

    const num = Math.floor(Math.random() * pool.length); // integrals の要素の番号をランダムに選ぶ
    const integral = pool[num];
    equation.innerHTML = '$$' + integral.expression + '$$';

    // 解説表示
    answerContainer.style.display = 'block';
    if (integral.link === 0) {
      answer.textContent = '準備中';
      answer.removeAttribute('href');
    }
    else {
      answer.textContent = 'Link';
      answer.setAttribute('href', integral.link);
    }

    // KaTeX レンダー
    renderMathInElement(document.body,
      {
        delimiters: [
          {left: "$$", right: "$$", display: true},
          {left: "\\[", right: "\\]", display: true},
          {left: "\\(", right: "\\)", display: false}
        ]
      }
    );
  }

  showButton.onclick = fnc;
}
