// メインページ以外では処理しない
const showButton = document.getElementById('show');
const equation = document.getElementById('eq');
const answer = document.getElementById('link');
const answerContainer = document.getElementById('answer');
const tagList = document.getElementById('tag-filters');
const difficultyList = document.getElementById('difficulty-filters');
const tagSelectAll = document.getElementById('tag-select-all');
const tagClear = document.getElementById('tag-clear');
const difficultySelectAll = document.getElementById('difficulty-select-all');
const difficultyClear = document.getElementById('difficulty-clear');

if (
  showButton && equation && answer && answerContainer &&
  tagList && difficultyList &&
  tagSelectAll && tagClear && difficultySelectAll && difficultyClear
) {
  const data = Array.isArray(window.integralsData) ? window.integralsData : [];
  const activeTags = new Set();
  const activeDifficulties = new Set();
  const tagCheckboxes = [];
  const difficultyCheckboxes = [];

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
    tagCheckboxes.push(checkbox);

    const tagName = document.createElement('span');
    tagName.textContent = tag;

    label.appendChild(checkbox);
    label.appendChild(tagName);
    tagList.appendChild(label);
  });

  // 難易度フィルタの生成
  const difficulties = Array.from(
    new Set(data.map(item => item.difficulty).filter(Boolean))
  ).sort();
  difficulties.forEach(level => {
    const label = document.createElement('label');
    label.className = 'tag-filter';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = level;
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        activeDifficulties.add(level);
      } else {
        activeDifficulties.delete(level);
      }
    });
    difficultyCheckboxes.push(checkbox);

    const name = document.createElement('span');
    name.textContent = level;

    label.appendChild(checkbox);
    label.appendChild(name);
    difficultyList.appendChild(label);
  });

  const getFilteredData = () => {
    return data.filter(item => {
      const matchTag =
        activeTags.size === 0 || item.tags.some(tag => activeTags.has(tag));
      const matchDifficulty =
        activeDifficulties.size === 0 || activeDifficulties.has(item.difficulty);
      return matchTag && matchDifficulty;
    });
  };

  const setAllTags = (checked) => {
    tagCheckboxes.forEach(cb => {
      cb.checked = checked;
      if (checked) {
        activeTags.add(cb.value);
      } else {
        activeTags.delete(cb.value);
      }
    });
  };

  const setAllDifficulties = (checked) => {
    difficultyCheckboxes.forEach(cb => {
      cb.checked = checked;
      if (checked) {
        activeDifficulties.add(cb.value);
      } else {
        activeDifficulties.delete(cb.value);
      }
    });
  };

  function fnc() {
    // 解法タグが未選択なら出題しない
    if (activeTags.size === 0) {
      equation.textContent = '解法タグを1つ以上選択してください。';
      answerContainer.style.display = 'none';
      return;
    }

    // 難易度タグが未選択なら出題しない
    if (activeDifficulties.size === 0) {
      equation.textContent = '難易度を1つ以上選択してください。';
      answerContainer.style.display = 'none';
      return;
    }

    const pool = getFilteredData();

    if (pool.length === 0) {
      equation.textContent = '解法タグと難易度の組み合わせに該当する問題がありません。選択を見直してください。';
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

  tagSelectAll.addEventListener('click', () => setAllTags(true));
  tagClear.addEventListener('click', () => setAllTags(false));
  difficultySelectAll.addEventListener('click', () => setAllDifficulties(true));
  difficultyClear.addEventListener('click', () => setAllDifficulties(false));
}
