// 1. ฟังก์ชันคำนวณผลบวกและผลคูณรากตามสูตรของเวียด
function runVietaCalc() {
  const a = parseFloat(document.getElementById('eqA').value);
  const b = parseFloat(document.getElementById('eqB').value);
  const c = parseFloat(document.getElementById('eqC').value);
  const outputDiv = document.getElementById('vieta-result');

  if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0) {
    outputDiv.innerHTML = '<span style="color: #f87171;">⚠️ กรุณาใส่ตัวเลขให้ครบ และค่า a ต้องไม่เป็น 0 ครับ</span>';
    return;
  }

  // คำนวณผลบวกราก = -b/a และผลคูณราก = c/a
  const sumRoots = -b / a;
  const prodRoots = c / a;

  let html = `<strong>ผลการวิเคราะห์สมการ ${a}x<sup>2</sup> + (${b})x + (${c}) = 0:</strong><br>`;
  html += `• ผลบวกของราก (r<sub>1</sub> + r<sub>2</sub>) = -b / a = <span style="color: #38bdf8;"><strong>${sumRoots}</strong></span><br>`;
  html += `• ผลคูณของราก (r<sub>1</sub>r<sub>2</sub>) = c / a = <span style="color: #34d399;"><strong>${prodRoots}</strong></span><br>`;

  // คำนวณ r1^2 + r2^2 จาก (r1 + r2)^2 - 2r1r2
  const sumOfSquares = Math.pow(sumRoots, 2) - (2 * prodRoots);
  html += `• ค่าของกำลังสองของรากบวกกัน (r<sub>1</sub><sup>2</sup> + r<sub>2</sub><sup>2</sup>) = <span style="color: #fbbf24;"><strong>${sumOfSquares}</strong></span>`;

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

  // โจทย์: x^2 - 7x + 10 = 0 มี r1 + r2 = 7, r1*r2 = 10
  // r1^2 + r2^2 = (r1 + r2)^2 - 2(r1*r2) = 7^2 - 2(10) = 49 - 20 = 29
  if (isCorrect) {
    btn.style.backgroundColor = 'rgba(52, 211, 153, 0.2)';
    btn.style.borderColor = '#34d399';
    feedback.style.color = '#34d399';
    feedback.innerHTML = '🎉 ถูกต้องเยี่ยมยอด! จากสูตร r<sub>1</sub><sup>2</sup> + r<sub>2</sub><sup>2</sup> = (r<sub>1</sub> + r<sub>2</sub>)<sup>2</sup> - 2(r<sub>1</sub>r<sub>2</sub>) = 7<sup>2</sup> - 2(10) = 49 - 20 = 29 พอดี!';
    if (window.MathJax) MathJax.typesetPromise([feedback]);
  } else {
    btn.style.backgroundColor = 'rgba(248, 113, 113, 0.2)';
    btn.style.borderColor = '#f87171';
    feedback.style.color = '#f87171';
    feedback.innerHTML = '❌ ยังไม่ถูกต้องครับ ลองใช้สูตร (r<sub>1</sub> + r<sub>2</sub>)<sup>2</sup> - 2(r<sub>1</sub>r<sub>2</sub>) ดูนะ!';
  }
}

// รันตัวอย่างเริ่มต้นเมื่อเปิดหน้าเว็บ
window.onload = function() {
  runVietaCalc();
};