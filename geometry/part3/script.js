// 1. ฟังก์ชันคำนวณจุดเซนทรอยด์ (Centroid: ค่าเฉลี่ยพิกัด x และ y ทั้งสามจุด)
function runCentroidCalc() {
  const x1 = parseFloat(document.getElementById('x1').value);
  const y1 = parseFloat(document.getElementById('y1').value);
  const x2 = parseFloat(document.getElementById('x2').value);
  const y2 = parseFloat(document.getElementById('y2').value);
  const x3 = parseFloat(document.getElementById('x3').value);
  const y3 = parseFloat(document.getElementById('y3').value);
  const outputDiv = document.getElementById('triangle-result');

  if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2) || isNaN(x3) || isNaN(y3)) {
    outputDiv.innerHTML = '<span style="color: #f87171;">⚠️ กรุณาใส่พิกัดตัวเลขให้ครบทุกช่องครับ</span>';
    return;
  }

  const gx = (x1 + x2 + x3) / 3;
  const gy = (y1 + y2 + y3) / 3;

  let html = `<strong>ผลการคำนวณพิกัดจุดเซนทรอยด์ (Centroid - G):</strong><br>`;
  html += `• สูตร: G(x, y) = ((x₁ + x₂ + x₃) / 3 , (y₁ + y₂ + y₃) / 3)<br>`;
  html += `• พิกัด Centroid G = <span style="color: #38bdf8;"><strong>(${gx.toFixed(2)}, ${gy.toFixed(2)})</strong></span><br>`;
  html += `• ตรวจสอบ: x = (${x1} + ${x2} + ${x3})/3 = ${gx.toFixed(2)}, y = (${y1} + ${y2} + ${y3})/3 = ${gy.toFixed(2)}`;

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

  // โจทย์: A(1, 2), B(4, 6), C(7, 4) -> x = (1+4+7)/3 = 12/3 = 4, y = (2+6+4)/3 = 12/3 = 4 -> (4, 4)
  if (isCorrect) {
    btn.style.backgroundColor = 'rgba(52, 211, 153, 0.2)';
    btn.style.borderColor = '#34d399';
    feedback.style.color = '#34d399';
    feedback.innerHTML = '🎉 ถูกต้องเยี่ยมยอด! x = (1+4+7)/3 = 4 และ y = (2+6+4)/3 = 4 ได้พิกัด (4, 4) พอดี!';
  } else {
    btn.style.backgroundColor = 'rgba(248, 113, 113, 0.2)';
    btn.style.borderColor = '#f87171';
    feedback.style.color = '#f87171';
    feedback.innerHTML = '❌ ยังไม่ถูกต้องครับ ลองใช้สูตรค่าเฉลี่ยพิกัด (x₁+x₂+x₃)/3 และ (y₁+y₂+y₃)/3 ดูอีกรอบนะ!';
  }
}

// รันตัวอย่างเริ่มต้นเมื่อเปิดหน้าเว็บ
window.onload = function() {
  runCentroidCalc();
};