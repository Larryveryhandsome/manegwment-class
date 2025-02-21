const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

const courses = [
  { id: 1, title: "HTML 入門", day: 1, topic: "前端開發", description: "學習 HTML 標籤與結構。", image: "/images/html.jpg" },
  { id: 2, title: "CSS 基礎", day: 2, topic: "前端開發", description: "學習 CSS 選擇器與樣式設定。", image: "/images/css.jpg" },
  { id: 3, title: "Python 入門", day: 1, topic: "程式設計", description: "學習 Python 基礎語法。", image: "/images/python.jpg" }
];

app.get('/api/courses', (req, res) => {
  res.json(courses);
});

app.listen(PORT, () => {
  console.log(`伺服器運行於 http://localhost:${PORT}`);
});
