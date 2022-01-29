$(document).ready(function () {
    $(".card .card-body").removeClass("active").slideUp()

 //styles...
  $(".accordian").css({ width: "80%" });
  $(".card-header").css({ backgroundColor: "#4287f5", color: "white",padding:"2px","border-radius":"5px"});
  $(".card").css({ "margin-top": "5%", "margin-left": "15%" });
  $('h3').css({"margin-left":"20px" })
  $('p').css({"fontSize":"22px",padding:"3px","margin-left":"10px"})
  $('.card:nth-child(even) p').css({'color':'#7b1991'})
  $('.card:nth-child(odd) p').css({'color':'#911941'})

 //functions
 $(".card-header").click(function(){
  
    
    $(".card .card-body").slideUp()
     if($(this).next(".card-body").hasClass("active")){
         $(this).next('.card-body').removeClass('active').slideUp()
     }
     else{
         $('.card .card-body').removeClass('active').slideUp()
         $(this).next('.card-body').addClass('active').slideDown()
     }
 })

  //end of document ready
});
