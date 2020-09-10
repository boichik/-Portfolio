var mobile=false;
var arrLang = {
  'ru': {
    'title':'Денис Новик',
    'home':'Главная',
    'about': 'Обо мне',
    'skills': 'Навыки',
    'portfilio': 'Портфолио',
    'contacts': 'Контакты',
    'fname':'Денис',
    'lname':'Новик',
    'work':'UX | UI дизайнер',
    'years':'24 года, Минск',
    'about-txt-1':"Привет, Я Денис – UX/UI дизайнер из Минска.",
    'about-txt-2':"Я обучался на курсах «Интерфейсы веб и мобильного дизайна» в IT-Академии.",
    'about-txt-3':"Готов реализовывать отличные проекты с замечательными людьми.",
    'skills-txt-1':"Я работаю в таких программах как",
    'contacts-txt-1':"Хотите узнать больше или просто поболтать? Добро пожаловать!",
    'button-txt-1':'Отправить сообщение',
    'contacts-txt-2':"Подпишись на меня в LinkedIn, Instagram, Behance, Dribble",
  },
  'en': {
    'title':'Denis Novik',
    'home':'Home',
    'about': 'About me',
    'skills': 'Skills',
    'portfilio': 'Portfilio',
    'contacts': 'Contacts',
    'fname':'Denis',
    'lname':'Novik',
    'work':'UX | UI designer',
    'years':'24 years old, Minsk',
    'about-txt-1':"Hi, I'm Denis – UX/UI designer from Minsk.",
    'about-txt-2':"I'm studying at courses 'Web and mobile design interfaces' in IT-Academy.",
    'about-txt-3':"Ready to implement excellent projects with wonderful people.",
    'skills-txt-1':"I work in such programs as",
    'contacts-txt-1':"Want to know more or just chat? You are welcome!",
    'button-txt-1':'Send message',
    'contacts-txt-2':"Like me on LinkedIn, Instagram, Behance, Dribble",
  }
}
// Translate function
  $(function() {
    $('.translate').click(function() {
      $('.translate').removeClass('block-one-active')
      $(this).addClass('block-one-active');
      var lang = $(this).attr('id');

      $('.lang').each(function(index, item) {
        $(this).text(arrLang[lang][$(this).attr('key')]);
      });
    });
  });


// Active Button for NavBar
// $(document).ready(function(){
//   $('.nav-menu a[href^="#"]').click(function(){
//     $('.nav-menu a[href^="#"]').removeClass('menu-active');
//     $(this).addClass('menu-active');
//     return false;
//   });
// });

// Buttons Open/Close NavBar Mobile Ver.
$('.btn-menu').click(OpenNavBar);
$('.nav-btn-close').click(HideNavBar);

// Open NavBar for mobile version
function OpenNavBar(){
  $('.btn-menu').css('display', 'none');
  $('.nav').css('display','block');
  $('.block-one-language').css('display','block');
};
// Close NavBar for mobile version
function HideNavBar() {
  $('.nav').css('display', 'none');
  $('.block-one-language').css('display','none');
  $('.btn-menu').css('display','block');
};


var positions = [], //сюда сложим на загрузке страницы позиции наших "якорных" блоков, чтобы не считать их каждый раз. и сюда же положим ссылки на соответствующие a.scroll-to
    currentActive = null, //здесь будет храниться id текущего блока, чтобы не менять классы по 100 раз за одну прокрутку
    links = $('.scroll-to'); //сохраним массив всех a.scroll-to

$(".anchor").each(function(){ //перебираем блоки, сохраняем позиции и ссылки на пункты меню
    positions.push({
        top: $(this).position().top-300,
        a: links.filter('[href="#'+$(this).attr('id')+'"]')
    });
});

//делаем реверс массива, чтобы при скролле перебирать его с конца и выходить из цикла при нахождении
//зачем нам проверять каждый блок, если прокрутка уже ниже последнего, верно?
positions = positions.reverse();

$(window).on('scroll',function() {
    var winTop = $(window).scrollTop()
    for(var i = 0; i < positions.length; i++){
        if(positions[i].top < winTop){ //если прокрутка страницы ниже нашего блока
            if(currentActive !== i){ //и если мы еще не добавили класс текущему блоку
                currentActive = i;
                links.removeClass('menu-active'); //снимаем класс .active с текущего пункта меню
                positions[i].a.addClass("menu-active");
            }
            break; //выходим из цикла, не нужно проверять блоки, которые выше
        }
    }
});

//Сheck on a mobile device
$(document).ready(function(){
    if ($(window).width() <= '754'){
        mobile=true
        HideNavBar();
    } else {
        if($(window).width() >='754'){
          mobile=false;
          OpenNavBar();
        }
    }
});
//Check resize window
$(window).resize(function(){
  if ($(window).width() <= '754'){
      mobile=true
      HideNavBar();
  } else {
      if($(window).width() >='754'){
        mobile=false;
        OpenNavBar();
      }
  }
});

// Hide NavBar when scrolling more than 400px
$(document).scroll(function () {
  if(mobile==true){
    if ($(this).scrollTop() > 400) {
      HideNavBar();
    }
  }
});
$(document).scroll(function(){
  if(mobile==false){
    if($(this).scrollTop()>100){
      $('.nav').addClass('menu-fixed');
    } else{
      $('.nav').removeClass('menu-fixed');
    }
  }
});
