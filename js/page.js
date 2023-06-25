
; /* Start:"a:4:{s:4:"full";s:109:"/local/templates/main/components/bitrix/news/calculators/bitrix/news.detail/.default/script.js?16790559601993";s:6:"source";s:94:"/local/templates/main/components/bitrix/news/calculators/bitrix/news.detail/.default/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
document.addEventListener('DOMContentLoaded', function() {
  let views_id = { [$('#section_id').val()] : 'Y' };
  let id = $('#section_id').val();
  let views_cache = JSON.parse(localStorage.getItem('views'));
  if(localStorage.getItem('views') != null) {
    if(id in views_cache) {

    }else{
      var views = Object.assign(views_id, JSON.parse(localStorage.getItem('views')));
      var serialObj = JSON.stringify(views);
      localStorage.setItem("views", serialObj);
      ajax(id);
    }
  }else{
    var serialObj = JSON.stringify(views_id);
    localStorage.setItem("views", serialObj);
    ajax(id);
  }

  function ajax(e) {
    BX.ajax({
      url: '/local/ajax/views.php',
      data: {id : e},
      method: 'POST',
      dataType: 'html',
      timeout: 30,
      async: true,
      processData: true,
      scriptsRunFirst: true,
      emulateOnload: true,
      start: true,
      cache: false,
      onsuccess: function(data){
        console.log(data);
      },
      onfailure: function(){

      }
    });
  }
  $('button.was-useful__button').click(function (e) {
    e.preventDefault();
    $(e.target).addClass('active');
    if($(e.target).hasClass('was-useful__button_dislike')) {
      $('.was-useful__comment.show button').click(function (k) {
        console.log($('.was-useful__comment textarea').val());
        ajax_useful(e.target);
      });
    }else{
      ajax_useful(e.target);
    }
  })
  function ajax_useful(e) {

    BX.ajax({
      url: '/local/ajax/add_form.php',
      data: {
        link : document.location.href,
        like : $(e).hasClass("was-useful__button_like"),
        text : $('.was-useful__comment textarea').val()
      },
      method: 'POST',
      dataType: 'html',
      async: true,
      processData: true,
      scriptsRunFirst: true,
      emulateOnload: true,
      start: true,
      cache: false,
      onsuccess: function(data){
        console.log(data);
      },
      onfailure: function(){

      }
    });
  }
});

/* End */
;; /* /local/templates/main/components/bitrix/news/calculators/bitrix/news.detail/.default/script.js?16790559601993*/
