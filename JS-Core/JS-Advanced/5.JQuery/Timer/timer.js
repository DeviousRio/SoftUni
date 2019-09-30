function timer() {
   let hours = $('#hours');
   let minutes = $('#minutes');
   let seconds = $('#seconds');
   let timer;
   let isTicking = false;

   let startBtn = $('#start-timer').on('click', function () {
      if (!isTicking) {
         timer = setInterval(startTimer, 1000);
         isTicking = true;
      }
   });

   let stopBtn = $('#stop-timer').on('click', stopTimer);

   function startTimer() {
      seconds.text(formatter(+seconds.text() + 1));
      if (+seconds.text() > 59) {
         seconds.text('00');
         minutes.text(formatter(+minutes.text() + 1));
      }

      if (+minutes.text() > 59) {
         minutes.text('00');
         hours.text(formatter(+hours.text() + 1));
      }
   }

   function stopTimer() {
      clearInterval(timer);
      isTicking = false;
   }

   function formatter(time) {
      return ('0' + time).slice(-2);
   }
}