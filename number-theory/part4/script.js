// ฟังก์ชันหา ห.ร.ม. ด้วยยุคลิด
function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// 1. ฟังก์ชันตรวจสอบสมการไดโอแฟนไทน์
function runDiophantine() {
  const a = parseInt(document.getElementById('eqA').value);
  const b = parseInt(document.getElementById('eqB').value);
  const c = parseInt(document.getElementById('eqC').value);
  const outputDiv = document.getElementById('dio-result');

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    outputDiv.innerHTML = '<span style="color: #f87171;">⚠️ กรุณาใส่ตัวเลขจำนวนเต็มให้ครบทุกช่องครับ</span>';
    return;
  }

  let d = gcd(a, b);
  let isDivisible = (c % d === 0);

  let html = `<strong>ผลการวิเคราะห์สมการ ${a}x + ${b}y = ${c}:</strong><br>`;
  html += `• ห.ร.ม. ของ a และ b คือ gcd(${a}, ${b}) = <strong>${d}</strong><br>`;
  html += `• ตรวจสอบการหารลงตัว: ${c} หารด้วย ${d} ${isDivisible ? '<strong>ลงตัว ✅</strong>' : '<strong>ไม่ลงตัว ❌</strong>'}<br>`;

  if (isDivisible) {
    html += `<br><span style="color: #34d399; font-size: 1.05rem;">🎉 สรุป: สมการนี้มีคำตอบที่เป็นจำนวนเต็มแน่นอน!</span>`;
  } else {
    html += `<br><span style="color: #f87171; font-size: 1.05rem;">❌ สรุป: สมการนี้ไม่มีคำตอบที่เป็นจำนวนเต็ม เพราะ gcd(${a}, ${b}) หาร ${c} ไม่ลงตัว</span>`;
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

  if (isCorrect) {
    btn.style.backgroundColor = 'rgba(52, 211, 153, 0.2)';
    btn.style.borderColor = '#34d399';
    feedback.style.color = '#34d399';
    feedback.innerHTML = '🎉 ถูกต้องเยี่ยมยอด! เพราะ gcd(8, 12) = 4 แต่ 4 หาร 30 ไม่ลงตัว จึงไม่มีคำตอบที่เป็นจำนวนเต็ม!';
  } else {
    btn.style.backgroundColor = 'rgba(248, 113, 113, 0.2)';
    btn.style.borderColor = '#f87171';
    feedback.style.color = '#f87171';
    feedback.innerHTML = '❌ ยังไม่ถูกต้องครับ ลองเช็ค ห.ร.ม. ของสัมประสิทธิ์หน้า x กับ y ว่าหารตัวเลขฝั่งขวาลงตัวไหมนะ!';
  }
}

// รันตัวอย่างเริ่มต้นเมื่อเปิดหน้าเว็บ
window.onload = function() {
  runDiophantine();
};