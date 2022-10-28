$(document).ready(function(){
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
});



/*






let cost = 0;

let type = parseInt(prompt("Выберите тип сайта:\r1)Визитка\r2)Персональный\r3)Корпоративный"));
let design = parseInt(prompt("Выберите тип дизайна:\r1)Шаблонный\r2)Обычный\r3)Оригинальный"));
let adapt = parseInt(prompt("Выберите адаптивность:\r1)Не адаптивный\r2)Адаптивный для мобильных устройств\r3)Полностью адаптивный"));
let date = parseInt(prompt("Сроки:\r1)3 недели\r2)2 недели\r3)1 неделя\r4)4 дня"));

let sum = type + design + adapt;
if (sum <= 3){
  sum = 3;
}
if (sum > 3 || sum < 7){
  sum *= 0.85;
}
if (sum === 7){
  sum *= 0.8
}
if (sum > 7){
  sum *= 0.7
}

cost = sum * 2000;
alert(`Цена работы будет составлять ${Math.round(cost) * date} рублей!`);
console.log(type, design, adapt);



let option = {threshold: [0.5]};
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.element-animaton');
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
