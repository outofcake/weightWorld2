// window.onload=function(){
//   var workout = document.getElementById('workoutSubmit');
//   document.getElementById('mainForm').style.display ="none";
//   var workoutAdd = document.getElementById('workoutAdd');
//   var workoutForm = document.getElementById('workoutForm');
//
//
//
//   workout.addEventListener('click',function(){
//       document.getElementById('mainForm').style.display ="inherit";
//       console.log('button has been clicked');
//
//       // var cln = workoutForm.cloneNode(true);
//       // document.getElementById('mainForm').appendChild(cln);
//       // console.log('button has been clicked');
//
//     });
//   workoutAdd.addEventListener('click', function() {
//     var cln = workoutForm.cloneNode(true);
//     document.getElementById('mainForm').appendChild(cln);
//     console.log('button has been clicked');
//   });
//   const dbSubmitbtn = document.getElementById('dbSubmit');
//   const exercise = document.getElementById('workoutList');
//   const set = document.getElementById('sets');
//   const rep = document.getElementById('reps');
//   const weight = document.getElementById('weights');
//
//   var exerciseValue = exercise.value;
//   var setValue = set.value;
//   var repValue = rep.value;
//   var weightValue = weight.value;
//
//   var workoutRef = firebase.database().ref('members');
//   dbSubmitbtn.addEventListener('click', function() {
//     var newWorkoutPush = workoutRef.push();
//     newWorkoutPush.set({
//       exerciseName: exerciseValue,
//       numberSets: setValue,
//       numberValue: repValue,
//       numberWeight: weightValue
//     })
//     console.log('button has been clicked');
//   });
// }
