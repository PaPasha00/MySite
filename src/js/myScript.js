$(document).ready(function(){
  $('.preloader').addClass('stop'); 
  
  new WOW().init();
  
  $('form').submit(function(event){
    event.preventDefault();
    
    $.ajax({
      type: "POST",
      url: "php/mail.php",
      data: $(this).serialize()
    }).done(function (){
      $(this).find("input").val("");
      alert("Успешно отправлено!");
      $("form").trigger("reset");
    });
    return false;
  });
  
  
  let options = {threshold: [0.8]};
  let observer = new IntersectionObserver(onEntry, options);
  let elements = $('#ImageChange');
  elements.each((i, el) => {
      observer.observe(el);
    });
  
  let options_2 = {threshold: [0.8]};
  let observer_2 = new IntersectionObserver(Run_stats, options_2);
  let elements_2 = $('.stats');
  elements_2.each((i, el) => {
      observer_2.observe(el);
    });
  
  $("#Phone").mask("+7(999) 999-9999");
  
  $('form').submit(function(event){
    
    if ($("#Phone").val() == "" || $("#name").val() == ""){
      event.preventDefault();
      alert("Пожалуйста, заполните все поля!")
    };
  });
  
$(window).scroll(() => {
  let scrollDistance = $(window).scrollTop();
  
    $(".section").each((i, el) => {

      if($(el).offset().top - $("nav").outerHeight() <= scrollDistance){
        $("nav a").each((i, el) => {
            if ($(el).hasClass("active")){
                $(el).removeClass("active");
            }            
        });

        $('nav li:eq('+ i +')').find('a').addClass('active');
      }
    });
  });
 
  function calc(){
    let sums = parseInt($("#typeSite option:selected").val()) + parseInt($("#adapt option:selected").val()) + parseInt($("#design option:selected").val());
    let dayss = Math.ceil(sums / 1000);
    $(".timers .val").text(dayss);
    $(".costss .Val").text(sums);
  };
  
  $("select").on("change", function(){
    calc();
  });
  calc();
  
});


let cli = 0;
let hours = 0;
let proj = 0;
let awar = 0;

function runner(){
        if (cli < 15){
          cli += 1;
          $(".clients ").text(cli); 
        }
        if (hours < 320){
          hours += 1;
          $(".Hours ").text(hours);
        }
        if (proj < 15){
          proj += 1;
          $(".Projects ").text(proj);
        }
        if (awar < 15){
          awar += 1;
          $(".Awards ").text(awar);
        } 
};

function Run_stats (entry_2){
  entry_2.forEach(change => {
    if (change.isIntersecting){
      let inter = setInterval(runner, 20);
    }
  });
};

if (hours == fHours){
    clearInterval("inter");
}

function onEntry (entry){
  entry.forEach(change => {
    if (change.isIntersecting){
      change.target.src = change.target.dataset.src;
    }
  });
};


