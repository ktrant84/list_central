$( document ).on('turbolinks:load', function() {
  $(".new-item-link").on("click",function(e){
    e.preventDefault()
    $(".new-item-form").toggle()
  });

  // $(".edit-item-link").on("click",function(e){
  //   e.preventDefault()
  //   $(".edit-item-form").show()
  // })
});
