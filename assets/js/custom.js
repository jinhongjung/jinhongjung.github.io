/*$(document).ready(function () {
    $('.more-button').on('click', function () {
        var text = $('.more-button').text();
        if (text === "More") {
            $(this).text('Less');
        } else {
            $(this).text('More');
        }
    });
});
*/
$(document).on("click", ".more-button", function(ev){
    var text = $(this).text();
    if (text === "More") {
        $(this).text('Less');
    } else {
        $(this).text('More');
    }
});

var beforePrint = function () {
    console.log('before print');
    document.querySelectorAll('.more-button').forEach(function (e) {
        e.click();
    });
    document.querySelectorAll('.read_more').forEach(function (e) {
        $(e).hide();
    })
    document.querySelectorAll('.fas').forEach(function (e) {
        $(e).hide();
    });
    document.querySelectorAll('.fab').forEach(function (e) {
        $(e).hide();
    });
    document.querySelectorAll('.ai').forEach(function (e) {
        $(e).hide();
    });
    document.querySelectorAll('#smallscreen').forEach(function (e) {
        $(e).hide();
    });
    window.print();  
    /*
    document.querySelectorAll('.read_more').forEach(function (e) {
        $(e).show();
        console.log($(e).text());
    })
    document.querySelectorAll('.more-button').forEach(function (e) {
        e.click();
    });
    */
};


window.addEventListener('beforeprint', (event) => {
    console.log('before print');
    /*
    document.querySelectorAll('.more-button').forEach((button) => {
        button.click();
    });
    */
    /*
    document.querySelectorAll('.read_more').forEach(function (e) {
        $(e).hide();
    })
    */
});

window.addEventListener('afterprint', (event) => {
    console.log('after print');
    location.reload() 
    /*
    document.querySelectorAll('.read_more').forEach(function (e) {
        $(e).show();
        console.log($(e).text());
    })
    document.querySelectorAll('.more-button').forEach(function (e) {
        e.hide();
    });
    */
});

if (window.matchMedia) {
    const media = window.matchMedia("print");
    const myFunc = mediaQueryList => {
        if (mediaQueryList.matches) {
        }
    };
    try {
        media.addEventListener("change", myFunc);
    } catch (error) {
        try {
            media.addListener(myFunc);
        } catch (error) {
            console.debug('Error', error)
        }
    }
}


/*
if (window.matchMedia) {
  var mediaQueryList = window.matchMedia('print');
  mediaQueryList.addListener(function (mql) {
      console.log(mql)
      if (mql.matches) {
          console.log('mql matches');
          beforePrint();
      } else {
          console.log('mql did NOT match');
          afterPrint();
      }
  });
}

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
}

*/