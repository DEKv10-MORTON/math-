// 1. ฟังก์ชันคำนวณ (base^exp) % mod ด้วยวิธี Fast Modular Exponentiation
function runModPower() {
  const baseVal = document.getElementById('modBase').value;
  const expVal = document.getElementById('modExp').value;
  const modVal = document.getElementById('modDiv').value;
  const outputDiv = document.getElementById('mod-result');

  if (!baseVal || !expVal || !modVal || BigInt(expVal) < 0n || BigInt(modVal) <= 0n) {
    outputDiv.innerHTML = '<span style="color: #f87171;">⚠️ กรุณาใส่เลขชี้กำลัง ≥ 0 และตัวหาร > 0 ครับ</span>';
    return;
  }

  let base = BigInt(baseVal);
  let exp = BigInt(expVal);
  let mod = BigInt(modVal);

  // ปรับฐานให้เป็นบวกในช่วง [0, mod-1]
  let b = ((base % mod) + mod) % mod;
  let result = 1n;
  let e = exp;

  while (e > 0n) {
    if (e % 2n === 1n) {
      result = (result * b) % mod;
    }
    b = (b * b) % mod;
    e = e / 2n;
  }

  let html = `<strong>ผลการคำนวณ:</strong><br>`;
  html += `• โจทย์: ${baseVal}<sup>${expVal}</sup> mod ${modVal}<br>`;
  html += `• เศษเหลือจากการหาร (Remainder): <span style="color: #38bdf8; font-size: 1.2rem;"><strong>${result.toString()}</strong></span><br>`;
  html += `• เขียนในรูปสมภาค: ${baseVal}<sup>${expVal}</sup> ≡ ${result.toString()} (mod ${modVal})`;

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
    feedback.innerHTML = '🎉 เยี่ยมมาก! เพราะ 9 ≡ -1 (mod 10) พอยกกำลังเลขคี่ 99 จะได้ (-1)⁹⁹ = -1 ≡ 9 (mod 10) เศษเหลือคือ 9 ครับ!';
    if (window.MathJax) MathJax.typesetPromise([feedback]);
  } else {
    btn.style.backgroundColor = 'rgba(248, 113, 113, 0.2)';
    btn.style.borderColor = '#f87171';
    feedback.style.color = '#f87171';
    feedback.innerHTML = '❌ ยังไม่ถูกครับ ลองใช้ทริค 9 ≡ -1 (mod 10) แล้วดูว่า 99 เป็นเลขคู่หรือเลขคี่นะ!';
  }
}

// รันตัวอย่างเริ่มต้นเมื่อเปิดหน้าเว็บ
window.onload = function() {
  runModPower();
};