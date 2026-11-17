// ฟังก์ชันคำนวณแฟกทอเรียล (Factorial)
function factorial(num) {
  if (num === 0 || num === 1) return 1;
  let res = 1;
  for (let i = 2; i <= num; i++) {
    res *= i;
  }
  return res;
}

// 1. ฟังก์ชันคำนวณ Permutation และ Combination
function runCombCalc() {
  let n = parseInt(document.getElementById('inputN').value);
  let r = parseInt(document.getElementById('inputR').value);
  const outputDiv = document.getElementById('comb-result');

  if (isNaN(n) || isNaN(r)) {
    outputDiv.innerHTML = '<span style="color: #f87171;">⚠️ กรุณาใส่ตัวเลข n และ r ให้ครบครับ</span>';
    return;
  }

  if (n < 0 || r < 0 || n < r) {
    outputDiv.innerHTML = '<span style="color: #f87171;">❌ เงื่อนไขไม่ถูกต้อง: ต้องเป็น n ≥ r ≥ 0</span>';
    return;
  }

  let pVal = factorial(n) / factorial(n - r);
  let cVal = factorial(n) / (factorial(r) * factorial(n - r));

  let html = `<strong>ผลการคำนวณสำหรับ n = ${n}, r = ${r}:</strong><br>`;
  html += `• การเรียงสับเปลี่ยน P(${n}, ${r}) = <span style="color: #38bdf8;"><strong>${pVal.toLocaleString()}</strong></span> วิธี<br>`;
  html += `• การจัดหมู่ C(${n}, ${r}) = <span style="color: #34d399;"><strong>${cVal.toLocaleString()}</strong></span> วิธี`;

  outputDiv.innerHTML = html;
}

// 2. ฟังก์ชันเปิด-ปิดเฉลยโจทย์
function toggleSolution(id) {
  const sol = document.getElementById(id);
  sol.classList.toggle('show');
}

// 3. ฟังก์ชันตรวจคำตอบมินิควิซ