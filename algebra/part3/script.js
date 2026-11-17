// 1. ฟังก์ชันวิเคราะห์เศษส่วนพหุนามและเช็คตัวส่วนห้ามเป็นศูนย์
function runRationalCheck() {
  const numCoeff = parseFloat(document.getElementById('numCoeff').value) || 0;
  const numConst = parseFloat(document.getElementById('numConst').value) || 0;
  const denCoeff = parseFloat(document.getElementById('denCoeff').value) || 0;
  const denConst = parseFloat(document.getElementById('denConst').value) || 0;
  const outputDiv = document.getElementById('rational-result');

  // ตัวส่วนคือ denCoeff * x + denConst = 0 -> x = -denConst / denCoeff
  let html = `<strong>ผลการวิเคราะห์เศษส่วนพหุนาม:</strong><br>`;
  html += `• นิพจน์: (${numCoeff}x<sup>2</sup> + (${numConst})) / (${denCoeff}x + (${denConst}))<br>`;

  if (denCoeff === 0) {
    if (denConst === 0) {
      html += `<span style="color: #f87171;">❌ ตัวส่วนเป็น 0 เสมอ (นิพจน์หาค่าไม่ได้)</span>`;
    } else {
      html += `<span style="color: #34d399;">✅ ตัวส่วนเป็นค่าคงที่ (${denConst}) ไม่มีเงื่อนไขจำกัดค่า x</span>`;
    }
  } else {
    let restrictedX = -denConst / denCoeff;
    html += `• เงื่อนไข Domain: ตัวส่วนห้ามเป็นศูนย์ ดังนั้น <span style="color: #fbbf24;"><strong>x &neq; ${restrictedX}</strong></span><br>`;
    
    // ลองแทนค่า x เช็คการตัดทอนเบื้องต้น
    let checkVal = restrictedX + 1; // ลองแทนค่าอื่น
    let numVal = numCoeff * Math.pow(checkVal, 2) + numConst;
    let denVal = denCoeff * checkVal + denConst;
    
    if (denVal !== 0) {
      let approxVal = (numVal / denVal).toFixed(2);
      html += `• ตัวอย่างการแทนค่า (เมื่อ x = ${checkVal}): ได้ผลลัพธ์ประมาณ <strong>${approxVal}</strong>`;
    }
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

  // โจทย์: x/(x-2) + 1/x = 2/(x-2)
  // นำ x(x-2) คูณตลอด: x^2 + (x-2) = 2x -> x^2 - x - 2 = 0 -> (x-2)(x+1) = 0 -> x = 2, -1
  // แต่เช็คเงื่อนไขตัวส่วน x != 2 ดังนั้น x = 2 ใช้ไม่ได้ เหลือคำตอบเดียวคือ x = -1
  // อ้าว ผลบวกของคำตอบทั้งหมดคือมีแค่ -1 สิ! (เดี๋ยวปรับปุ่ม quiz ให้คมชัด)
  if (isCorrect) {
    btn.style.backgroundColor = 'rgba(52, 211, 153, 0.2)';
    btn.style.borderColor = '#34d399';
    feedback.style.color = '#34d399';
    feedback.innerHTML = '🎉 ถูกต้องเยี่ยมยอด!';
  } else {
    btn.style.backgroundColor = 'rgba(248, 113, 113, 0.2)';
    btn.style.borderColor = '#f87171';
    feedback.style.color = '#f87171';
    feedback.innerHTML = '❌ ระวังเรื่องเงื่อนไขตัวส่วนห้ามเป็นศูนย์ (x != 2) ด้วยนะ! คำตอบ x = 2 ต้องตัดทิ้ง!';
  }
}

// รันตัวอย่างเริ่มต้นเมื่อเปิดหน้าเว็บ
window.onload = function() {
  runRationalCheck();
};