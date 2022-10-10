$(document).ready(function () {
    $('#more-button').on('click', function () {
        var text = $('#more-button').text();
        if (text === "Read more") {
            $(this).text('Read less');
        } else {
            $(this).text('Read more');
        }
    });
});

var beforePrint = function () {
    console.log('before print');
    document.querySelectorAll('#more-button').forEach(function (e) {
        e.click();
    });
    document.querySelectorAll('.read_more').forEach(function (e) {
        $(e).hide();
    })
    window.print();  
    document.querySelectorAll('.read_more').forEach(function (e) {
        $(e).show();
        console.log($(e).text());
    })
    document.querySelectorAll('#more-button').forEach(function (e) {
        e.click();
    });
};
var afterPrint = function () {
    console.log('after print');
    /*document.querySelectorAll('.read_more').forEach(function(e) {
        $(e).show();
    })
    document.querySelectorAll('#more-button').forEach(function (e) {
        e.click();
    });
    */
};

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