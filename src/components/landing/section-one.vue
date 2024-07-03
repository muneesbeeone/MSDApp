<template>
  <div class="relative min-h-screen overflow-hidden flex items-center max-h-auto md:max-h-[1080px] ">
    <img class="transition-transform left-0 top-0 absolute  duration-[2000ms] transform"
      src="./../../assets/img/ellipse-top.png" alt="" />
    <img class="transition-transform right-0 bottom-0 absolute  duration-[2000ms] transform"
      src="./../../assets/img/ellipse-bottom.png" alt="" />
    <div class="relative min-h-screen py-24 2xl:py-36 xl:py-28 w-full items-center px-6  md:px-24 2xl:px-32">
      <div class="w-full 2xl:pb-36 xl:pb-28 pb-24 flex justify-center">
        <h1
          class="text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl dm-sans-header  tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#7294FC] to-[#0047FF]">
          Explore Exciting Features
        </h1>
      </div>
      <div>
        <div class="flex flex-wrap  gap-5 justify-center">
          <div
            class="md:max-w-[350px] 2xl:max-w-md 2xl:max-w-md md:min-h-[550px] xl:min-h-[550px] 2xl:min-h-[600px] flex flex-col justify-start h-full space-y-2 bg-gradient-to-br from-[#5686ffc5] to-[#FFFFFF] p-1 rounded-xl">
            <div class="bg-[#000000] rounded-lg">
              <img class="rounded-lg" src="../../assets/img/features1.png" alt="" />
            </div>
            <div class="p-8 space-y-4">
              <h4 class="text-[#0D51FF] text-2xl xl:text-3xl 2xl:text-4xl md:text-xl dm-sans-header tracking-wide">
                Unlock
                Exclusive M S
                Dhoni Content</h4>
              <p class="text-gray-900 inter-sub  text-sm italic   ">
                Access never-before-seen photos, videos, and interviews with MS Dhoni, available only on our app.
              </p>
            </div>
          </div>
          <div
            class="md:max-w-[350px] 2xl:max-w-md 2xl:max-w-md md:min-h-[550px] 2xl:min-h-[600px] flex flex-col justify-start h-full space-y-2 bg-gradient-to-br from-[#5686ffc5] to-[#FFFFFF] p-1 rounded-xl">
            <div class="bg-[#000000] rounded-lg">
              <img class="rounded-lg" src="../../assets/img/features3.png" alt="" />
            </div>
            <div class="p-8 space-y-4">
              <h4 class="text-[#0D51FF] text-2xl tracking-wide xl:text-3xl 2xl:text-4xl md:text-xl dm-sans-header ">
                Connect with Dhoni Fans Worldwide
              </h4>
              <p class="text-gray-900 inter-sub  text-sm italic   ">
                Engage in discussions, share your thoughts, and connect with fellow Dhoni enthusiasts through our
                vibrant community forums and clubs
              </p>
            </div>
          </div>
          <div
            class="md:max-w-[350px] 2xl:max-w-md 2xl:max-w-md md:min-h-[550px] 2xl:min-h-[600px] flex flex-col justify-start h-full space-y-2 bg-gradient-to-br from-[#5686ffc5] to-[#FFFFFF] p-1 rounded-xl">
            <div class="bg-[#000000] rounded-lg">
              <img class="rounded-lg" src="../../assets/img/features2.png" alt="" />
            </div>
            <div class="p-8 space-y-4">
              <h4 class="text-[#0D51FF] text-2xl tracking-wide xl:text-3xl 2xl:text-4xl md:text-xl dm-sans-header ">
                Stay Updated with<br />M S Dhoni
              </h4>
              <p class="text-gray-900 inter-sub  text-sm italic   ">
                Get real-time news and updates about MS Dhoni's career and personal milestones straight to your device
              </p>
            </div>
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
      isMobile: false,
    }
  },
  methods: {
    
  }
};
</script>
