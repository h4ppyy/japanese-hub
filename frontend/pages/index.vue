<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-3 debug">
          <div>
            <img
              src="/img/sample/profile.png"
              alt="sample"
              class="img-thumbnail"
            />
          </div>
          <div>Username</div>
          <div>Account</div>
          <div>Message</div>
          <div>
            <button type="button" class="btn btn-secondary">
              Edit profile
            </button>
          </div>
          <div>followers, following, star</div>
          <div>company</div>
          <div>region</div>
          <div>blog</div>
          <div>sns</div>
        </div>
        <div class="col-12 col-md-9 debug">
          <div class="row">
            <div class="col">
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="col">
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown button
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </div>
            </div>
            <div class="col">
              <button type="button" class="btn btn-success">Success</button>
            </div>
          </div>
          <div class="dropdown-divider"></div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <div class="row">
                <div class="col-10 col-lg-9">
                  <div>title</div>
                  <div>desc</div>
                  <div>tag</div>
                  <div>type / Created 1 hour ago</div>
                </div>
                <div class="col-2 col-lg-3">
                  <button type="button" class="btn btn-secondary">Star</button>
                </div>
              </div>
            </li>
            <li class="list-group-item">
              <div class="row">
                <div class="col-10 col-lg-9">
                  <div>title</div>
                  <div>desc</div>
                  <div>tag</div>
                  <div>type / Created 1 hour ago</div>
                </div>
                <div class="col-2 col-lg-3">
                  <button type="button" class="btn btn-secondary">Star</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>