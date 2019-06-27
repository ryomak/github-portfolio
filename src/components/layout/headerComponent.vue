<template>
<header>
    <div 
      class="overlay-navigation" 
      :class="[toggleOverlay?'overlay-active':'',overlayNavToggleClass]"
    >
        <transition
          v-on:enter="enterMenu"
          v-on:leave="leaveMenu"
          v-on:css="false"
        >
        <nav role="navigation" v-show="toggleOverlay">
            <ul>
              <li v-for="(menu,i) in menuData.list" 
                  :key="i"
                  :style="{'background-color':menu.color}"
              >
                  <a  :href="menu.href" :data-content="menu.dataContent">
                    {{menu.text}}
                  </a>
              </li>
            </ul>
        </nav>
      </transition>
    </div>
    <div 
        class="open-overlay" 
        @click="menuClick" 
        :style="pointerEvents"
    >
    <span class="bar-top" :class="topBarToggleClass"></span>
    <span class="bar-middle" :class="middleBarToggleClass"></span>
    <span class="bar-bottom" :class="bottomBarToggleClass"></span>
  </div>
</header>
</template>
<script lang="ts">
import Vue from 'vue';
import velocity from 'velocity-animate'; 
export default Vue.extend({
    name: 'headerComponent',
    data() {
        return{
            toggleOverlay: false,
            clicking: false,
        };
    },
    computed: {
        pointerEvents(): any {
            return this.clicking ? '{pointer-events:none;}' : '{pointer-events:auto;}';
        },
        showMenu(): any {
            console.log(this.clicking)
        },
        topBarToggleClass(): any {
            return !this.toggleOverlay ?
            'animate-top-bar' :
            'animate-out-top-bar';
        },
        middleBarToggleClass(): any {
            return !this.toggleOverlay ?
            'animate-middle-bar' :
            'animate-out-middle-bar';
        },
        bottomBarToggleClass(): any {
            return !this.toggleOverlay ?
            'animate-bottom-bar' :
            'animate-out-bottom-bar';
        },
        overlayNavToggleClass(): any {
            return !this.toggleOverlay ?
            'overlay-slide-down' :
            'overlay-slide-up';
        },
        // todo height weightもやる
        menuData(): any {
          const data = {
            list: [
              {dataContent: 'The beginning', text: 'Home', href: '#', color: '#3A5A69'},
              {dataContent: 'The beginning', text: 'Home', href: '#', color: '#514644'},
              {dataContent: 'The beginning', text: 'Home', href: '#', color: '#535D55'},
              {dataContent: 'The beginning', text: 'Home', href: '#', color: '#A5B7C1'},
              {dataContent: 'The beginning', text: 'Home', href: '#', color: '#DBDBE5'},
            ],
          };
          return data;
        },
    },
    methods: {
        menuClick() {
            this.clicking = true;
            this.toggleOverlay = !this.toggleOverlay;
        },
        enterMenu(el: any, done: any) {
            const liCom = el.children[0].children;
            if (this.toggleOverlay) {
                for (let i = 0; i < liCom.length; i++) {
                  velocity.animate(liCom[i], {opacity: 1}, {duration: 150, delay: i * 100});
                }
            }
        },
        leaveMenu(el: any, done: any) {
          const liCom = el.children[0].children;
          if (!this.toggleOverlay) {
           for (let i = 0; i < liCom.length; i++) {
                velocity.animate(liCom[i], {opacity: 0}, {duration: 200 , delay: (liCom.length - i) * 100});
            }
          }
        },
    },
});
</script>
<style lang="scss" scoped>

/* ====================================
Navigation 
==================================== */

.overlay-navigation {
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;  
}

