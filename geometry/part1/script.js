// 1. ฟังก์ชันคำนวณส่วนแบ่งฐาน BD และ DC จากทฤษฎีบทเส้นแบ่งครึ่งมุม
function runAngleBisector() {
  const ab = parseFloat(document.getElementById('sideAB').value);
  const ac = parseFloat(document.getElementById('sideAC').value);
  const bc = parseFloat(document.getElementById('sideBC').value);
  const outputDiv = document.getElementById('geo-result');

  if (isNaN(ab) || isNaN(ac) || isNaN(bc) || ab <= 0 || ac <= 0 || bc <= 0) {
    outputDiv.innerHTML = '<span style="color: #f87171;">⚠️ กรุณาใส่ความยาวด้านเป็นจำนวนบวกให้ครบครับ</span>';
    return;
  }

  // เช็คอสมการสามเหลี่ยม (ผลบวก 2 ด้านต้องมากกว่าด้านที่ 3)
  if (ab + ac <= bc || ab + bc <= ac || ac + bc <= ab) {
    outputDiv.innerHTML = '<span style="color: #f87171;">❌ ความยาวด้านทั้ง 3 ไม่สามารถประกอบเป็นรูปสามเหลี่ยมได้ครับ</span>';
    return;
  }

  // จาก AB / AC = BD / DC และ BD + DC = BC
  const bd = (ab / (ab + ac)) * bc;
  const dc = (ac / (ab + ac)) * bc;

  let html = `<strong>ผลการคำนวณทฤษฎีบทเส้นแบ่งครึ่งมุม (BD : DC = ${ab} : ${ac}):</strong><br>`;
  html += `• ความยาวส่วนแบ่งด้านซ้าย (BD) = <span style="color: #38bdf8;"><strong>${bd.toFixed(2)}</strong></span> หน่วย<br>`;
  html += `• ความยาวส่วนแบ่งด้านขวา (DC) = <span style="color: #34d399;"><strong>${dc.toFixed(2)}</strong></span> หน่วย<br>`;
  html += `• ตรวจสอบผลรวม: ${bd.toFixed(2)} + ${dc.toFixed(2)} = ${(bd + dc).toFixed(2)} (ตรงกับฐาน BC = ${bc})`;

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

  // โจทย์: AB/AC = BD/DC -> 8/12 = 4/DC -> DC = (4 * 12) / 8 = 6
  if (isCorrect) {
    btn.style.backgroundColor = 'rgba(52, 211, 153, 0.2)';
    btn.style.borderColor = '#34d399';
    feedback.style.color = '#34d399';
    feedback.innerHTML = '🎉 ถูกต้องเยี่ยมยอด! จาก AB/AC = BD/DC จะได้ 8/12 = 4/DC ดังนั้น DC = 6 หน่วย!';
  } else {
    btn.style.backgroundColor = 'rgba(248, 113, 113, 0.2)';
    btn.style.borderColor = '#f87171';
    feedback.style.color = '#f87171';
    feedback.innerHTML = '❌ ยังไม่ถูกต้องครับ ลองตั้งสัดส่วน AB / AC = BD / DC ดูอีกครั้งนะ!';
  }
}

// รันตัวอย่างเริ่มต้นเมื่อเปิดหน้าเว็บ
window.onload = function() {
  runAngleBisector();
};