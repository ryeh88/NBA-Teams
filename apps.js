$( function () {
 
  $('form').submit( function (e){
    e.preventDefault();
    
    var programType = $('.programType').val();
    var educationLevel = $('.educationLevel').val();
    
    if (programType === null && educationLevel === null) {
      console.log('all logos light up');
      $('.logoWrapper').html("");
      $('.logoWrapper').html("<table class=logosTable><tr><td><img src='images/aci - color.png'><td><img src='images/acm - color.png'><td><img src='images/AFE color.png'><td><img src='images/aci - color.png'><tr><td><img src='images/acm - color.png'><td><img src='images/aci - color.png'><td><img src='images/acm - color.png'><td><img src='images/AFE color.png'></table>")
    
    } else if (programType === 'scholarship' && educationLevel === null) {
      $('.logoWrapper').html("");
    } else if (programType === null && educationLevel === 'kindergarten') {
      $('.logoWrapper').html("");
    } else if (programType === 'scholarship' && educationLevel === 'kindergarten') {
      $('.logoWrapper').html("");
    } else if (programType === 'scholarship' && educationLevel === 'highSchool') {
      $('.logoWrapper').html("");
    } else if (programType === 'loan' && educationLevel === null) {
      $('.logoWrapper').html("");
    } else if (programType === 'scholarship' && educationLevel === null) {
      $('.logoWrapper').html("");
    }
    
  });
});