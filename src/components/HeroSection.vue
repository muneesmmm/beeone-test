<template>
  <div class="isolate relative bg-primary">

    <div
      style="border-radius: 0 0 50% 50%"
      class="opacity-90 max-w-screen-2xl bg-secondary mx-auto absolute top-0 left-1/2 -translate-x-1/2 h-[20rem] md:h-[20rem] text-center w-screen -z-10 transform-gpu bg-gradient-to-b from-blue-900 to-blue-500"
    >
      <div>
        <span
          class="font-bold absolute top-20 md:top-1 left-1/2 -translate-x-1/2 text-transparent text-9xl md:text-[15rem] bg-clip-text bg-gradient-to-b from-blue-100 to-blue-600 animate-text"
        >
          TEXT

        </span>
      </div>

    </div>

    <div class="px-6 pt-6 lg:px-8">
      <nav
        class="flex items-center justify-between max-w-screen-2xl mx-auto"
        aria-label="Global"
      >
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <v-card
              style="background-color: #1f5eff"
              class="bg-gradient-to-b from-blue-600 to-blue-500 px-5 text-white font-bold p-2"
              >UI/UX TEST</v-card
            >
          </a>
        </div>
        <div class="flex md:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            @click="showMenu()"
          >
            <span class="sr-only">Open main menu</span>
            <!-- <Bars3Icon class="h-6 w-6" aria-hidden="true" /> -->
            <div
              class="w-10 h-10 text-white border-2 border-white rounded-full text-sm"
            >
              <span class="block mt-1">Me</span>
              <span class="block -mt-2 ml-1">Nu</span>
            </div>
          </button>
        </div>
      </nav>
      <div>
        <transition name="fade">

        <div
        v-if="mobileMenuOpen"
          class="fixed max-w-screen-2xl mx-auto rounded-md inset-0 z-10 overflow-y-auto bg-white dialog "
        >
          <div class="">
            <button
              type="button"
              class="m-5 cursor-pointer p-2.5 border-2 border-black right-0 absolute rounded-full text-gray-700 z-50"
              @click="hideMenu()"
            >
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="grid md:grid-cols-4 bg-white h-screen relative ">
            <div class="bg-menu h-screen  py-6 flex flex-col justify-between">
              <div
                style="background-color: #1f5eff"
                class="bg-gradient-to-b from-blue-600 to-blue-500 px-5 text-white font-bold p-2 w-36 mx-auto"
                >UI/UX TEST</div>
              <div class="w-64 mx-auto mb-10">
                <span class="text-primary font-bold text-2xl">
                  Connect With Us
                </span>
                <p>Lorem, ipsum dolor.</p>
                <div class="flex flex-col mt-9  space-y-4">
                  <div class="flex gap-x-5">
                    <div class="bg-secondary rounded-md p-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/></svg>                  </div>
                    <div>
                      <span class="font-bold"> facebook</span>
                    </div>
                  </div>
                  <div class="flex gap-x-5">
                    <div class="bg-secondary rounded-md p-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M12 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10a5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058c-.784.037-1.31.142-1.798.332a2.886 2.886 0 0 0-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029c.037.783.142 1.31.331 1.797c.17.435.37.748.702 1.08c.337.336.65.537 1.08.703c.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058c.782-.037 1.309-.142 1.797-.331a2.92 2.92 0 0 0 1.08-.702c.337-.337.538-.65.704-1.08c.19-.493.296-1.02.332-1.8c.052-1.104.058-1.49.058-4.029c0-2.474-.007-2.878-.058-4.029c-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08a2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06c1.065.05 1.79.217 2.428.465c.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122c0 2.717-.01 3.056-.06 4.122c-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772a4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465c-1.066.047-1.405.06-4.122.06c-2.717 0-3.056-.01-4.122-.06c-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153a4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122c.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z"/></svg>                    
                      </div>
                    <div>
                      <span class="font-bold"> Instagram</span>
                    </div>
                  </div>
                  <div class="flex gap-x-5">
                    <div class="bg-secondary rounded-md p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><path fill="white" fill-rule="evenodd" d="M7.233 4.696c0-1.727 1.4-3.127 3.127-3.127c1.014 0 1.823.479 2.365 1.175a5.246 5.246 0 0 0 1.626-.629a2.634 2.634 0 0 1-1.148 1.45l.002.003a5.26 5.26 0 0 0 1.5-.413l-.001.002c-.337.505-.76.95-1.248 1.313c.026.177.04.354.04.53c0 3.687-2.809 7.975-7.975 7.975a7.93 7.93 0 0 1-4.296-1.26a.5.5 0 0 1-.108-.748a.45.45 0 0 1 .438-.215c.916.108 1.83-.004 2.637-.356a3.086 3.086 0 0 1-1.69-1.876a.45.45 0 0 1 .103-.448a3.07 3.07 0 0 1-1.045-2.31v-.034a.45.45 0 0 1 .365-.442a3.068 3.068 0 0 1-.344-1.416c0-.468.003-1.058.332-1.59a.45.45 0 0 1 .323-.208a.5.5 0 0 1 .538.161a6.964 6.964 0 0 0 4.46 2.507v-.044Zm-1.712 7.279a6.936 6.936 0 0 1-2.249-.373a5.318 5.318 0 0 0 2.39-1.042a.45.45 0 0 0-.27-.804a2.174 2.174 0 0 1-1.714-.888c.19-.015.376-.048.556-.096a.45.45 0 0 0-.028-.876a2.18 2.18 0 0 1-1.644-1.474c.2.048.409.077.623.084a.45.45 0 0 0 .265-.824a2.177 2.177 0 0 1-.97-1.812c0-.168.003-.317.013-.453a7.95 7.95 0 0 0 5.282 2.376a.5.5 0 0 0 .513-.61a2.127 2.127 0 0 1 2.071-2.614c1.234 0 2.136 1.143 2.136 2.432c0 3.256-2.476 6.974-6.975 6.974Z" clip-rule="evenodd"/></svg>                      </div>
                    <div>
                      <span class="font-bold">Twitter</span>
                    </div>
                  </div>
                  <div class="flex gap-x-5">
                    <div class="bg-secondary rounded-md p-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23c-1.48 0-2.93-.39-4.19-1.15l-.3-.17l-3.12.82l.83-3.04l-.2-.32a8.188 8.188 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31c-.22.25-.87.86-.87 2.07c0 1.22.89 2.39 1 2.56c.14.17 1.76 2.67 4.25 3.73c.59.27 1.05.42 1.41.53c.59.19 1.13.16 1.56.1c.48-.07 1.46-.6 1.67-1.18c.21-.58.21-1.07.15-1.18c-.07-.1-.23-.16-.48-.27c-.25-.14-1.47-.74-1.69-.82c-.23-.08-.37-.12-.56.12c-.16.25-.64.81-.78.97c-.15.17-.29.19-.53.07c-.26-.13-1.06-.39-2-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.12-.24-.01-.39.11-.5c.11-.11.27-.29.37-.44c.13-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.11-.56-1.35-.77-1.84c-.2-.48-.4-.42-.56-.43c-.14 0-.3-.01-.47-.01Z"/></svg>                    </div>
                    <div>
                      <span class="font-bold">WhatsApp</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class=" px-14 py-10">
              <div class="flex items-center gap-x-10">
                <div class="font-bold text-secondary text-9xl">Menu</div>
              <div><button
                type="button"
                class="outline  up-item  outline-1 rounded-2xl h-9    text-lg px-10 font-semibold shadow-sm outline outline-offset-4 outline-indigo-600"
              >
                Login
              </button></div>
              </div>
              <div  class="flex flex-col ">
                <div class="text-4xl font-bold text-gray-500  my-2  hover:text-black up-item" >Home </div>
                <div class="text-4xl font-bold text-gray-500  my-2  hover:text-black " >Our plans</div>
                <div class="text-4xl font-bold text-gray-500  my-2  hover:text-black up-item" >About Us</div>
                <div class="text-4xl font-bold text-gray-500  my-2  hover:text-black " >Contact Us</div>
                <div class="text-4xl font-bold text-gray-500  my-2  hover:text-black " >Career</div>
              </div>
              <div class="mt-[2rem] up-item" >
                <span class="font-bold text-2xl">
                  Address
                </span>
                <div class="flex flex-col mt-5 space-y-4">
                  <div class="flex gap-x-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12q.825 0 1.413-.588T14 10q0-.825-.588-1.413T12 8q-.825 0-1.413.588T10 10q0 .825.588 1.413T12 12Zm0 7.35q3.05-2.8 4.525-5.088T18 10.2q0-2.725-1.738-4.462T12 4Q9.475 4 7.737 5.738T6 10.2q0 1.775 1.475 4.063T12 19.35ZM12 22q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 2.5-1.988 5.438T12 22Zm0-11.8Z"/></svg>
                    <div>
                      <span class="font-bold"> Lorem ipsum Lorem ipsum</span>
                    </div>
                  </div>
                  <div class="flex gap-x-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="rotate(90 12 12)"><path fill="currentColor" d="M4.05 21q-.25 0-.525-.012q-.275-.013-.525-.038V15.1l5-1l2.9 2.9q1.9-1.15 3.488-2.725q1.587-1.575 2.637-3.375l-2.85-2.875L15.1 3h5.85q.05.25.05.525v.525q0 3.225-1.438 6.287q-1.437 3.063-3.8 5.438q-2.362 2.375-5.424 3.8Q7.275 21 4.05 21ZM17.975 9q.425-.975.65-1.975q.225-1 .35-2.025H16.75l-.425 2.35Zm-8.95 8.95L7.35 16.275L5 16.75v2.2q1.025-.075 2.038-.325q1.012-.25 1.987-.675ZM17.975 9Zm-8.95 8.95Z"/></g></svg>
                    <div>
                      <span class="font-bold"> 96459645</span>
                    </div>
                  </div>
                  <div class="flex gap-x-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M2 20V4h20v16Zm10-7L4 8v10h16V8Zm0-2l8-5H4ZM4 8V6v2Z"/></svg>
                    <div>
                      <span class="font-bold"> test@Lorem.in</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <div class="innerText  text-white   font-extrabold text-9xl absolute md:top-1 left-1/2 -translate-x-1/2 md:text-[14rem]    uppercase ">
                Text
              </div>
          </div>
          </div>
          </transition>

        </div>

    </div>
    <main>
      <div class="relative px-6 lg:px-8 pb-4">
        <div class="mx-auto max-w-2xl">
          <div class="sm:mb-9 mb-4 flex sm:justify-center sm:pb-12">
            <div class="relative text-sm leading-2 top-[4rem] sm:top[8rem]">
              <img
                class="h-45 pb-10"
                src="../assets/Elements/Bannerelements/Car.png"
                alt="cars"
              />
            </div>
            <div
            :class="mobileMenuOpen ?'w-full' : ''"
              class="absolute right-0 transition animate-border  duration-1000 bottom-0 md:bottom-4  md:border-l-2 pl-5 h-full flex flex-col justify-between mb-4"
            >
              <button
                type="button"
                class="-m-2.5 inline-flex invisible md:visible items-center justify-center rounded-md p-2.5 mr-2 text-gray-700"
                @click="showMenu()"
              >
                <span class="sr-only">Open main menu</span>
                <!-- <Bars3Icon class="h-6 w-6" aria-hidden="true" /> -->
                <div
                  class="w-10 h-10 text-white border-2 border-white rounded-full text-sm"
                >
                  <span class="block mt-1">Me</span>
                  <span class="block -mt-2 ml-1">Nu</span>
                </div>
              </button>
              <div
                class="flex gap-y-4 gap-x-4 flex-row md:flex-col mr-4 text-white divide-x-reverse"
              >
                <div class="">Fb.</div>
                <div class="">In.</div>
                <div class="">Tw.</div>
                <div class="">Ws.</div>
                <div class="">Ln.</div>
              </div>
            </div>
          </div>
          <div
            style="left: 0"
            class="absolute sm:h-20 h-15 rounded-r-md py-1 px-1 sm:px-3 text-sm text-gray-600 ring-1 ring-white hover:ring-white-900/100 hidden md:block"
          >
            <div class="ml-4 sm:ml-8">
              <span class="font-bold text-white text-2xl sm:text-4xl"
                >500+</span
              >
              <p class="text-white opacity-80">satisfied patrons</p>
            </div>
          </div>
          <div class="text-center">
            <h1
              class="sm:text-4xl text-sm font-bold tracking-tight text-white sm:text-xl"
            >
              Lorem ipsum dolor sit, amet consectetur.
            </h1>
            <div class="mt-5 pb-10 flex items-center  justify-center gap-x-5">
              <a
                href="#"
                class="text-sm flex font-semibold leading-6 text-white relative"
                >
                
              <div  :class="viewPlanHover ?'h-1  top-5' :'h-3  top-3'" class="absolute bg-secondary  -left-2 w-16 transition-all duration-200   z-0 "  >

              </div>
              <span class="z-50 " @mouseover="viewPlanHover = true" @mouseout="viewPlanHover=false">

                View plans
              </span>
                <span
                  ><img
                    class="px-2 py-2"
                    src="../assets/Elements/Bannerelements/Arrow.png" /></span
              ></a>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from 'gsap'
