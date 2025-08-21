//   Navber Scroll
document.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    if (window.scrollY > 100) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

//   Navbar Menu sidebar
const menuIcon = document.getElementById('menuIcon');
const sideMenu = document.getElementById('sideMenu');
const closeMenu = document.getElementById('closeMenu');
const overlay = document.getElementById('overlay');
const closeMenuWrapper = document.getElementById('closeMenuWrapper');

menuIcon.addEventListener('click', () => {
    sideMenu.classList.add('active');
    overlay.classList.add('active');
    closeMenuWrapper.style.display = 'block';
});

function closeSideMenu() {
    sideMenu.classList.remove('active');
    overlay.classList.remove('active');
    closeMenuWrapper.style.display = 'none';
}

closeMenu.addEventListener('click', closeSideMenu);
// overlay.addEventListener('click', closeSideMenu);




  document.querySelectorAll(".menu-links li").forEach(li => {
    li.addEventListener("click", function() {
      // Remove active from all items
      document.querySelectorAll(".menu-links li").forEach(item => {
        item.classList.remove("active");
      });

      // Add active to clicked item
      this.classList.add("active");
    });
  });



    // Smooth scroll to top when clicking "Back To Up"
    document.querySelector(".back-to-top").addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

// Blogs
    const blogSwiper = new Swiper(".blogSwiper", {
      slidesPerView: 3,
      spaceBetween: 24,
      
      loop: true,
      navigation: {
        nextEl: ".blog-next",
        prevEl: ".blog-prev",
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }
      
    });



    
const awardSwiper = new Swiper(".awardSwiper", {
  slidesPerView: 3,
  // spaceBetween: 24,
    autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: ".award-next",
    prevEl: ".award-prev",
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 4 }
  }
});

const completeSwiper = new Swiper(".completeSwiper", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".complete-next",
    prevEl: ".complete-prev",
  },
});

const upcomingSwiper = new Swiper(".upcomingSwiper", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".upcoming-next",
    prevEl: ".upcoming-prev",
  },
});

const ongoingSwiper = new Swiper(".ongoingSwiper", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".ongoing-next",
    prevEl: ".ongoing-prev",
  },
});


  // const prevBtn = document.querySelector('.blog-prev');
  // const nextBtn = document.querySelector('.blog-next');

  // prevBtn.addEventListener('click', () => {
  //   prevBtn.classList.add('active');
  //   nextBtn.classList.remove('active');
  // });

  // nextBtn.addEventListener('click', () => {
  //   nextBtn.classList.add('active');
  //   prevBtn.classList.remove('active');
  // });

    

  // document.addEventListener("DOMContentLoaded", function () {
  //   const counters = document.querySelectorAll('.stat-number');

  //   counters.forEach(counter => {
  //     const target = +counter.getAttribute('data-target');
  //     const countEl = counter.querySelector('.count-num');
  //     let count = 0;

  //     const speed = 50; // smaller is faster
  //     const step = Math.ceil(target / 100);

  //     const updateCount = () => {
  //       count += step;
  //       if (count > target) count = target;
  //       countEl.textContent = count;
  //       if (count < target) {
  //         setTimeout(updateCount, speed);
  //       }
  //     };

  //     // Optional: trigger on scroll
  //     const observer = new IntersectionObserver(entries => {
  //       if (entries[0].isIntersecting) {
  //         updateCount();
  //         observer.unobserve(counter);
  //       }
  //     }, { threshold: 0.5 });

  //     observer.observe(counter);
  //   });
  // });





  document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll('.stat-number');

    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const countEl = counter.querySelector('.count-num');
      let count = 0;

      const duration = 5000; // total duration in ms (2 seconds)
      const frameRate = 60; // ~60 frames per second
      const totalFrames = Math.round(duration / (1000 / frameRate));
      const increment = target / totalFrames;

      const updateCount = () => {
        count += increment;
        if (count >= target) {
          countEl.textContent = target;
        } else {
          countEl.textContent = Math.floor(count);
          requestAnimationFrame(updateCount); // smoother than setTimeout
        }
      };

      // Trigger when visible
      const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          updateCount();
          observer.unobserve(counter);
        }
      }, { threshold: 0.5 });

      observer.observe(counter);
    });
  });





  document.querySelectorAll(".tab-link").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".tab-link").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));
    document.getElementById(button.dataset.tab).classList.add("active");
  });
});


  // const swiper = new Swiper('.swiper', {
  //   loop: false,
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  //     renderBullet: function (index, className) {
  //       return '<span class="' + className + '">' + ('0' + (index + 1)) + '</span>';
  //     }
  //   }
  // });

    var testimonialSwiper = new Swiper(".testimonialSwiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        let number = (index + 1).toString().padStart(2, "0"); // 01, 02, 03
        return '<span class="' + className + '">' + number + "</span>";
      },
    },
  });