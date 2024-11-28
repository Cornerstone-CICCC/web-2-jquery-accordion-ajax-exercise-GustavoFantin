$(function() {
  // we get the question
  $(' .accordion > .accordion-header').on('click', function() {
    // here we target the p element and see if we have oppen one
    $('.accordion-content').not($(this).next()).slideUp()
    // here we open the p element
    if(($(this).next()).is(':hidden') == true){
      $(this).next().slideDown()
      // here we close it 
    } else {
      $(this).next().slideUp()
    }
  })

  //exercise 2
  $(".todos").children('button').click(function(){
    $.ajax({
      url: 'https://dummyjson.com/todos',
      type: 'GET',
      success: function(response) {
        const todoList = response.todos
        todoList.forEach(todo => {
          console.log(todo)
          $('.todos').find('ul').append(`
            <li>${todo.todo}</li>
            `)
        })
      }
    })
  });
})