nav,
nav ul {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

nav ul {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  list-style: none;
}

nav ul li {
  -webkit-flex-basis: 20%;
  -ms-flex-preferred-size: 20%;
  flex-basis: 20%;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  height: 100%;
  overflow: hidden;
  opacity: 0;
}

nav li a {
  position: relative;
  top: 46%;
  color: #fff;
  text-transform: uppercase;
  font-family: 'Work sans', sans-serif;
  font-weight: 300;
  letter-spacing: 4px;
  text-decoration: none;
  display: block;
  text-align: center;
  font-size: 0.9rem;
}

nav li a:before {
  content: '';
  width: 70px;
  height: 2px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 0;
  z-index: 100;
  -webkit-transform: translateX(-100%);
  -ms-transform: translateX(-100%);
  transform: translateX(-100%);
  opacity: 0;
  -webkit-transition: all .2s linear;
  transition: all .2s linear;
}

nav li a:after {
  content: attr(data-content);
  font-size: 0.7rem;
  -webkit-transition: all .2s linear;
  transition: all .2s linear;
  opacity: 0;
  position: absolute;
  z-index: 100;
  color: #fff;
  display: block;
  margin-right: auto;
  margin-left: auto;
  left: 0;
  right: 0;
  bottom: -50px;
  text-transform: none;
  font-family: 'Open sans', sans-serif;
  font-weight: 300;
  font-style: italic;
  letter-spacing: 0;
}

nav li a:hover:before {
  -webkit-transform: translateX(0);
  -ms-transform: translateX(0);
  transform: translateX(0);
  opacity: 1;
}

nav li a:hover:after {
  -webkit-transform: translateY(15px);
  -ms-transform: translateY(15px);
  transform: translateY(15px);
  opacity: 1;
}

/* ====================================
Burger 
==================================== */

.open-overlay {
  position: absolute;
  right: 5rem;
  top: 3.2rem;
  z-index: 100;
  width: 34px;
  display: block;
  cursor: pointer;
}

.open-overlay span {
  display: block;
  height: 1px;
  background-color: #000;
  cursor: pointer;
  margin-top: 8px;
}

.animate-top-bar {
  -webkit-animation: animate-top-bar .6s linear 1 both;
  animation: animate-top-bar .6s linear 1 both
}

.animate-bottom-bar {
  -webkit-animation: animate-bottom-bar .6s linear 1 both;
  animation: animate-bottom-bar .6s linear 1 both
}

.animate-middle-bar {
  -webkit-animation: animate-middle-bar .6s linear 1 both;
  animation: animate-middle-bar .6s linear 1 both
}

.animate-out-top-bar {
  -webkit-animation: animate-out-top-bar .6s linear 1 both;
  animation: animate-out-top-bar .6s linear 1 both
}

.animate-out-bottom-bar {
  -webkit-animation: animate-out-bottom-bar .6s linear 1 both;
  animation: animate-out-bottom-bar .6s linear 1 both
}

.animate-out-middle-bar {
  -webkit-animation: animate-out-middle-bar .6s linear 1 both;
  animation: animate-out-middle-bar .6s linear 1 both
}


/* ====================================
Animation keyframes
==================================== */

@keyframes animate-top-bar {
  0% {
    background-color: #fff;
  }
  50% {
    -webkit-transform: translateY(9px);
    transform: translateY(9px)
  }
  80% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    background-color: #fff
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    background-color: #29363B;
  }
}

@keyframes animate-bottom-bar {
  0% {
    background-color: #fff;
  }
  50% {
    -webkit-transform: translateY(-9px);
    transform: translateY(-9px)
  }
  80% {
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
    background-color: #fff;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    background-color: #29363B;
  }
}

@keyframes animate-middle-bar {
  0% {
    background-color: #fff;
  }
  80% {
    background-color: #fff;
  }
  100% {
    background-color: #29363B;
  }
}

@keyframes animate-out-top-bar {
  0% {
    background-color: #29363B
  }
  50% {
    -webkit-transform: translateY(9px);
    transform: translateY(9px)
  }
  80% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    background-color: #29363B
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    background-color: #FFF;
  }
}

@keyframes animate-out-bottom-bar {
  0% {
    background-color: #29363B
  }
  50% {
    -webkit-transform: translateY(-9px);
    transform: translateY(-9px)
  }
  80% {
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
    background-color: #29363B;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    background-color: #FFF;
  }
}

@keyframes animate-out-middle-bar {
  0% {
    background-color: #29363B
  }
  80% {
    background-color: #29363B;
  }
  100% {
    background-color: #fff;
  }
}

.home a {
  font-family: "Work Sans", sans-serif;
  color: #222;
  font-weight: 300;
  font-size: 12px;
  text-transform: uppercase;
  text-decoration: none;
  position: absolute;
  z-index: 10;
  top: 50px;
  left: 50px;
  padding-bottom: 3px;
  border-bottom: 1px solid #222;
}

@media (max-width: 640px) {
  nav ul {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  nav ul li {
    height: 20%;
  }
  nav ul li a {
    font-size: 11px;
  }
  nav li a:after {
    font-size: 0.6rem;
    bottom: -25px;
  }
  nav li a:hover:after {
    transform: translateY(0);
  }
  .open-overlay {
    right: 1rem;
  }
  nav li a:before {
    width: 25px;
  }
}
</style>