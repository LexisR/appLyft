$(document).ready(function(){
  // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
  $('select').material_select();
  Materialize.updateTextFields();
  $('#btn-3').addClass('disabled');
  $('#btn-3-1');

  $( "#icon_telephone" ).change(function(event) {
    var val = event.target.value;
    if (!val || val === '') {
      $('#btn-3').addClass('disabled');
    } else {
      $('#btn-3').removeClass('disabled');
    }
  });

  $('#btn-3').on('click', function(){
    if ($('#btn-3').hasClass('disabled')) return;
    function code() {
      var code = "";
      var str = "123456789";
      for (var i = 0; i < 3; i++) {
        code += str.charAt(Math.floor(Math.random() * str.length));
      }
      return code;
    }
    
    alert(code());;
  });

  $('#btn-3-1').on('click', function(){
    if ($('#btn-3-1').hasClass('disabled')) return;
    function code() {
      var code = "";
      var str = "123456789";
      for (var i = 0; i < 3; i++) {
        code += str.charAt(Math.floor(Math.random() * str.length));
      }
      return code;
    }
    alert(code());;
  });
}); 


