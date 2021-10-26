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
                <a class="navbar-item">
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

          <div class="tracking data">
            <h1>Active Tracking</h1>
              <table alt = "active tracking to input new Excercises">
                  <tr>
                    <th id="Excercises">Excecise</th>
                    <th id="Reps">Reps</th>
                    <th id="Time Ellapsed">Time Ellapsed</th>
                    <th id="Date">Date</th>
                  </tr>
                  <tr>
                      <td>Example</td>
                      <td>Example</td>
                      <td>Example</td>
                      <td>Example</td>
                  </tr>
              </table>
          </div>

          <div class="History">
            <h1>History</h1>
              <table>
                  <tr>
                    <th id="Past Excercise">Excecise</th>
                    <th id="Past Reps">Reps</th>
                    <th id="Past Times">Time</th>
                    <th id="Past Dates">Date</th>
                  </tr>
                  <tr>
                      <td>Example</td>
                      <td>Example</td>
                      <td>Example</td>
                      <td>Example</td>
                  </tr>
              </table>
          </div>
    </div>
</template>

<style src="../css/tracking.css">

</style>
