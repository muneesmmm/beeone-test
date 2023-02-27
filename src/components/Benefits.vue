<template>
  <div class="px-6 md:px-0">
    <div class="text-center mt-12 mb-12" style="margin-top: 10rem;">
      <span class="font-bold sm:text-4xl" style="color: #032987"
        >Our Benefits</span
      >
      <p class="font-semibold text-gray-700 mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 justify-center max-w-screen-lg mx-auto" >
      <div
      v-for=" i in 6" :key="i"
        class="text-center bg-secondary md:w-[20rem]  drop-shadow-2xl my-3 py-5 w-screen  to-blue-500  mx-3 max-w-lg overflow-hidden rounded-xl text-sm leading-6 shadow-lg ring-1 ring-gray-900/5"
      >
      <div class="isolate flex justify-center ">
        <div class="absolute mt-14">
        <span class="font-bold text-white text-xl opacity-80">Lorem, ipsum</span>
      </div>
        <span class="font-bold text-white opacity-40 text-9xl">{{ i}}</span>
        
      </div>
      
      </div>
    </div>
    <hr class="mx-12 my-12  border-1 bg-gray-600  border-gray-600" >
    <div class="flex  flex-wrap md:flex-wrap space-y-10 justify-center mb-[8rem]">

      
          <div class="relative">
<div class="absolute -bottom-14 -right-14 -z-50">
            <img src="../assets/Elements/Whatweprovideelements/Rectangleabstractbackground2.png" alt="">
          </div>
      <div
          style="background-color: #1f5eff"
          class="outline relative outline-offset-2 w-full h-[20rem] inline-block align-middle outline-white drop-shadow-2xl outline-4 bg-gradient-to-b from-blue-900 to-blue-500  mx-3 max-w-md overflow-hidden rounded-3xl text-sm leading-6 shadow-lg ring-1 ring-gray-900/5"
        >

          <img
          class=" h-full object-cover w-full"
            src="../assets/Elements/Whatweprovideelements/Whatweprovideimage.png"
            alt=""
          >
        </div>

          </div>
        <div class="md:mx-12 md:px-6 w-[40rem]">
          <span class="text-4xl font-bold text-primary" >Lorem ipsum dolor sit</span>
          <p class="text-xl font-semibold py-3">Lorem ipsum dolor sit amet.</p>
          <p class=" my-5 text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, cum odit! Beatae illo porro tenetur amet itaque nihil cumque nisi assumenda reiciendis aliquam facere, molestias hic quae quisquam distinctio quidem!</p>
          <button
            type="button"
            class="outline outline-offset-2 my-5 outline-1 rounded-xl  px-6 text-sm font-semibold shadow-sm outline  outline-offset-2 outline-indigo-600"
            >Login</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
