<template>
  <header>
    <nav class="navbar container is-spaced" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item">
          Japanese Hub
        </a>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <!-- not use -->
        </div>
        <div class="navbar-end">

          <a class="navbar-item">Repository</a>

          <a class="navbar-item">Problem</a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">Ranking</a>
            <div class="navbar-dropdown">
              <a class="navbar-item">Problem Solving Base Ranking</a>
              <a class="navbar-item">Activity Base Ranking</a>
            </div>
          </div>

          <!-- status: not login -->
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light">Sign in </a>
            </div>
          </div>

          <!-- status: login -->
          <!-- <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">h4ppyy</a>
            <div class="navbar-dropdown">
              <a class="navbar-item">My Profile</a>
              <hr class="navbar-divider">
              <a class="navbar-item">Log out</a>
            </div>
          </div> -->

        </div>
      </div>
    </nav>
  </header>
</template>