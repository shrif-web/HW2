$(function ()
  {
      $(window).on('resize', function ()
      {
          if ($(window).width() === 600)
          {
              var a = document.getElementById("top-nav");
              a.classList.toggle('active');
                
          }
      });
    });

    function toggleHamburger(x) {
        x.classList.toggle("change");
        var a = document.getElementById("main");
        a.classList.toggle("change");
      }

      function changeTheme(){
        document.getElementById('main').classList.toggle("night");
        document.getElementById('head').classList.toggle("night");
        if(document.getElementById('nightMode').checked){
            document.getElementById('webDiv').src = "multi_logo_200x200.png";
        }else{
            document.getElementById('webDiv').src = "blue.png";
        }
      }
