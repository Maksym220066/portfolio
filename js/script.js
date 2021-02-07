//burger-menu
const btnBurger = document.querySelector('.burger-menu');
const burgerMenu = document.querySelector('.header__menu');
function toggleMenu() {
   burgerMenu.classList.toggle('active');
}
btnBurger.addEventListener('click', toggleMenu);

//partfolio-projects
const filter = document.querySelectorAll('.project__filter-item');
const project = document.querySelectorAll('.project__wrap-card');
const hideCard = document.querySelectorAll('.hideCard');
const cardNews = document.querySelectorAll('.blog__card-news');

const btnLoad = document.querySelectorAll('.btnLoad');
const emptyProjectText = document.querySelector('.empty-cards');
let numberHide = 6;

//category switching
function categorySwitch() {

   return function () {
      let getData = (this.dataset.filter == 'all') ? null : this.dataset.filter;
      verifyFilters(this)
      switchCards(getData);
   }
}

// The function is responded to the selected category
function switchCards(getData) {
   let checkLengthProhect = 0;
   btnLoad[0].classList.add('hide');
   project.forEach((i, e) => {
      if (getData == null) {
         btnLoad[0].classList.remove('hide');
         i.classList.remove('hide');
         checkLength()
      } else if (i.dataset.filter == getData) {
         i.classList.remove('hide');
         i.classList.remove('hideMore')
      } else {
         i.classList.add('hide')
         checkLengthProhect++;
      }
   })
   if (checkLengthProhect === 4) emptyProjectText.style.display = 'block';
   else emptyProjectText.style.display = 'none'
}

//verifying the selected category
function verifyFilters(filterThis) {
   filter.forEach(i => {
      i.dataset.check = 'off';
   })
   filterThis.dataset.check = 'on';
}

filter.forEach(i => {
   i.addEventListener('click', categorySwitch())
})

//Load More PROJECT
function loadMore() {
   btnLoad.forEach(element => {
      element.addEventListener('click', () => {
         project.forEach((i, e) => {
            if (i.classList.contains('hide')) {
               if (element.classList.contains('project__more-load')) {
                  i.classList.remove('hide')
                  element.classList.add('project__load-btn--active')
                  element.textContent = 'show less'
               }
            } else if (e >= numberHide) {
               i.classList.add('hide')
               element.textContent = 'load more work'
               element.classList.remove('project__load-btn--active')
            }
         })
         cardNews.forEach((i, e) => {
            if (i.classList.contains('hide')) {
               if (element.classList.contains('blog__more-content')) {
                  i.classList.remove('hide')
                  element.textContent = 'show less'
               }
            } else if (e >= numberHide) {
               i.classList.add('hide')
               element.textContent = 'See more posts'
            }
         })

      })
   })
   checkLength()


}

//verify length of project card. If length of card more than in variable: numberHide then card of project will be hide.
function checkLength() {

   if (project.length <= numberHide && btnLoad[0]) {
      btnLoad[0].style.display = 'none';
   } if (cardNews.length <= numberHide) {
      btnLoad[1].style.display = 'none';
   }
   project.forEach((i, e) => {
      if (e >= numberHide) i.classList.add('hide');
   })

   cardNews.forEach((i, e) => {
      if (e >= numberHide) i.classList.add('hide');
   })
}

// showing text if there is no project cards

loadMore()

//pup menu

const openContact = document.querySelector('.contact-pup');
const openPub = document.querySelectorAll('.open-pub');
const pupMenu = document.querySelector('.wrap-pup');
const contactMenu = document.querySelector('.contact-menu');






