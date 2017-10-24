// File uploader
var $drop = $("#file-upload-area");
$drop.on('drag dragstart dragend dragover dragenter dragleave drop', function(e) {
    e.preventDefault();
    e.stopPropagation();
})
.on('dragover dragenter', function() {
    $drop.addClass('is-dragover');
})
.on('dragleave dragend drop', function() {
    $drop.removeClass('is-dragover');
})
.on('drop', function(e) {
    $("#fileToUpload").prop('files', e.originalEvent.dataTransfer.files);
});
  
$("#file-btn").on("click", function(e){
    e.preventDefault();
    $("#fileToUpload").trigger("click");
});
  
$("#fileToUpload").change(function(){
    if( $(this).get(0).files.length != 0 ){
      $(this).addClass("show");
    }
    else{
      $(this).removeClass("show");
      $("#file-btn").show();
    }
});
  
  

// Upload file
$("#uplaod-btn").on("click", function(e){
    e.preventDefault();
    $("#upload-output").html(" ");
    var file_vid = true;
    // file upload validation
    if($("#fileToUpload").val() == ""){
      file_vid = false;
      
      $("#upload-output").append("<p>Please upload photo.</p>");
    }
    else{
      var ext = $('#fileToUpload').val().split('.').pop().toLowerCase();
      var file = $("#fileToUpload")[0].files[0];
      var fileSize = file.size/1024/1024;
  
      if($.inArray(ext, ['gif','png','jpg','jpeg']) == -1) {
        file_vid = false;
        $("#upload-output").append("<p>Please upload gif, png, jpg , jpeg file.</p>");
      }
      
      if(fileSize > 2){
        file_vid = false;
        $("#upload-output").append("<p>Photo should be less than 2MB.</p>");
        $('#fileToUpload').val('');
      }
    }
  
    if(file_vid){
      var formFile = new FormData();
      var file = $("#fileToUpload")[0].files[0];
      $(".box__input").hide();
      $("#progress-wrp").show();
      formFile.append('upload-photo', file, file.name);
      var file_url = document.location.origin+"/slanding/ajax-file-upload.php";
      $.ajax({
        type:"POST",
        url: file_url,
        data: formFile,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        xhr: function(){
          //upload Progress
          var xhr = $.ajaxSettings.xhr();
          if (xhr.upload) {
              xhr.upload.addEventListener('progress', function(event) {
                  var percent = 0;
                  var position = event.loaded || event.position;
                  var total = event.total;
                  if (event.lengthComputable) {
                      percent = Math.ceil(position / total * 100);
                  }
                  //update progressbar
                  $("#progress-wrp .progress-bar").css("width", + percent +"%");
                  $("#progress-wrp .status").text(percent +"%");
              }, true);
          }
          return xhr;
        },
        mimeType:"multipart/form-data"
      }).done(function(res){
        console.log(res);
        $("#uploaded-file-name").val(res);
        $('#fileToUpload').val('');
      });
    }
});