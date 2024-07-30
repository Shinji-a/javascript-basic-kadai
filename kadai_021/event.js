const Cbtn = document.getElementById('btn');
 Cbtn.addEventListener('click', 
    function Cbtni() {
      setTimeout(()=>{
    const CbtnB = document.getElementById('text');
    CbtnB.textContent = 'ボタンをクリックしました';
      }, 2000);
  });