var granimInstance = new Granim({
    element: '#canvas-image-blending',
    direction: 'top-bottom',
    isPausedWhenNotInView: true,
    image : {
        source: '',
        blendingMode: 'soft-light',
    },
    states : {
        "default-state": {
            gradients: [
                [ 'rgba(6, 17, 3, 1)', 'rgba(168, 224, 211, 1)'],                 ['rgba(67, 207, 35, 1)', 'rgba(124, 173, 116, 36)'],            [ 'rgba(124, 173, 116, 1)', 'rgba(67, 207, 35, 1)'],                ['rgba(38, 155, 128, 1)', 'rgba(6, 17, 3, 1)']
            ],
            transitionSpeed: 7000
        }
    }
});

//var granimInstance = new Granim({
   // element: '#canvas-image-blending',
    //direction: 'top-bottom',
   // isPausedWhenNotInView: true,
  //  image : {
    //    source: 'https://i.ibb.co/PmFhy52/matri.jpg',
    //    blendingMode: 'normal',
   // },
   // states : {
    //    "default-state": {
     //       gradients: [
           //     [ 'rgba(6, 17, 3, 1)', 'rgba(168, 224, 211, 1)'],                 ['rgba(67, 207, 35, 1)', 'rgba(124, 173, 116, 36)'],            [ 'rgba(124, 173, 116, 1)', 'rgba(67, 207, 35, 1)'],                ['rgba(38, 155, 128, 1)', 'rgba(6, 17, 3, 1)']
   //         ],
         //   transitionSpeed: 7000
 //       }
 //   }
//});





