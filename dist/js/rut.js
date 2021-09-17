$("#rut")
  .rut({formatOn: 'keyup', validateOn: 'keyup'})
  .on('rutInvalido', function(){ 
    $(this).parents(".control-group").addClass("error")
  })
  .on('rutValido', function(){ 
    $(this).parents(".control-group").removeClass("error")
  });