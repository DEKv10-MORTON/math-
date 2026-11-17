// 1. ฟังก์ชันแยกตัวประกอบเฉพาะและคำนวณตัวประกอบอัตโนมัติ
function runPrimeFactorization() {
  let num = parseInt(document.getElementById('inputNum').value);
  const outputDiv = document.getElementById('factor-result');

  if (isNaN(num) || num <= 1) {
    outputDiv.innerHTML = '<span style="color: #f87171;">⚠️ กรุณาใส่จำนวนเต็มที่มากกว่า 1 ขึ้นไปครับ</span>';
    return;
  }

  let temp = num;
  let factors = {};
  let divisor = 2;

  while (divisor * divisor <= temp) {
    while (temp % divisor === 0) {
      factors[divisor] = (factors[divisor] || 0) + 1;
      temp /= divisor;
    }
    divisor++;
  }
  if (temp > 1) {
    factors[temp] = (factors[temp] || 0) + 1;
  }

  // สร้างข้อความแสดงผลการแยกตัวประกอบ
  let factorStringArray = [];
  let totalDivisors = 1;
  let sumDivisors = 1;

  for (let p in factors) {
    let exp = factors[p];
    factorStringArray.push(`${p}<sup>${exp}</sup>`);
    totalDivisors *= (exp + 1);

    // คำนวณผลบวกตัวประกอบ: (p^(a+1) - 1) / (p - 1)
    let primeNum = parseInt(p);
    let termSum = (Math.pow(primeNum, exp + 1) - 1) / (primeNum - 1);
    sumDivisors *= termSum;
  }

  let resultHTML = `<strong>ผลการวิเคราะห์เลข ${num}:</strong><br>`;
  resultHTML += `• รูปแบบการแยกตัวประกอบ: <strong>${factorStringArray.join(' × ')}</strong><br>`;
  resultHTML += `• จำนวนตัวประกอบทั้งหมด: <span style="color: #38bdf8;">${totalDivisors} ตัว</span><br>`;
  resultHTML += `• ผลรวมของตัวประกอบทั้งหมด: <span style="color: #34d399;">${sumDivisors}</span>`;

  outputDiv.innerHTML = resultHTML;
}

// 2. ฟังก์ชันเปิด-ปิดเฉลยโจทย์
function toggleSolution(id) {
  const sol = document.getElementById(id);
  sol.classList.toggle('show');
}

// 3. ฟังก์ชันตรวจคำตอบควิซ
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
    feedback.innerHTML = '🎉 ถูกต้องครับ! จาก \( 2^4 \times 3^3 \) จะได้จำนวนตัวประกอบเท่ากับ \( (4 + 1)(3 + 1) = 5 \times 4 = 20 \) ตัวพอดีเยี่ยม!';
  } else {
    btn.style.backgroundColor = 'rgba(248, 113, 113, 0.2)';
    btn.style.borderColor = '#f87171';
    feedback.style.color = '#f87171';
    feedback.innerHTML = '❌ ยังไม่ถูกต้องครับ ลองนำเลขชี้กำลังแต่ละตัวมาบวก 1 แล้วคูณกันดูอีกทีนะ!';
  }
}

// รันตัวอย่างเริ่มต้นเมื่อเปิดหน้าเว็บ
window.onload = function() {
  runPrimeFactorization();
};