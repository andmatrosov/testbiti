// let main = document.querySelector('body'),
//     body = main.querySelector('.slide__body'),
//     video = main.querySelectorAll('.slide__video')
//  		videoList = main.querySelectorAll('.slide__video'),
//     load = true;
// 
// 
// let visible = (bool) => {
//   body.querySelector('.slide__logo').style.opacity = bool ? 1 : 0 
//   body.querySelector('.slide__text').style.opacity = bool ? 1 : 0 
//   body.querySelectorAll('.slide__a').forEach(i => i.style.opacity = bool ? 1 : 0 )
//   body.querySelector('.slide__active').style.opacity = bool ? 1 : 0 
// }
// 
// let view = num => {
// 	videoList.forEach((i, index) => index == num ? i.style.display = "block" :  i.style.display = "none")
// }
// 
// let mob = () => {
//   if (load){
//     view(2)
//     video[2].addEventListener('ended', () =>  {
//       view(3)
//       visible(true)
//       window.addEventListener('resize', () =>  {
//         main.offsetWidth > 960 ? desc() : mob()
//       })
//     })
//     load = !load
//     return
//   }
//   view(3)
// }
// 
// let desc = () => {
//   if (load){
//     view(0)
//     video[0].addEventListener('ended', () =>  {
//       view(1)
//       visible(true)
//       window.addEventListener('resize', () =>  {
//         main.offsetWidth > 960 ? desc() : mob()
//       })
//     })
//     load = !load
//     return
//   }
//   view(1)
// }
// 
// // main.offsetWidth > 960 ? desc() : mob()
// 
// 
// 
// let btn = body.querySelector('.slide__active'),
//     form = body.querySelector('.slide__form'),
//     btn2 = body.querySelector('.slide__btn'),
//     text = body.querySelector('.slide__text');
// 
// let visibleElem = (elem, elem2) => {
//   elem.style.display = 'none';
//   elem2.style.display = 'flex';
//   if (elem2 == form) {
//     elem2.style.opacity = 1
//   }
// }
// 
// btn.addEventListener('click', () => {
//   visibleElem(text,form)
// })
// btn2.addEventListener('click', () => {
//   visibleElem(text,form)
// })

let   placeholder = document.querySelector('.place'),
      place = placeholder.querySelector('.place__progress');
let main = document.querySelectorAll('.slide__video');

let step = 0,
    ready = 0;


let go = () => {
  place.style.width = "100%"
  setTimeout( () => {
    if (ready != 2) {
      place.style.width = "0"
      go()
      return
    }
    placeholder.style.display = 'none';
    step++
    videoGo()
  }, 2000)
}
go()




let videoGo = () => {
  if (ready == 2) {
    switch (step) {
      case 1: 
        main[0].style.opacity = 1
        main[0].play()
        main[0].addEventListener('ended', () => {
          main[0].style.opacity = 0;
          step++
          videoGo()
        })
        return
      case 2: 
        main[1].style.opacity = 1
        main[1].play()
        return
    }
  }
}


let videosCobtol = () => {
  main[0].addEventListener('canplaythrough', () => {
    console.log('Готово 1 видео')
    ready++
  })
   main[0].addEventListener('canplaythrough', () => {
    console.log('Готово 2 видео')
    ready++
  })
}
// // main.offsetWidth > 960 ? desc() : mob()
videosCobtol()