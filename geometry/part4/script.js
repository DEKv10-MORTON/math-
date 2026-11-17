// 1. ฟังก์ชันคำนวณระยะทาง จุดกึ่งกลาง และความชันระหว่างจุดสองจุด
function runCoordCalc() {
  const x1 = parseFloat(document.getElementById('x1').value);
  const y1 = parseFloat(document.getElementById('y1').value);
  const x2 = parseFloat(document.getElementById('x2').value);
  const y2 = parseFloat(document.getElementById('y2').value);
  const outputDiv = document.getElementById('coord-result');

  if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
    outputDiv.innerHTML = '<span style="color: #f87171;">⚠️ กรุณาใส่พิกัดตัวเลขให้ครบทุกช่องครับ</span>';
    return;
  }

  const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;

  let slopeText = "";
  if (x2 - x1 === 0) {
    slopeText = "หาค่าไม่ได้ (เส้นตรงตั้งฉากกับแกน X)";
  } else {
    const slope = (y2 - y1) / (x2 - x1);
    slopeText = slope.toFixed(2);
  }

  let html = `<strong>ผลการคำนวณเรขาคณิตวิเคราะห์ระหว่างจุด A(${x1}, ${y1}) และ B(${x2}, ${y2}):</strong><br>`;
  html += `• ระยะห่างระหว่างสองจุด (Distance) = <span style="color: #38bdf8;"><strong>${distance.toFixed(2)}</strong></span> หน่วย<br>`;
  html += `• จุดกึ่งกลาง (Midpoint) = <span style="color: #34d399;"><strong>(${midX.toFixed(2)}, ${midY.toFixed(2)})</strong></span><br>`;
  html += `• ความชันของเส้นตรง (Slope) = <strong>${slopeText}</strong>`;

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

  // โจทย์: ตั้งฉากกับ -2/3 ความชันใหม่คือ -1 / (-2/3) = 3/2
  if (isCorrect) {
    btn.style.backgroundColor = 'rgba(52, 211, 153, 0.2)';
    btn.style.borderColor = '#34d399';
    feedback.style.color = '#34d399';
    feedback.innerHTML = '🎉 ถูกต้องเยี่ยมยอด! เส้นตั้งฉากกันความชันคูณกันได้ -1 ดังนั้นความชันใหม่คือ -1 / (-2/3) = 3/2';
  } else {
    btn.style.backgroundColor = 'rgba(248, 113, 113, 0.2)';
    btn.style.borderColor = '#f87171';
    feedback.style.color = '#f87171';
    feedback.innerHTML = '❌ ยังไม่ถูกต้องครับ สำหรับเส้นตั้งฉาก ให้กลับเศษเป็นส่วนแล้วเปลี่ยนเครื่องหมาย (Negative Reciprocal)';
  }
}

// รันตัวอย่างเริ่มต้นเมื่อเปิดหน้าเว็บ
window.onload = function() {
  runCoordCalc();
};