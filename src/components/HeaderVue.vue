<template>
  <!-- :class="[isSticky?'sticky fade-in backdrop-blur-lg':'absolute',isFadeOut?'fade-out':'fade-in']" -->
  <header class="inset-x-0 fixed bg-white/50 backdrop-blur-md top-0 z-[100] transition-colors duration-1000" id="header">
    <nav
      class="flex navbar px-0 md:px-28 2xl:px-36 w-full flex-nowrap items-center justify-between text-white py-5  h-full hover:text-neutral-100 focus:text-neutral-100 lg:flex-wrap lg:justify-start lg:py-2"
      data-twe-navbar-ref>
      <div class="flex w-full flex-wrap items-center justify-between px-3">
        <div class="ms-2">
          <span @click="navigateTo('/')" class="flex items-center cursor-pointer space-x-3 rtl:space-x-reverse">
            <img src="../assets/img/logo.png" class="h-8 lg:h-10" alt="Techbank Movies Logo" />
          </span>
        </div>
        <!-- Hamburger button for mobile view -->
        <!-- <button
          class="block border-0 bg-transparent px-2 text-white hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
          type="button" data-twe-collapse-init data-twe-target="#navbarSupportedContent3"
          aria-controls="navbarSupportedContent3" aria-expanded="false" aria-label="Toggle navigation">
          <span class="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path fill-rule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clip-rule="evenodd" />
            </svg>
          </span>
        </button> -->
        <a v-if="isIOS" :href="iosLink" class="block md:hidden text-white text-2xl px-1 rounded-sm bg-[#2656AD]">
          <i class='bx bx-download' ></i>
        </a>
        <a v-else :href="androidLink" class="block md:hidden text-white text-2xl px-1 rounded-sm bg-[#2656AD]">
          <i class='bx bx-download' ></i>
        </a>

        <div
          class="!visible  transition-all hidden -mt-16  md:bg-transparent rounded-cl flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto rounded-b-2xl"
          id="navbarSupportedContent3" data-twe-collapse-item>
          <!-- Left links -->
          <div class="md:hidden py-5" style="font-family: Montserrat;">
            <h2 class="text-center text-[#414040] text-6xl font-black">Menu</h2>
          </div>
          <ul
            class="list-style-none font-[400] relative overflow-hidden text-center ms-auto flex flex-col ps-0 lg:mt-1 lg:flex-row"
            data-twe-navbar-nav-ref>
            <!-- Home link -->
            <!-- Contact Us button -->
            <li
              class="py-4 ps-2 lg:my-0 lg:pe-1 rounded-lg hover:bg-black/20 md:hover:bg-transparent lg:ps-2 hidden md:block"
              data-twe-nav-item-ref>
              <button data-twe-ripple-init onclick="window.open('https://drive.google.com/file/d/1p9SX2Zkll-4ZIIb-SQ4-YptIh0oyo0Ez/view?usp=drive_link')"
                data-twe-ripple-color="light" class="text-white transition-all duration-[2500ms] px-7 py-3 bg-[#2656AD] hover:bg-transparent ring-0 ring-[#2656AD] hover:ring-1 rounded-md"><img src="../../src/assets/img/playstore.svg" alt="">
                </button>
            </li>
            <li
              class="py-4 ps-2 lg:my-0 lg:pe-1 rounded-lg hover:bg-black/20 md:hover:bg-transparent lg:ps-2 hidden md:block"
              data-twe-nav-item-ref>
              <button onclick="window.open('https://testflight.apple.com/join/76DAa5zw')" data-twe-ripple-init
                data-twe-ripple-color="light" class="text-white transition-all duration-[2500ms]  px-7 py-3 bg-[#2656AD] hover:bg-transparent ring-0 ring-gray-[#2656AD] hover:ring-1 rounded-md"><img src="../../src/assets/img/appstore.svg" alt="">
                </button>
            </li>
          </ul>
          <div class="absolute flex justify-center w-full">
            <button data-twe-collapse-init data-twe-target="#navbarSupportedContent3"
              aria-controls="navbarSupportedContent3" aria-expanded="false" aria-label="Toggle navigation"
              class="bg-[#222222] text-white/50 px-6 mt-2 rounded-full text-center mx-auto block md:hidden shadow-lg shadow-black/50 py-1 flex items-center"><i
                class="bx bx-x text-xl font-extrabold"></i>close</button>

          </div>
        </div>
        <!-- Collapsible wrapper -->
      </div>
    </nav>
  </header>
</template>
<script>
import { Collapse, initTWE } from "tw-elements";
export default {
  data() {
    return {
      isScrolled: false,
      isAndroid: false,
      isIOS: false,
      androidLink: 'https://drive.google.com/file/d/1p9SX2Zkll-4ZIIb-SQ4-YptIh0oyo0Ez/view?usp=drive_link',
      iosLink: 'https://testflight.apple.com/join/76DAa5zw'
    };
  },
  created(){
    this.handleScroll()
    this.detectDevice();
  },
  mounted() {
    initTWE({ Collapse });
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    isActive(route) {
      return this.$route.path === route;
    },
    navItemClass(route) {
      return {
        'py-4': true,
        'ps-2': true,
        'lg:my-0': true,
        'lg:pe-1': true,
        'rounded-lg': true,
        'hover:bg-black/20': true,
        'md:hover:bg-transparent': true,
        'lg:ps-2': true
      };
    },
    handleScroll() {
      const header = document.getElementById("header");
      if (header) {
        if(window.scrollY < 10){
          header.style.backdropFilter = "blur(5px)";
          header.style.backgroundColor = "rgb(255 255 255 / 0.5)";
        } else {
          header.style.backgroundColor = "#ffffff";
          header.style.backdropFilter = "blur(0px)";
        
        }
      }
    },
    detectDevice() {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      if (/android/i.test(userAgent)) {
        this.isAndroid = true;
      } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        this.isIOS = true;
      }
    }
  },
  watch: {
    // Watch for changes in currentLocation
    currentLocation(newValue, oldValue) {
      // React to changes here, if needed
      console.log('Current location changed:', oldValue, '->', newValue);
      // You can also update other properties or perform additional actions here
    }
  },
};
</script>
<style>
.active {
  color: #ffffff;
  /* Example color for active link */
  font-weight: 700;
  /* Example font weight for active link */
}

/* li {
  margin-bottom: 10px;
} */

.cool-link {
  display: inline-block;
  text-decoration: none;
}

.cool-link::after {
  content: '';
  display: block;
  width: 0;
  height: 2px;
  background: #1FFFBC;
  transition: width .3s;
  margin-top: 3px;

}

.cool-link.active::after,
.cool-link:hover::after {
  margin-top: 3px;
  width: 100%;
  transition: width .3s;
}

@media (min-width: 768px) {

  .cool-link.active::after,
  .cool-link:hover::after {
    margin-top: 3px;
    width: 70%;
    transition: width .3s;
  }
}

.fade-out {
  opacity: 0;
  transition: opacity 2s ease;
}

.fade-in {
  opacity: 10;
  transition: opacity 3s ease;
}
#header {
    transition: background-color 2s; /* Adjust the duration as needed */
}
</style>
