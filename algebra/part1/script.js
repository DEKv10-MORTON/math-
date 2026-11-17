// 1. ฟังก์ชันคำนวณค่าพหุนาม P(c) ตามทฤษฎีบทเศษเหลือ
function runPolynomialTest() {
  const A = parseFloat(document.getElementById('polyA').value) || 0;
  const B = parseFloat(document.getElementById('polyB').value) || 0;
  const C = parseFloat(document.getElementById('polyC').value) || 0;
  const D = parseFloat(document.getElementById('polyD').value) || 0;
  const c = parseFloat(document.getElementById('valC').value) || 0;
  const outputDiv = document.getElementById('poly-result');

  // คำนวณ P(c) = A*c^3 + B*c^2 + C*c + D
  const result = A * Math.pow(c, 3) + B * Math.pow(c, 2) + C * c + D;

  let html = `<strong>ผลการคำนวณ:</strong><br>`;
  html += `• พหุนาม: P(x) = ${A}x<sup>3</sup> + (${B})x<sup>2</sup> + (${C})x + (${D})<br>`;
  html += `• นำไปหารด้วย (x - ${c}) โดยแทนค่า x = ${c}<br>`;
  html += `• เศษเหลือจากการหาร P(${c}) = <span style="color: #38bdf8; font-size: 1.2rem;"><strong>${result}</strong></span><br>`;

  if (result === 0) {
    html += `<br><span style="color: #34d399;">🎉 แจ๊คพอต! P(${c}) = 0 แปลว่า (x - ${c}) เป็นตัวประกอบของ P(x) ลงตัวพอดี!</span>`;
  } else {
    html += `<br><span style="color: #fbbf24;">💡 เศษเหลือไม่ใช่ 0 แสดงว่า (x - ${c}) หารไม่ลงตัวครับ</span>`;
  }

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

  // โจทย์: P(x) = x^3 - 3x^2 + x + 5 หารด้วย x + 1 (แปลว่าแทน x = -1)
  // P(-1) = (-1)^3 - 3(-1)^2 + (-1) + 5 = -1 - 3 - 1 + 5 = 0 พอดีเป๊ะ!
  if (btn.innerText.startsWith("0")) {
    btn.style.backgroundColor = 'rgba(52, 211, 153, 0.2)';
    btn.style.borderColor = '#34d399';
    feedback.style.color = '#34d399';
    feedback.innerHTML = '🎉 ถูกต้องเยี่ยมยอด! เพราะ P(-1) = (-1)³ - 3(-1)² + (-1) + 5 = 0 พอดี เศษเหลือจึงเป็น 0!';
  } else {
    btn.style.backgroundColor = 'rgba(248, 113, 113, 0.2)';
    btn.style.borderColor = '#f87171';
    feedback.style.color = '#f87171';
    feedback.innerHTML = '❌ ยังไม่ถูกต้องครับ ลองแทนค่า x = -1 ลงในพหุนามดูอีกรอบนะ!';
  }
}

// รันตัวอย่างเริ่มต้นเมื่อเปิดหน้าเว็บ
window.onload = function() {
  runPolynomialTest();
};