//to open pup-menu
openPub.forEach(e => {
   e.addEventListener('click', event => {
      event.preventDefault();
      let htmlPubMenu;
      if (e.classList.contains('contact-pup')) {
         htmlPubMenu = `<div class="contact-menu hiden-content ">
         <div class="exit">
            <i class="fas fa-times"></i>
         </div>

         <div class="left-side">
            <h3 class="contact-menu__title">LET'S TALK!</h3>
            <h2 class="contact-menu__sup-title">CALL ME OR SEND ME A REQUEST</h2>
            <div class="contact-menu__contact-person">
               <div class="contact-menu__phone-text">
                  <i class="fas fa-phone"></i> +380986404004
               </div>
               <div class="contact-menu__email-text">
                  <i class="fas fa-envelope"></i> gapachilomaxim@gmail.com
               </div>
            </div>
            <form action="POST">
               <label for="email">
                  Adress e-mail
               </label>
               <input class="contact-menu__email" type="email" name="email" id="email" placeholder="Adress e-mail">

               <label for="text">
                  Request
               </label>
               <textarea class="contact-menu__request" name="text" id="text"
                  placeholder="Type your request..."></textarea>

               <div class="contact-menu__wrap-btn">
                  <button class="contact-menu__send" type="submit">SEND</button>
               </div>

            </form>
         </div>
         <div class="rigth-side">
            <div class="contact-menu__wrap-img">
               <img class="contact-menu__img" src="img/request.png" alt="request">
            </div>
         </div>
      </div>`
      } else if (e.classList.contains('resume-pup')) {
         htmlPubMenu = `<div class="resume hiden-content ">
         <div class="exit">
            <i class="fas fa-times"></i>
         </div>
         <h3 class="resume__title">
            Resume
         </h3>
         <div class="resume__btns">
            <button class="resume__download btn">DOWNLOAD PDF</button>
            <button class="resume__print btn">PRINT</button>
         </div>
         <div class="resume__content">
            <div class="resume__left-side">
               <div class="resume__descr">
                  <h4 class="resume__title-section resume__title-section-first">COURSES</h4>
                  <div class="resume__wrap-info resume__wrap-info-first">
                     <div class="resume__year">2019</div>
                     <h5 class="resume__info-title"> QA tester</h5>
                     <h6 class="resume__info-sub-title">Software Testing course at QATestLab</h6>
                     <p class="resume__info-text">In the 2019 i bought Software Testing course at QATestLab and passed
                        online course. Then i had been passing trainee week and got basic skills of QA testing.</p>
                  </div>
                  <div class="resume__wrap-info">
                     <div class="resume__year">2020</div>
                     <h5 class="resume__info-title">Angular</h5>
                     <h6 class="resume__info-sub-title">The complete angular master class Udemy</h6>
                     <p class="resume__info-text">In the 2020 i got angular framework and passed a whole course. In the
                        course except front end material included: Angular Material/Redux|Unit testing and HTTP request.
                     </p>
                  </div>
               </div>
            </div>
            <div class="resume__rigth-side">
               <div class="resume__descr">
                  <h4 class="resume__title-section resume__title-section-first">EDUCATION</h4>
                  <div class="resume__wrap-info resume__wrap-info-first">
                     <div class="resume__year">2018 - 2021</div>
                     <h5 class="resume__info-title">Accounting and audit</h5>
                     <h6 class="resume__info-sub-title">National University of Food Technologies, Kyiv</h6>
                  </div>
                  <div class="resume__wrap-info">
                     <div class="resume__year">2014 - 2018</div>
                     <h5 class="resume__info-title">Accounting and audit</h5>
                     <h6 class="resume__info-sub-title">College of Food Technologies, Lviv</h6>
                  </div>
               </div>
               <div class="resume__descr">
                  <h4 class="resume__title-section">SKILLS</h4>
                  <div class="resume__skills">
                     <div class="resume__name-skill resume__name-skill-html">HTML</div>
                     <div class="resume__name-skill resume__name-skill-css">CSS</div>
                     <div class="resume__name-skill resume__name-skill-js">JavaScript</div>
                     <div class="resume__name-skill resume__name-skill-angular">Angular</div>
                     <div class="resume__name-skill resume__name-skill-jq">jQuery</div>
                     <div class="resume__name-skill resume__name-skill-sql">SQL</div>
                  </div>
               </div>
            </div>
         </div>
      </div>`
      } else {
         let content = e.closest('.blog__card-news').innerHTML;
         htmlPubMenu = `<div class="readMore hiden-content ">
         <div class="exit">
            <i class="fas fa-times"></i>
         </div>
         ${content}
      </div>`
      }

      pupMenu.innerHTML = htmlPubMenu;
      open()
      document.body.classList.add('modal-hiden');
      let exitMenu = document.querySelector('.exit');
      exit(exitMenu)

   })
})

//exit by clicking on the cross
function exit(exitMenu) {
   exitMenu.addEventListener('click', () => {
      pupMenu.classList.remove('show-wrap')
      pupMenu.children[0].classList.add('hiden')
      document.body.classList.remove('modal-hiden');
      hideHtml()
   })
}

function open() {
   pupMenu.classList.add('show-wrap')
   pupMenu.children[0].classList.remove('hiden')
   pupMenu.children[0].classList.add('showen')
}


pupMenu.addEventListener('click', e => {
   if (e.target === pupMenu) {
      pupMenu.classList.remove('show-wrap');
      pupMenu.children[0].classList.add('hiden');
      document.body.classList.remove('modal-hiden');
      hideHtml()
   } else if (e.target.classList.contains('contact-menu__send')) {
      sendRequest(e);
   } else if (e.target.classList.contains('resume__print')) {
      printdiv()
   } else if (e.target.classList.contains('resume__download')) {
      downloadResume()
   }
})

//remove html after animation
function hideHtml() {
   pupMenu.children[0].addEventListener('animationend', () => {
      pupMenu.innerHTML = '';
   })
}

//Send message in the contact-menu
function sendRequest(e) {
   e.preventDefault();
   let token = '1493196906:AAFToUZNu-BPyY19WIHU8a_oHuoJKh0yODM';
   let id = '739141801';
   let form = new FormData(document.querySelector('form'));
   let txt = `%0A<b>email:</b> ${form.get('email')}%0A<b>request:</b> ${form.get('text')}`
   fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${id}&parse_mode=html&text=${txt}`, {
      method: 'POST',
   });
   pupMenu.classList.remove('show-wrap')
   pupMenu.children[0].classList.add('hiden')
   document.body.classList.remove('modal-hiden');
   hideHtml()
   alertRequest()
}

//alert message after a successful request
function alertRequest() {
   let alert = `<div class="alert-request">
  The request has just been sent
</div>`;
   document.body.insertAdjacentHTML('afterbegin', alert);
   let alertHtml = document.querySelector('.alert-request');

   alertHtml.addEventListener('animationend', () => {
      document.querySelector('.alert-request').remove();
   })
}

//print resume
function printdiv() {
   window.print();
}

//download the resume
function downloadResume() {
   window.location.href = "https://drive.google.com/u/0/uc?id=1FP4HP-IrtSDpEsD65bHf_tECY1UjgaJE&export=download";
   return false;
}

//dynamic birthday
function datee(year, month, day) {
   let innerAge = document.querySelector('.age-person');
   //current date
   let now = new Date();
   //current date without time
   let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
   //birthday date
   let dob = new Date(year, month, day);
   //birthday in the current year
   let dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
   //Возраст
   let age;

   //Year = current year - year of birth
   age = today.getFullYear() - dob.getFullYear();
   // if birthday is still come in this year,then subtract one year from age
   if (today < dobnow) {
      age = age - 1;
   }
   innerAge.innerHTML = age;

}

datee(1999, 5, 21);
