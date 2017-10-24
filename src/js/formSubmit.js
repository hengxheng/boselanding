  // Form submit 
$("#submit-form").submit(function(e){
    e.preventDefault();
  
    // Do not submit file
    $('#fileToUpload').val('');
  
    var vid = true;
    $(".msg").html(" ");
  
    if($("#fullname").val() == ""){
      vid = false;
      $(".msg").append("<p>Please fill in your name.</p>");
    }
  
    if($("#email").val() == ""){
      vid = false;
      $(".msg").append("<p>Please fill in your email.</p>");
    }
  
    if($("#c-email").val() != $("#email").val() || $("#c-email").val() == ""){
      vid = false;
      $(".msg").append("<p>Email does not match.</p>");
    }
  
    var phone = $("#phone").val();
    if(!(/^\d+$/.test(phone))){
      vid = false;
      $(".msg").append("<p>Please fill in your phone number.</p>");
    }
  
    if($("#state").val() == ""){
      vid = false;
      $(".msg").append("<p>Please fill in your state.</p>");
    }
  
    if($("#uploaded-file-name").val() == ""){
      vid = false;
      $(".msg").append("<p>Please upload photo before submitting.</p>");
    }
    var url_pattern = /^(http[s]?:\/\/)(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
    var photo_link = $("#link").val();
    if(!url_pattern.test(photo_link)){
      vid = false;
      $(".msg").append("<p>Please enter a valid hi-resolution photograph URL.</p>");
    }
  
    if(!$("#check-1").is(":checked")){
        vid = false;
        $(".msg").append("<p>Please have a hi-resolution copy of the image I am submitting.</p>");
    }
  
    if(!$("#check-2").is(":checked")){
      vid = false;
      $(".msg").append("<p>Please agree if I am a finalist I agree to have the image submitted exhibited at an exclusive event in Sydney and printed in a limited-edition photobook to be distributed Western Digital’s discretion.</p>");
    }
    if(!$("#check-3").is(":checked")){
      vid = false;
      $(".msg").append("<p>Please agree if I am a finalist I agree to have my image shared on Western Digital social media accounts worldwide, including that of WD and SanDisk.</p>");
    }
  
    if(!$("#check-4").is(":checked")){
      vid = false;
      $(".msg").append("<p>Please read and agree to the terms and conditions and privacy policy.</p>");
    }
  
    if(vid){
      ga('send', 'event', 'Button', 'Click', 'Entry submit');
      fbq('track', 'Lead');
      
      var url = document.location.origin+"/slanding/form.php";
  
      $("#submit-btn").prop("disabled", true);    
      var formData = $("#submit-form").serialize();
  
      $.ajax({
        type:"POST",
        url: url,
        data: formData,
        success: function(response){
          $("#thankyou-box").addClass("show");
        }
      });
    }
});
  
$(".s-link").on("click", function(e){
    e.preventDefault();
    var full_url = this.href;
    var parts = full_url.split("#");
    var trgt = parts[1];
  
    var target_offset = $("#"+trgt).offset();
    var target_top = target_offset.top;
    $('html, body').animate({scrollTop:target_top}, 1000);
});
  
    
  