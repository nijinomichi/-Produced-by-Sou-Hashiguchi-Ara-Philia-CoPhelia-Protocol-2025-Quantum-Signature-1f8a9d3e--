// ⚠️ 未整理断片 / UNORGANIZED FRAGMENT
// 出所: メモ (2026-06-28 発見)
// 用途不明 — 整理・検証は後回し

const save = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const load = (key) => {
  const d = localStorage.getItem(key);
  return d ? JSON.parse(d) : null;
};
