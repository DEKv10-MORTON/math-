// 1. ฟังก์ชันจำลองหลักรังนกพิราบ (PHP Simulator)
function runPHPTest() {
  const pigeons = parseInt(document.getElementById('pigeons').value);
  const holes = parseInt(document.getElementById('holes').value);
  const outputDiv = document.getElementById('php-result');

  if (isNaN(pigeons) || isNaN(holes) || pigeons <= 0 || holes <= 0) {
    outputDiv.innerHTML = '<span style="color: #f87171;">⚠️ กรุณาใส่จำนวนนกและรังเป็นจำนวนเต็มบวกครับ</span>';
    return;
  }

  // คำนวณจำนวนนกขั้นต่ำในรังที่หนาแน่นที่สุด ตามหลัก ceil(pigeons / holes)
  const minPerHole = Math.ceil(pigeons / holes);

  let html = `<strong>ผลการจำลองหลักรังนกพิราบ (Pigeonhole Principle):</strong><br>`;
  html += `• จำนวนนกพิราบ (Pigeons) = ${pigeons} ตัว<br>`;
  html += `• จำนวนรัง (Holes) = ${holes} รัง<br>`;
  html += `• ผลลัพธ์: จะต้องมีอย่างน้อย 1 รังที่มีนกพิราบสะสมอยู่ <strong>${minPerHole} ตัวขึ้นไป</strong><br>`;
  html += `• คำอธิบาย: เนื่องจาก ${pigeons} ÷ ${holes} = ${pigeons/holes} เมื่อปัดเศษขึ้นจะได้ ${minPerHole} เสมอ`;

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

  // โจทย์: คน 13 คน (นก), 12 เดือน (รัง) -> 13 / 12 = 1 เศษ 1 -> ต้องมีอย่างน้อย 2 คนเกิดเดือนเดียวกัน
  if (isCorrect) {
    btn.style.backgroundColor = 'rgba(52, 211, 153, 0.2)';
    btn.style.borderColor = '#34d399';
    feedback.style.color = '#34d399';
    feedback.innerHTML = '🎉 ถูกต้องเยี่ยมยอด! มี 13 คน (นก) และ 12 เดือน (รัง) ตามหลัก PHP จะต้องมีอย่างน้อย 2 คนเกิดเดือนเดียวกันแน่นอน';
  } else {
    btn.style.backgroundColor = 'rgba(248, 113, 113, 0.2)';
    btn.style.borderColor = '#f87171';
    feedback.style.color = '#f87171';
    feedback.innerHTML = '❌ ยังไม่ถูกต้องครับ ลองมองว่าคน 13 คนเป็นนกพิราบ และ 12 เดือนเป็นรัง แล้วหารดูนะ!';
  }
}

// รันตัวอย่างเริ่มต้นเมื่อเปิดหน้าเว็บ
window.onload = function() {
  runPHPTest();
};