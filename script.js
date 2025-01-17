document.addEventListener("DOMContentLoaded", function() {
  // 设置开始日期
  const startDate = new Date("2025-01-14"); // 设定你们开始的日期
  const startDateElement = document.getElementById("start-date");
  startDateElement.textContent = `开始日期: ${startDate.toLocaleDateString()}`;

  // 计算并显示已经一起的天数
  const daysTogether = Math.floor((new Date() - startDate) / (1000 * 60 * 60 * 24));
  document.getElementById("days-counter").textContent = `已经一起 ${daysTogether} 天`;

  // 目标日期倒计时函数
  function updateCountdown(targetDate, label) {
    const countdownElement = document.createElement("div");
    const target = new Date(targetDate);
    const now = new Date();
    const timeRemaining = target - now;

    // 计算剩余天数、小时和分钟
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));

    countdownElement.textContent = `${label}: ${days} 天 ${hours} 小时 ${minutes} 分钟`;
    document.getElementById("countdown-list").appendChild(countdownElement);
  }

  // 月纪念日和年纪念日
  const nextMonthAnniversary = new Date(startDate);
  nextMonthAnniversary.setMonth(startDate.getMonth() + 1);
  updateCountdown(nextMonthAnniversary, "下个月纪念日");

  const nextYearAnniversary = new Date(startDate);
  nextYearAnniversary.setFullYear(startDate.getFullYear() + 1);
  updateCountdown(nextYearAnniversary, "一年纪念日");
});
