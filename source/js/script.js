const links = document.querySelectorAll('.features__nav-link');

const handle = (e) => {
  e.preventDefault();
  const nav = e.target.closest('.features__tabs');
  if (!nav.querySelector('.features__tab-pane.active')) {
    const nextTabContentId = e.target.closest('.features__nav-link').hash;
    const nextTabContent = nav.querySelector(nextTabContentId);
    nextTabContent.classList.add('active');
    e.target.closest('.features__nav-item').classList.add('active');
  } else {
    const current = nav.querySelector('.features__tab-pane.active');
    const currentItem = nav.querySelector('.features__nav-item.active');

    current.classList.remove('active');
    currentItem.classList.remove('active');

    const nextTabContentId = e.target.closest('.features__nav-link').hash;
    const nextTabContent = nav.querySelector(nextTabContentId);

    if (nextTabContentId.slice(1) === current.id) return;
    nextTabContent.classList.add('active');
    e.target.closest('.features__nav-item').classList.add('active');
  }
};

links.forEach((link) => {
  link.addEventListener('click', handle);
});

const btnScrollDown = document.querySelector('.page-header__scroll-btn');
const scrollDown = () => {
  const windowCoords = document.documentElement.clientHeight;
  const scroll = () => {
    if (window.pageYOffset < windowCoords) {
      window.scrollBy(0, 10);
      setTimeout(scroll, 0);
    }
  };
  scroll();
};
btnScrollDown.addEventListener('click', scrollDown);

const domenInput = document.querySelector('.page-header__checking');
const submitBtn = document.querySelector('.page-header__submit');
const message = document.querySelector('.page-header__message');

domenInput.addEventListener('input', () => {
  if (message.classList.contains('active')) {
    message.classList.remove('active');
  }
});

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const span = document.createElement('span');
  span.textContent = `Домен ${domenInput.value}.ru - свободен. `;
  message.prepend(span);
  message.classList.add('active');
});

const indicator = document.querySelector('.indicator');

window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  if (scrolled > 400) {
    indicator.querySelector('.active').classList.remove('active');
    indicator.querySelector('.indicator__item--second').classList.add('active');
  }

  if (scrolled > 1250) {
    indicator.querySelector('.active').classList.remove('active');
    indicator.querySelector('.indicator__item--third').classList.add('active');
  }

  if (scrolled <= 400) {
    indicator.querySelector('.active').classList.remove('active');
    indicator.querySelector('.indicator__item--first').classList.add('active');
  }
});
