<template>
  <header>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-white pb-15px pt-15px shadow-sm">
      <NuxtLink class="navbar-brand" to="/">
        <!-- <img
          src="https://getbootstrap.com/docs/4.5/assets/brand/bootstrap-solid.svg"
          width="30"
          height="30"
          class="d-inline-block align-top"
          alt=""
          loading="lazy"
        /> -->
        Japanese Hub
      </NuxtLink>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search or jump to..."
            aria-label="Search"
          />
        </form>

        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <NuxtLink class="nav-link" to="/me/repository">
              Repository
            </NuxtLink>
          </li>

          <li class="nav-item">
            <NuxtLink class="nav-link" to="/me/problem">
              Problem
            </NuxtLink>
          </li>
          
          <!-- i must to develop for dropdown -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Explorer
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Repository</a>
              <a class="dropdown-item" href="#">Problem</a>
            </div>
          </li>

          <!-- i must to develop for dropdown -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Ranking
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Problem Solving Base Ranking</a>
              <a class="dropdown-item" href="#">Activity Base Ranking</a>
            </div>
          </li>

          <!-- status is not login -->
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/login">
              Sign In
            </NuxtLink>
          </li>

          <li class="nav-item">
            <NuxtLink class="nav-link" to="/join">
              Sign Up
            </NuxtLink>
          </li>

          <!-- status is login -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              h4ppyy
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Your profile</a>
              <a class="dropdown-item" href="#">Your repository</a>
              <a class="dropdown-item" href="#">Your problem</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Sign Out</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>