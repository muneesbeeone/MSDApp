<template>
  <div class="relative min-h-screen overflow-hidden flex items-center max-h-auto md:max-h-[1080px] ">
    <div class="flex left-0 absolute md:block hidden">
      <img class="transition-transform w-[100%] mt-3 max-h-screen hidden md:block duration-[2000ms] transform"
        src="./../../assets/img/banner-mask.png" alt="" />
    </div>
    <div class="flex right-0 absolute md:block hidden justify-center">
      <img class="transition-transform w-[100%] mt-3 max-h-screen duration-[2000ms] transform"
        src="./../../assets/img/landing-hero1.png" alt="" />
    </div>
    <div class="relative min-h-screen overflow-hidden flex lg:px-12 items-center">
      <!-- <header-vue /> -->
      <div class="relative z-10">
        <div class=" w-screen flex flex-wrap justify-between  items-center z-20 relative">
          <div
            class="w-full md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-5xl h-full items-center px-6 pt-32  md:px-24 2xl:px-32 ">
            <div class="text-left font-sans space-y-12">
              <div class="space-y-5" data-aos="fade" data-aos-duration="1000" data-aos-easing="ease-in">
                <h1
                  class=" dm-sans-header tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-[#7294FC] to-[#0047FF]  text-3xl md:text-3xl lg:text-5xl xl:text-5xl 2xl:text-[5rem]">
                  Discover the Ultimate Destination for<br> <span class="font-[500]">M S Dhoni</span> Content
                </h1>
                <p
                  class="text-sm md:text-medium lg:text-medium xl:text-medium 2xl:text-lg inter-sub font-[400] italic lg:max-w-lg xl:max-w-md 2xl:max-w-xl inter-sub">
                  Discover the Ultimate Destination for MS Dhoni Content. Download
                  the app now to access exclusive
                  updates, posts, and videos!</p>
                <div class="mt-4 space-y-4 pt-4">
                  <p class="inter-sub text-lg font-semibold">
                    Download the app from
                  </p>
                  <div class="flex gap-3">
                    <button onclick="window.open('https://drive.google.com/file/d/1p9SX2Zkll-4ZIIb-SQ4-YptIh0oyo0Ez/view?usp=drive_link')" data-twe-ripple-init
                      data-twe-ripple-color="light"
                      class="text-white transition-all flex justify-center items-center duration-[2500ms] md:px-7 px-4 py-3 bg-[#2656AD]  rounded-md"><img
                        src="/src/assets/img/playstore.svg" class="w-20 md:w-full" alt="">
                    </button>
                    <button onclick="window.open('https://testflight.apple.com/join/76DAa5zw')"  data-twe-ripple-init
                      data-twe-ripple-color="light"
                      class="text-white transition-all duration-[2500ms] flex justify-center items-center md:px-7 px-4 py-3 bg-[#2656AD] rounded-md"><img
                        src="/src/assets/img/appstore.svg" class="w-20 md:w-full" alt="">
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex  md:hidden block h-fit overflow-hidden w-screen relative bottom-0 justify-center">
            <img class="transition-transform w-[100%] max-h-screen -mt-11 duration-[2000ms] transform"
              src="./../../assets/img/mobile-hero.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isHovered: false,
      isFadeOut: false,
      isSticky: false,
      scrollThreshold: 1
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    toggleHover() {
      this.isHovered = !this.isHovered;
    },

  },
};
</script>
