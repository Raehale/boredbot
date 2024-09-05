document.getElementById('startBtn').addEventListener('click', function(){
  document.getElementById("activityName").style.background = 'transparent';
  document.getElementById("activityName").style.padding = '0';
  document.getElementById("activityName").innerHTML = `<div class="light red"></div>`

  setTimeout(() => {
    document.getElementById("activityName").innerHTML = `<div class="light yellow"></div>`
  }, "1000")

  setTimeout(() => {
    document.getElementById("activityName").innerHTML = `<div class="light green"></div>`
  }, "2000")

  setTimeout(() => {
    fetchTask()
  }, "3000");
})

function fetchTask() {
    fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById("activityName").textContent = data.activity
        document.getElementById("activityName").style.background = '#fff';
        document.getElementById("activityName").style.padding = '1rem 2rem';
    })
}
