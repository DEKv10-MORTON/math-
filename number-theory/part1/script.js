// 1. ฟังก์ชันจำลองขั้นตอนวิธีของยุคลิด (Euclidean Algorithm)
function runEuclidean() {
  const inputA = parseInt(document.getElementById('numA').value);
  const inputB = parseInt(document.getElementById('numB').value);
  const outputDiv = document.getElementById('euclid-steps');

  if (isNaN(inputA) || isNaN(inputB) || inputA <= 0 || inputB <= 0) {
    outputDiv.innerHTML = '<span style="color: #f87171;">⚠️ กรุณาใส่จำนวนเต็มบวกที่มากกว่า 0 ทั้งสองช่องครับ</span>';
    return;
  }

  let a = Math.max(inputA, inputB);
  let b = Math.min(inputA, inputB);
  let stepsHTML = `<strong>เริ่มต้นหา gcd(${a}, ${b}):</strong><br>`;
  let stepCount = 1;

  while (b !== 0) {
    let q = Math.floor(a / b);
    let r = a % b;
    stepsHTML += `ขั้นที่ ${stepCount}: ${a} = (${b} × ${q}) + <span style="color: #fbbf24;">เศษ ${r}</span><br>`;
    a = b;
    b = r;
    stepCount++;
  }

  stepsHTML += `<br><span style="color: #38bdf8; font-size: 1.1rem;">✅ เศษเป็น 0 แล้ว! ดังนั้น ห.ร.ม. (GCD) คือ <strong>${a}</strong></span>`;
  outputDiv.innerHTML = stepsHTML;
}

// 2. ฟังก์ชันเปิด-ปิดเฉลยโจทย์แต่ละข้อ
function toggleSolution(id) {
  const sol = document.getElementById(id);
  sol.classList.toggle('show');
}

// 3. ฟังก์ชันตรวจคำตอบมินิควิซ
function checkQuiz(btn, isCorrect) {
  const feedback = document.getElementById('quiz-feedback');
  const allBtns = document.querySelectorAll('.quiz-options button');

  // รีเซ็ตสีปุ่มทั้งหมดก่อน
  allBtns.forEach(b => {
    b.style.backgroundColor = '#0f172a';
    b.style.borderColor = '#334155';
  });

  if (isCorrect) {
    btn.style.backgroundColor = 'rgba(52, 211, 153, 0.2)';
    btn.style.borderColor = '#34d399';
    feedback.style.color = '#34d399';
    feedback.innerHTML = '🎉 ถูกต้องครับ! เพราะ 391 = 299(1) + 92 → 299 = 92(3) + 23 → 92 = 23(4) + 0 ดังนั้น ห.ร.ม. คือ 23';
  } else {
    btn.style.backgroundColor = 'rgba(248, 113, 113, 0.2)';
    btn.style.borderColor = '#f87171';
    feedback.style.color = '#f87171';
    feedback.innerHTML = '❌ ยังไม่ถูกครับ ลองนำ 391 ตั้งหารด้วย 299 ดูว่าเหลือเศษเท่าไหร่ หรือลองเอาไปใส่ในห้องทดลองด้านบนดูได้นะ!';
  }
}

// สั่งให้รันตัวอย่างเริ่มต้นทันทีเมื่อเปิดหน้าเว็บ
window.onload = function() {
  runEuclidean();
};