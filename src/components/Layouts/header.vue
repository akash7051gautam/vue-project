<template>
    <div>
        <!-- Navbar goes here -->
		<nav class="bg-white shadow-lg">
			<div class="max-w-6xl mx-auto px-4">
				<div class="flex justify-between">
					<div class="flex space-x-7">
						<div>
							<!-- Website Logo -->
							<a href="#" class="flex items-center py-4 px-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                  </svg>
								<!-- <img src="../../assets/logo.png" alt="Logo" class="h-8 w-8 mr-2"> -->
								<span class="font-semibold text-gray-500 text-lg text-pink-500 mx-2">House Gallery</span>
							</a>
						</div>
						<!-- Primary Navbar items -->
						<div class="hidden md:flex items-center space-x-1">
							<a href="" class="py-4 px-2 text-pink-500 border-b-4 border-pink-500 font-semibold ">Home</a>
							<!-- <a href="" class="py-4 px-2 text-gray-500 font-semibold hover:text-pink-500 transition duration-300">Services</a>
							<a href="" class="py-4 px-2 text-gray-500 font-semibold hover:text-pink-500 transition duration-300">About</a>
							<a href="" class="py-4 px-2 text-gray-500 font-semibold hover:text-pink-500 transition duration-300">Contact Us</a> -->
						</div>
					</div>
					<!-- Secondary Navbar items -->
					<div class="hidden md:flex items-center space-x-3 ">
						<!-- <a href="" class="py-2 px-2 font-medium text-gray-500 rounded hover:bg-pink-500 hover:text-white transition duration-300">Log In</a>
						<a href="" class="py-2 px-2 font-medium text-white bg-pink-500 rounded hover:bg-pink-400 transition duration-300">Sign Up</a> -->
						<!-- <a href="http://" target="_blank" rel="noopener noreferrer" class="">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 relative text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
							  </svg>
							  <span class="absolute top-0 right-16 text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 uppercase mt-1">1</span>
						</a> -->
					</div>
					<!-- Mobile menu button -->
					<div class="md:hidden flex items-center">
						<button class="outline-none mobile-menu-button">
						<svg class=" w-6 h-6 text-gray-500 hover:text-pink-500 "
							x-show="!showMenu"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
					</div>
				</div>
			</div>
			<!-- mobile menu -->
			<div class="hidden mobile-menu">
				<ul class="">
					<li class="active"><a href="index.html" class="block text-sm px-2 py-4 text-white bg-pink-500 font-semibold">Home</a></li>
					<!-- <li><a href="#services" class="block text-sm px-2 py-4 hover:bg-pink-500 transition duration-300">Services</a></li>
					<li><a href="#about" class="block text-sm px-2 py-4 hover:bg-pink-500 transition duration-300">About</a></li>
					<li><a href="#contact" class="block text-sm px-2 py-4 hover:bg-pink-500 transition duration-300">Contact Us</a></li> -->
				</ul>
			</div>
		</nav>
    </div>
</template>

<script>
    export default{
        
    }
</script>