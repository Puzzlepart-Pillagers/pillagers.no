async function submitForm(event) {
  var formEmailValue = event.target.elements.emailValue.value;
  var formDisplayNameValue = event.target.elements.userNameValue.value;

  bodyString = JSON.stringify({ email: formEmailValue, displayname: formDisplayNameValue })
  
  console.log("asdasd" + bodyString);

  await fetch(`https://prod-86.westeurope.logic.azure.com:443/workflows/1e05bc32554344fc9c4a184579c0ce79/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=FFgFQoXn4DErW0bBk7l_nsUcROCK61mDehEuEwN_vyU`, {
    method: "POST",
    body: bodyString,
  }).then(d => d.text().then(f => f))

  console.log(bodyString);
  
  alert("Mail value: " + formEmailValue + "DisplayName value: " + formDisplayNameValue);
};


$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
  var $this = $(this),
      label = $this.prev('label');

	  if (e.type === 'keyup') {
			if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
    	if( $this.val() === '' ) {
    		label.removeClass('active highlight'); 
			} else {
		    label.removeClass('highlight');   
			}   
    } else if (e.type === 'focus') {
      
      if( $this.val() === '' ) {
    		label.removeClass('highlight'); 
			} 
      else if( $this.val() !== '' ) {
		    label.addClass('highlight');
			}
    }

});

$('.tab a').on('click', function (e) {
  
  e.preventDefault();
  
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  
  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();
  
  $(target).fadeIn(600);
  
});