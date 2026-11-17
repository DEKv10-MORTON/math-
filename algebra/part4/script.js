// 1. ฟังก์ชันวิเคราะห์ช่วงคำตอบอสมการ (x - r1)(x - r2) < 0 หรือ > 0
function runInequalityTest() {
  let r1 = parseFloat(document.getElementById('rootA').value);
  let r2 = parseFloat(document.getElementById('rootB').value);
  const outputDiv = document.getElementById('ineq-result');

  if (isNaN(r1) || isNaN(r2)) {
    outputDiv.innerHTML = '<span style="color: #f87171;">⚠️ กรุณาใส่ค่ารากทั้งสองให้ครบครับ</span>';
    return;
  }

  // เรียงลำดับรากจากน้อยไปมาก
  if (r1 > r2) {
    let temp = r1;
    r1 = r2;
    r2 = temp;
  }

  let html = `<strong>ผลการวิเคราะห์ช่วงคำตอบของ (x - ${r1})(x - ${r2}):</strong><br>`;
  html += `• จุดวิกฤตบนเส้นจำนวน: x = ${r1} และ x = ${r2}<br>`;
  html += `• ช่วงเครื่องหมาย (จากขวาไปซ้าย + , - , +):<br>`;
  html += `&nbsp;&nbsp;- ช่วงที่มากกว่า ${r2} ➔ เป็นบวก (+)<br>`;
  html += `&nbsp;&nbsp;- ช่วงระหว่าง ${r1} ถึง ${r2} ➔ เป็นลบ (-)<br>`;
  html += `&nbsp;&nbsp;- ช่วงที่น้อยกว่า ${r1} ➔ เป็นบวก (+)<br>`;
  html += `• สรุปคำตอบ:<br>`;
  html += `&nbsp;&nbsp;- ถ้าต้องการ <strong>< 0</strong> (น้อยกว่าศูนย์): ช่วงคำตอบคือ <span style="color: #38bdf8;"><strong>(${r1}, ${r2})</strong></span><br>`;
  html += `&nbsp;&nbsp;- ถ้าต้องการ <strong>> 0</strong> (มากกว่าศูนย์): ช่วงคำตอบคือ <span style="color: #34d399;"><strong>(-\\infty, ${r1}) \\cup (${r2}, \\infty)</strong></span>`;

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

  // โจทย์: x^2 - 4 > 0 -> (x-2)(x+2) > 0 -> คำตอบคือ (-inf, -2) U (2, inf)
  if (isCorrect) {
    btn.style.backgroundColor = 'rgba(52, 211, 153, 0.2)';
    btn.style.borderColor = '#34d399';
    feedback.style.color = '#34d399';
    feedback.innerHTML = '🎉 ถูกต้องเยี่ยมยอด! เพราะ x^2 - 4 = (x-2)(x+2) > 0 เลือกช่วงบวกจะได้ (-∞, -2) ∪ (2, ∞)';
  } else {
    btn.style.backgroundColor = 'rgba(248, 113, 113, 0.2)';
    btn.style.borderColor = '#f87171';
    feedback.style.color = '#f87171';
    feedback.innerHTML = '❌ ยังไม่ถูกต้องครับ ลองแยกตัวประกอบเป็น (x-2)(x+2) > 0 แล้วใช้เส้นจำนวนดูอีกรอบนะ!';
  }
}

// รันตัวอย่างเริ่มต้นเมื่อเปิดหน้าเว็บ
window.onload = function() {
  runInequalityTest();
};