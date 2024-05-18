// let settings = 
//     {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 4,
//         slidesToScroll: 1,
//       };


      let settings = {

          
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 0,
        //   autoplay: true,
        //   speed: 5000,
        //   autoplaySpeed: 5000,
        //   cssEase: "easeOutElastic",
        //   pauseOnHover: true,
          responsive: [
      {
          breakpoint: 1000,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
        
            }
        },
        {
            breakpoint: 720,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                
            }
        },
        {
            breakpoint: 495,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
}
export {
    settings
}




// Documentacion
// https://react-slick.neostack.com/