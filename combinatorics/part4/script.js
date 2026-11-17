// 1. ฟังก์ชันคำนวณ Inclusion-Exclusion สำหรับ 3 เซต
function runInclusionExclusion() {
  const A = parseFloat(document.getElementById('setA').value) || 0;
  const B = parseFloat(document.getElementById('setB').value) || 0;
  const C = parseFloat(document.getElementById('setC').value) || 0;
  const AB = parseFloat(document.getElementById('ab').value) || 0;
  const AC = parseFloat(document.getElementById('ac').value) || 0;
  const BC = parseFloat(document.getElementById('bc').value) || 0;
  const ABC = parseFloat(document.getElementById('abc').value) || 0;
  const outputDiv = document.getElementById('ie-result');

  // สูตร: |A ∪ B ∪ C| = |A| + |B| + |C| - (|A∩B| + |A∩C| + |B∩C|) + |A∩B∩C|
  const union = (A + B + C) - (AB + AC + BC) + ABC;

  let html = `<strong>ผลการคำนวณ Inclusion-Exclusion (ยูเนียน 3 เซต):</strong><br>`;
  html += `• บวกขนาดเซตเดี่ยว: ${A} + ${B} + ${C} = ${A + B + C}<br>`;
  html += `• ลบการอินเตอร์เซกชันคู่: -(${AB} + ${AC} + ${BC}) = -${AB + AC + BC}<br>`;
  html += `• บวกการอินเตอร์เซกชันสาม: +${ABC}<br>`;
  html += `• ขนาดของยูเนียน (|A ∪ B ∪ C|) = <span style="color: #38bdf8;"><strong>${union}</strong></span>`;

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

  // โจทย์: |A| = 20, |B| = 25, |A ∩ B| = 8 -> |A ∪ B| = 20 + 25 - 8 = 37
  if (isCorrect) {
    btn.style.backgroundColor = 'rgba(52, 211, 153, 0.2)';
    btn.style.borderColor = '#34d399';
    feedback.style.color = '#34d399';
    feedback.innerHTML = '🎉 ถูกต้องเยี่ยมยอด! จากสูตร |A ∪ B| = |A| + |B| - |A ∩ B| จะได้ 20 + 25 - 8 = 37 พอดี';
  } else {
    btn.style.backgroundColor = 'rgba(248, 113, 113, 0.2)';
    btn.style.borderColor = '#f87171';
    feedback.style.color = '#f87171';
    feedback.innerHTML = '❌ ยังไม่ถูกต้องครับ ลองนำขนาดเซตเดี่ยวบวกกันแล้วลบส่วนที่ซ้ำซ้อน (|A ∩ B|) ออกดูอีกรอบนะ!';
  }
}

// รันตัวอย่างเริ่มต้นเมื่อเปิดหน้าเว็บ
window.onload = function() {
  runInclusionExclusion();
};