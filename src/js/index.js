// eslint-disable-next-line no-undef
$(document).ready(function () {

  //função para definir o dia destino e horário desejado para o final da promoção de cada semana
  function dataDiaDaSemana(diaRef) {
    var dias = {
      segunda: 1,
      terca: 2,
      quarta: 3,
      quinta: 4,
      sexta: 5,
      sabado: 6,
      domingo: 0
    };

    var dataAtual = new Date();
    var timestampAtual = dataAtual.getTime();
    var diaGatilho = dias[diaRef];
    var diaMilisegDif = 0;
    var diaEmMiliseg = 1000 * 60 * 60 * 24;

    // adiciona um dia a diaMilisegDif enquanto o diaRef desejado (terca por exemplo) não for atingido
    while (dataAtual.getDay() != diaGatilho) {
      diaMilisegDif += diaEmMiliseg;
      dataAtual = new Date(dataAtual.getTime() + diaEmMiliseg);
    }
    return new Date(timestampAtual + diaMilisegDif);
  }

  //defina o dia destino da semana
  var dia = dataDiaDaSemana("terca");

  //defina o horario
  dia.setHours(0, 0, 0, 0); //(hora, min, seg, miliseg)


  //fonte https://www.w3schools.com/howto/howto_js_countdown.asp

  //define a data para contagem regressiva
  var countDownDate = new Date(dia).getTime();

  // Update the count down every 1 second
  setInterval(function () {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance < 1) { // você chegou ao seu destino :-)
      /*** redefine a data para próximo dia destino da semana *****/
      countDownDate = new Date(countDownDate.valueOf() + 604800000);
    } else if (days > 1) {
      document.getElementById("day").innerHTML = "Dias";
      document.getElementById("days").innerHTML = days;
      document.getElementById("hours").innerHTML = hours;
      document.getElementById("minutes").innerHTML = minutes;
      document.getElementById("seconds").innerHTML = seconds;
    } else if (days > 0) {
      document.getElementById("days").innerHTML = days;
      document.getElementById("hours").innerHTML = hours;
      document.getElementById("minutes").innerHTML = minutes;
      document.getElementById("seconds").innerHTML = seconds;
    } else if (hours == 0 && minutes == 0) {
      document.getElementById("days").innerHTML = days;
      document.getElementById("hours").innerHTML = hours;
      document.getElementById("minutes").innerHTML = minutes;
      document.getElementById("seconds").innerHTML = seconds;
    } else if (hours == 0) {
      document.getElementById("days").innerHTML = days;
      document.getElementById("hours").innerHTML = hours;
      document.getElementById("minutes").innerHTML = minutes;
      document.getElementById("seconds").innerHTML = seconds;
    } else {
      document.getElementById("days").innerHTML = days;
      document.getElementById("hours").innerHTML = hours;
      document.getElementById("minutes").innerHTML = minutes;
      document.getElementById("seconds").innerHTML = seconds;
    }

  }, 1000);

});
