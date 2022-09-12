<template>
    <div class="custom-cursor">
        <div id="cursor_ring" class="custom-cursor_element -ring"></div>
        <div id="cursor_ball" class="custom-cursor_element -ball"></div>
    </div>
</template>

<script>
    import gsap from "gsap";

    export default {
        props: {
            hoverClass: {
                type: String,
                default: 'cursor-hover'
            }
        },
      mounted () {
        const cursorRing = document.getElementById('cursor_ring'),
              cursorBall = document.getElementById('cursor_ball'),
              links = document.getElementsByTagName("a"),
              withClassHover = document.getElementsByClassName(this.hoverClass),
              withHover = [...links, ...withClassHover];
  
          console.log(withClassHover)
          console.log(withHover)

        // Event Listeners
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mousedown", onMouseHover);
        document.addEventListener("mouseup", onMouseHoverOut);
        document.addEventListener("mouseenter", () => {
          cursorRing.style.opacity = 1;
          cursorBall.style.opacity = 1;
        });
        document.addEventListener("mouseleave", () => {
          cursorRing.style.opacity = 0;
          cursorBall.style.opacity = 0;
        });
        for (const element of withHover) {
          element.addEventListener("mouseover", onMouseHover);
          element.addEventListener("mouseout", onMouseHoverOut);
        }

  
        // Event Handlers
        function onMouseMove(e) {
          cursorBall.style.opacity = 1;
          gsap.to(cursorRing, 0.4, {
            x: e.clientX - 18,
            y: e.clientY - 18
          });
          gsap.to(cursorBall, 0.1, {
            x: e.clientX - 4,
            y: e.clientY - 4
          });
        }
        function onMouseHover(e) {
          if(e.target.classList.contains('swiper-pagination-bullet')){
            gsap.to(cursorRing, 0, {
              opacity: 0
            })
          } else {
            gsap.to(cursorRing, 0.3, {
              scale: 1.5
            });
          }
        }
        function onMouseHoverOut(e) {
          if(e.target.classList.contains('swiper-pagination-bullet')){
            gsap.to(cursorRing, 0, {
              opacity: 1
            });
        
          } else {
            gsap.to(cursorRing, 0.3, {
              scale: 1
            });
          }
        }
      }
    };
  </script>
  
  <style lang="scss">
    /* @media screen and (min-width:1100px) { */
      * {
        cursor: none !important;
      }
  
      .custom-cursor_element {
        position: fixed;
        top: 0;
        left: 0;
        /* mix-blend-mode: difference; */
        z-index: 99999;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.5s ease;

        &.-ring{
          content: "";
          width: 35px;
          height: 35px;
          border: 2px solid $text-color;
          border-radius: 50%;
          z-index: 50;
        }

        &.-ball{
          content: "";
          width: 6px;
          height: 6px;
          background: $text-color;
          border-radius: 50%;
          z-index: 50;
        }
      }
    /* } */
  </style>