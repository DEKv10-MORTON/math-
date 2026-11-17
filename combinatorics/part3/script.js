// ฟังก์ชันคำนวณ Factorial (n!)
function factorial(num) {
  if (num < 0) return 0;
  if (num === 0 || num === 1) return 1;
  let res = 1;
  for (let i = 2; i <= num; i++) res *= i;
  return res;
}

// ฟังก์ชันคำนวณ Combination C(n,r)
function combination(n, r) {
  if (r > n || n < 0 || r < 0) return 0;
  return factorial(n) / (factorial(n - r) * factorial(r));
}

// 1. ฟังก์ชันคำนวณสัมประสิทธิ์ทวินาม C(n, r)
function runBinomialCalc() {
  const n = parseInt(document.getElementById('binomN').value);
  const r = parseInt(document.getElementById('binomR').value);
  const outputDiv = document.getElementById('binom-result');

  if (isNaN(n) || isNaN(r) || n < 0 || r < 0) {
    outputDiv.innerHTML = '<span style="color: #f87171;">⚠️ กรุณาใส่ค่า n และ r เป็นจำนวนเต็มบวกครับ</span>';
    return;
  }

  if (r > n) {
    outputDiv.innerHTML = '<span style="color: #f87171;">❌ ค่าพจน์ r ต้องไม่มากกว่าค่ากำลัง n ครับ</span>';
    return;
  }

  const coeff = combination(n, r);

  let html = `<strong>ผลการคำนวณสัมประสิทธิ์ทวินาม C(${n}, ${r}):</strong><br>`;
  html += `• สูตร: C(n, r) = n! / [(n - r)! × r!]<br>`;
  html += `• พจน์ที่ ${r + 1} ของการกระจายมีสัมประสิทธิ์ = <span style="color: #38bdf8;"><strong>${coeff.toLocaleString()}</strong></span><br>`;
  html += `• รูปแบบพจน์: ${coeff} · x^(${n}-${r}) · y^${r}`;

  outputDiv.innerHTML = html;
}

// 2. ฟังก์ชันเปิด-ปิดเฉลยโจทย์
function toggleSolution(id) {
  const sol = document.getElementById(id);
  sol.classList.toggle('show');
}

// 3. ฟังก์ชันตรวจคำตอบมินิควิซ
function checkQuiz(btn, isCorrect) {
  const feedback = document.getElementById('quiz-feedback');
  const allBtns = document.querySelectorAll('.quiz-options button');

  allBtns.forEach(b => {
    b.style.backgroundColor = '#0f172a';
    b.style.borderColor = '#334155';
  });

  // โจทย์: ผลรวมสัมประสิทธิ์ของ (2x - 3)^5 แทน x = 1, y = 1 -> (2(1) - 3)^5 = (-1)^5 = -1
  if (isCorrect) {
    btn.style.backgroundColor = 'rgba(52, 211, 153, 0.2)';
    btn.style.borderColor = '#34d399';
    feedback.style.color = '#34d399';
    feedback.innerHTML = '🎉 ถูกต้องเยี่ยมยอด! การหาผลรวมสัมประสิทธิ์ทั้งหมดทำได้โดยแทนตัวแปรทุกตัวด้วย 1 จะได้ (2(1) - 3)^5 = (-1)^5 = -1';
  } else {
    btn.style.backgroundColor = 'rgba(248, 113, 113, 0.2)';
    btn.style.borderColor = '#f87171';
    feedback.style.color = '#f87171';
    feedback.innerHTML = '❌ ยังไม่ถูกต้องครับ เทคนิคคือให้แทนค่าตัวแปรทุกตัวในพหุนามด้วย 1 แล้วคำนวณเลขยกกำลังดูอีกรอบนะ!';
  }
}

// รันตัวอย่างเริ่มต้นเมื่อเปิดหน้าเว็บ
window.onload = function() {
  runBinomialCalc();
};