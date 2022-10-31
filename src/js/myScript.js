$(document).ready(function(){
  $('.preloader').addClass('stop'); 
  
  
  
  
  
  

/*function startJs(){
  let cli = 0;
  let hours = 0;
  let proj = 0;
  let awar = 0;
  let fCli = parseInt($("#clients").attr("value"));
  let fHours = parseInt($("#Hours").attr("value"));
  let fProj = parseInt($("#Projects").attr("value"));
  let fAwar = parseInt($("#Awards").attr("value"));
  
  function runner(){
    if (cli < fCli){
      cli += 1;
      $(".clients ").text(cli); 
    }
    if (hours < fHours){
      hours += 1;
      $(".Hours ").text(hours);
    }
    if (proj < fProj){
      proj += 1;
      $(".Projects ").text(proj);
    }
    if (awar < fAwar){
      awar += 1;
      $(".Awards ").text(awar);
    } 
  };
  
  let inter = setInterval(runner, 10);
  
  if (hours == fHours){
    clearInterval("inter");
  }
  };
 
  let options = {
  root: document.querySelector("#scrollArea"),
  rootMargin: '0px',
  threshold: 0.5
}

let observer = new IntersectionObserver(callback, options);
  
let target = document.querySelector('#StartJs');
observer.observe(target);
  
let callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting){
      startJs();
    };
  });
};
  
  */
  
  
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
    let dayss = parseInt($("#typeSite option:selected").attr("days")) + parseInt($("#adapt option:selected").attr("days")) + parseInt($("#design option:selected").attr("days"));
    $(".timers .val").text(dayss);
    $(".costss .Val").text(sums);
  }
  
  $("select").on("change", function(){
    calc();
  });
  calc();
  
  
});




//изменить значения чтобы не пересекались с другой функцией
/*let options = {threshold: [0.5]};
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.element-animation');
    elements.each((i, el) => {
      observer.observe(el);
    });

function onEntry (entry){
  entry.forEach(change => {
    if (change.isIntersecting){
      change.target.classList.add('show-animation');
    }
  });
}  

*/



