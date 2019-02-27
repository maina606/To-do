//business logic
function Tasks(name, details, time) {
  this.name = name;
  this.details = details;
  this.time = time;
}


// 
// Tasks.prototype.result = function(){
//
// var answers = [this.task1, this.task2, this.task3];
// answers.forEach(function(answer){
//   return answer;
// });
//
// }






//user logic

$(document).ready(function() {
  $("button#submit").click(function() {
    var inputTask1 = $("input#task1").val();
    var inputTask2 = $("input#task2").val();
    var inputTask3 = $("input#task3").val();
    var newTask = new Tasks(inputTask1, inputTask2, inputTask3);

    $("ul#contacts").append(`
      <li>
        <span class='contact'> ${newTask.name} </span>
        <ul>
          <li>${newTask.details}</li>
          <li>${newTask.time}</li>
        </ul>
      </li>
      `);



  });
});
