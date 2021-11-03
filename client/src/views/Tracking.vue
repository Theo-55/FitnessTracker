<template>
    <div class="container">
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
              <a class="navbar-item" >
                <img src="barbell.jpg" width="112" height="28">
              </a>
          
              <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
          
            <div id="navbarBasicExample" class="navbar-menu">
              <div class="navbar-start">
                <a class="navbar-item" id="create" onclick="testFunction()">
                  Create
                </a>
          
                <a class="navbar-item">
                  Read
                </a>

                <a class="navbar-item">
                    Update
                </a>
                
                <a class="navbar-item">
                    Delete
                </a>

                <a class="navbar-item" href="App.vue">
                  Home
              </a>
                </div>
              </div>
          </nav>

          <!-- <div class="tracking data">
            <h1>Active Tracking</h1>
              <table alt = "active tracking to input new Excercises" id="tracking">
                  <tr>
                    <th id="Excercises">Excecise</th>
                    <th id="Reps">Reps</th>
                    <th id="Time Ellapsed">Time Ellapsed</th>
                    <th id="Date">Date</th>
                  </tr>
              </table>
          </div> -->

          <div class="History">
            <h1>History</h1>
              <table id="trackingHistory">
                  <tr>
                    <th id="Past Excercise">Excecise</th>
                    <th id="Past Reps">Reps</th>
                    <th id="Past Times">Time</th>
                    <th id="Past Dates">Date</th>
                  </tr>
              </table>
          </div>

          <div class="createForm">
              <form id="createData">
                  <input type="text" name="Excercise" placeholder="Excercise"  id="pastExcercise" required >
                  <input type="text" name="Reps" placeholder="Reps" id="pastReps" required >
                  <input type="text" name="Time" placeholder="Time" id="pastTimes" required >
                  <input type="text" name="date" placeholder="date" id="pastDate" required >
              </form>
              <button type="button" id="update">Update</button>
          </div>
        
    </div>


</template>

<style src="../css/tracking.css">

</style>

<script>

const create = document.getElementById('update');

create.onclick = function (){
   const table = document.getElementById('trackingHistory');
    const Excercise = document.getElementById('pastExcercise');
    const Reps = document.getElementById('pastReps');
    const Time = document.getElementById('pastTimes');
    const Date = document.getElementById('pastDates');

      if ((table.tbody).length == 0) {
            table.append("<tbody></tbody>");
        }
        
        table.tbody.append("<tr>" +
            "<td>" + Excercise.val() + "</td>"+
            "<td>" + Reps.val() + "</td>" +
            "<td>" + Time.val() + "</td>" +
            "<td>" + Date.val() + "</td>" +
            "</tr>");
}
  
</script>

