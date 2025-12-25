document.addEventListener('DOMContentLoaded',()=>{
  const accBtns = document.querySelectorAll('.accordion-btn');
  accBtns.forEach(btn=>{
    btn.addEventListener('click',()=>{
      btn.classList.toggle('active');
      const panel = btn.nextElementSibling;
      if(panel.style.maxHeight){
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
    // open first by default
    if(btn === accBtns[0]) btn.click();
  });

  const calcBtn = document.getElementById('calc');
  const resetBtn = document.getElementById('reset');
  const countEl = document.getElementById('count');
  const sumEl = document.getElementById('sum');
  const minSumEl = document.getElementById('minSum');
  const maxSumEl = document.getElementById('maxSum');

  function compute(){
    const items = document.querySelectorAll('.item');
    let count = 0, minTotal = 0, maxTotal = 0;
    items.forEach(it=>{
      const chk = it.querySelector('.chk');