import { Dialog, DialogPanel } from "@headlessui/vue";
import { onMounted } from 'vue';

import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const navigation = [
];

const mobileMenuOpen = ref(false);
const viewPlanHover = ref(false)

onMounted(()=>{
})
const hideMenu= ()=>{
    mobileMenuOpen.value = false
    gsap.to('.animate-text', {
      zIndex:1000,
      opacity: 1,
      duration: 0.4,
      rotate:0,
      transformOrigin:" right",
      x:0,
      y:0,
    },
    );
    gsap.to('.animate-border', {
      width:'100px'
    },
    )

    gsap.to('.up-item', {
      opacity: 0,
      y:200,
    }
    )

}
const showMenu = ()=> {
    mobileMenuOpen.value = true

   setTimeout(()=>{
    gsap.fromTo('.innerText', {
      opacity: 1,
      x:50,
    },
    {
      opacity: 1,
      duration: 0.4,
      rotate:-90,
      x:120,
      y:-90,
      transformOrigin:" right",
    })

    gsap.fromTo('.animate-border', {
      opacity: 1,
    },
    {
      duration: 0.4,
      width:"100%"
    })

    gsap.fromTo('.up-item', {
      opacity: 0,
      y:200,
    },
    {
      opacity: 1,
      duration: 0.4,
      y:0,
    })

   },0.00001)
    gsap.fromTo('.animate-text', {
      opacity: 1,
      zIndex:0,
    },
    {
      zIndex:1000,
      opacity: 1,
      duration: 0.5,
      rotate:-90,
      transformOrigin:" right",
      x: 130,
      y:-100
    });

}

</script>
<style>
.textOut {
  color: black;
  -webkit-text-fill-color: white; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}
.fade-enter-active {
  opacity: 0;
  transition: opacity 0.4s, transform 0.4s;
}

.fade-enter-active.fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.fade-leave-active {
  opacity: 1;
  transition: opacity 0.4s, transform 0.4s;
}

.fade-leave-active.fade-leave-to {
  opacity: 0;
  transform: translateY(0);
}
.innerText {
  color: #1D7EBB;
  -webkit-text-stroke: 2px #1D7EBB;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}
</style>
