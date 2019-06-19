            $(".thumbnails").owlCarousel({
                loop: true,
                margin: 10,
                //nav: true,
                //navText: ["Anterior","Próximo"],
                responsive: {
                    0 :{
                        items: 1
                    },
                    768 :{
                        items: 3  
                    },
                    1000 :{
                        items: 4
                    },
                },
            });
            
            $(".thumbnails .item").on("click", function(){
                
                $("video").attr({
                    "src":"mp4/"+$(this).data('video')+".mp4","poster":"img/"+$(this).data('video')+".jpg"    
                });
                
            });

            //NOTICIAS COROUSEL
            var owl = $(".thumbnails");
            owl.owlCarousel();

            $('#btn-news-prev').on("click", function(){

                owl.trigger('prev.owl.carousel');
                
            });
            
            $('#btn-news-next').on("click", function(){
               
                owl.trigger('next.owl.carousel');
                
            });
            

            //MENU
            $("#page-up").on("click", function(event){
                
                $("html,body").animate({
                    scrollTop:0
                },1000);
                
                event.preventDefault();
            });
            
            // Abrindo o MENU
            $("#btn-bars").on("click", function(){
                
                $("header").toggleClass("open-menu");
                
            });
            
            $("#menu-mobile-mask, .btn-close").on("click", function(){
                
                $("header").removeClass("open-menu");
                
            });
            
            $("#btn-search").on("click", function(){
                
                $("header").toggleClass("open-search");
                $("#input-search-mobile").focus();
                
            });

            // Fechando o MENU
            $("#btn-bars").on("click", function(){
                
                $("header").togglerClass("close-menu");
                
            });
            
            $("#menu-mobile-mask, .btn-close").on("click", function(){
                
                $("header").removeClass("close-menu");
                
            });