// 1. ฟังก์ชันคำนวณความยาวคอร์ดที่ตัดกันในวงกลม (Power of a Point: PA * PB = PC * PD)
function runPowerOfPoint() {
  const pa = parseFloat(document.getElementById('segPA').value);
  const pb = parseFloat(document.getElementById('segPB').value);
  const pc = parseFloat(document.getElementById('segPC').value);
  const outputDiv = document.getElementById('circle-result');

  if (isNaN(pa) || isNaN(pb) || isNaN(pc) || pa <= 0 || pb <= 0 || pc <= 0) {
    outputDiv.innerHTML = '<span style="color: #f87171;">⚠️ กรุณาใส่ความยาวคอร์ดเป็นจำนวนบวกให้ครบครับ</span>';
    return;
  }

  const power = pa * pb;
  const pd = power / pc;

  let html = `<strong>ผลการคำนวณ Power of a Point (PA × PB = PC × PD):</strong><br>`;
  html += `• ค่ากำลังของจุด (PA × PB) = ${pa} × ${pb} = <span style="color: #38bdf8;"><strong>${power}</strong></span><br>`;
  html += `• ความยาวส่วนของคอร์ดที่เหลือ (PD) = ${power} / ${pc} = <span style="color: #34d399;"><strong>${pd.toFixed(2)}</strong></span> หน่วย<br>`;
  html += `• ความยาวคอร์ดรวมทั้งสองเส้น: AB = ${(pa + pb).toFixed(2)} หน่วย, CD = ${(pc + pd).toFixed(2)} หน่วย`;

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

  // โจทย์: AP * PB = CP * PD -> 3 * 8 = 4 * PD -> PD = 24 / 4 = 6
  if (isCorrect) {
    btn.style.backgroundColor = 'rgba(52, 211, 153, 0.2)';
    btn.style.borderColor = '#34d399';
    feedback.style.color = '#34d399';
    feedback.innerHTML = '🎉 ถูกต้องเยี่ยมยอด! จาก AP × PB = CP × PD จะได้ 3 × 8 = 4 × PD ดังนั้น PD = 6 หน่วย!';
  } else {
    btn.style.backgroundColor = 'rgba(248, 113, 113, 0.2)';
    btn.style.borderColor = '#f87171';
    feedback.style.color = '#f87171';
    feedback.innerHTML = '❌ ยังไม่ถูกต้องครับ ลองจับผลคูณ AP × PB เท่ากับ CP × PD ดูอีกรอบนะ!';
  }
}

// รันตัวอย่างเริ่มต้นเมื่อเปิดหน้าเว็บ
window.onload = function() {
  runPowerOfPoint();
};