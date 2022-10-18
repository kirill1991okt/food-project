function slider({
  sliderSelector,
  slidesSelector,
  prevArrow,
  nextArrow,
  currentId,
  totalId,
  wrapper,
  field,
}) {
  const slides = document.querySelectorAll(slidesSelector),
    slider = document.querySelector(sliderSelector),
    prev = document.querySelector(prevArrow),
    next = document.querySelector(nextArrow),
    current = document.querySelector(currentId),
    total = document.querySelector(totalId),
    slidesWrapper = document.querySelector(wrapper),
    slidesField = document.querySelector(field),
    width = window.getComputedStyle(slidesWrapper).width;

  let offset = 0;
  let indexSlide = 1;

  slidesField.style.width = 100 * slides.length + '%';

  slides.forEach((slide) => {
    slide.style.width = width;
  });

  slidesField.style.display = 'flex';
  slidesField.style.transition = '0.5s all';

  slidesWrapper.style.overflow = 'hidden';

  slider.style.position = 'relative';

  const indicators = document.createElement('ol');
  indicators.classList.add('carousel-indicators');
  slider.append(indicators);

  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('li');
    dot.setAttribute('indicator-slide-to', i + 1);
    dot.classList.add('dot');

    indicators.append(dot);

    if (i == 0) {
      dot.style.opacity = '1';
    }
  }

  const dots = document.querySelectorAll('.dot');

  if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
  } else {
    total.textContent = slides.length;
  }

  showSlides(indexSlide);

  next.addEventListener('click', () => {
    if (offset == widthToNumber(width) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += widthToNumber(width);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    plusSlide(1);

    currentDot(indexSlide);
  });

  prev.addEventListener('click', () => {
    if (offset == 0) {
      offset = widthToNumber(width) * (slides.length - 1);
    } else {
      offset -= widthToNumber(width);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    plusSlide(-1);

    currentDot(indexSlide);
  });

  dots.forEach((dot) => {
    dot.addEventListener('click', (e) => {
      const currentSlide = e.target.getAttribute('indicator-slide-to');
      indexSlide = currentSlide;

      currentDot(indexSlide);

      offset = widthToNumber(width) * (currentSlide - 1);
      slidesField.style.transform = `translateX(-${offset}px)`;

      showSlides(indexSlide);
    });
  });

  function widthToNumber(str) {
    return +str.replace(/\D/g, '');
  }

  function currentDot(index) {
    dots.forEach((dot) => {
      dot.style.opacity = '0.5';
    });
    dots[index - 1].style.opacity = '1';
  }

  function showSlides(n) {
    if (n > slides.length) {
      indexSlide = 1;
    }

    if (n < 1) {
      indexSlide = slides.length;
    }

    if (indexSlide < 10) {
      current.textContent = `0${indexSlide}`;
    } else {
      current.textContent = indexSlide;
    }
  }

  function plusSlide(n) {
    showSlides((indexSlide += n));
  }

  // showSlides(indexSlide);

  // function showSlides(n) {
  //   if (n > slides.length) {
  //     indexSlide = 1;
  //   }

  //   if (n < 1) {
  //     indexSlide = slides.length;
  //   }

  //   slides.forEach(item => {
  //     item.style.display = 'none';
  //   });

  //   slides[indexSlide - 1].style.display = 'block';

  //   if (indexSlide < 10) {
  //     current.textContent = `0${indexSlide}`;
  //   } else {
  //     current.textContent = indexSlide;
  //   }

  // }

  // function plusSlide(n) {
  //   showSlides(indexSlide += n);
  // }

  // prev.addEventListener('click', () => {
  //   plusSlide(-1);
  // });

  // next.addEventListener('click', () => {
  //   plusSlide(1);
  // });
}

// синтаксис  CommonJS
// module.exports = slider;

export default slider;
