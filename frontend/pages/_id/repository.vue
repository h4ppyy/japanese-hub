<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-3">
          <div>
            <img
              src="/img/sample/geohot.jpg"
              alt="sample"
              class="img-thumbnail rounded-circle"
            />
          </div>
          <div class="mt-18px mb-18px">
            <div class="profile-username">George Hotz</div>
            <div class="profile-account">geohot</div>
          </div>
          <div class="profile-message mb-16px">
            We will win self driving cars.
          </div>
          <div class="mb-16px">
            <button type="button" class="btn btn-light btn-sm btn-block">
              Edit profile
            </button>
          </div>
          <div class="mb-16px">
            <div class="profile-info mb-4px">
              <a class="default-color disable-deco" href="#">
                <i class="fas fa-user-friends"></i>
                <strong>17.5k</strong>
                <span>followers</span>
              </a>
            </div>
            <div class="profile-info mb-4px">
              <a class="default-color disable-deco" href="#">
                <i class="fas fa-user-friends"></i>
                <strong>3</strong>
                <span>following</span>
              </a>
            </div>
            <div class="profile-info mb-4px">
              <a class="default-color disable-deco" href="#">
                <i class="far fa-star"></i>
                <strong>29</strong>
                <span>star</span>
              </a>
            </div>
          </div>
          <div class="profile-info mb-4px">
            <i class="far fa-building mr-6px"></i>google korea
          </div>
          <div class="profile-info mb-4px">
            <i class="fas fa-map-marker-alt mr-6px"></i>Seoul, Korea
          </div>
          <div class="profile-info mb-4px">
            <i class="fas fa-link mr-6px"></i>
            <a class="default-color" href="#">http://blog.naver.com/hello</a>
          </div>
          <div class="profile-info mb-4px">
            <i class="fab fa-twitter mr-6px"></i>@hello
          </div>
        </div>
        <div class="col-12 col-md-9">
          <div class="row">
            <div class="col-8">
              <input
                type="text"
                class="form-control"
                id="search_repository"
                placeholder="Find a repository..."
              />
            </div>
            <div class="col-2">
              <select class="form-control" id="search_repository">
                <option>All</option>
                <option>x</option>
                <option>y</option>
                <option>z</option>
              </select>
            </div>
            <div class="col-2">
              <button type="button" class="btn btn-success">New</button>
            </div>
          </div>
          <div class="dropdown-divider"></div>
          <ul class="list-group list-group-flush">

            <!-- repository -->
            <li class="list-group-item">
              <div class="row">
                <div class="col-10 col-lg-9">
                  <div class="repository-title">
                    <a class="disable-deco" href="#">tinygrad</a>
                  </div>
                  <div class="repository-desc mb-8px">
                    You like pytorch? You like micrograd? You love tinygrad!
                  </div>
                  <div class="mb-8px">
                    <span class="badge badge-pill badge-secondary">jlpt</span>
                    <span class="badge badge-pill badge-secondary">n1</span>
                    <span class="badge badge-pill badge-secondary">grammar</span>
                  </div>
                  <div class="repository-info">
                    <span class="mr-3">
                      <span class="badge badge-pill badge-success">&nbsp;</span>
                      text
                    </span>
                    <span class="mr-3">
                      <i class="far fa-star"></i> 1
                    </span>
                    <span class="mr-3">
                      Created 1 hour ago
                    </span>
                  </div>
                </div>
                <div class="col-2 col-lg-3">
                  <button type="button" class="btn btn-light btn-sm fz-12px">
                    <i class="far fa-star mr-6px"></i>Star
                  </button>
                </div>
              </div>
            </li>

            <!-- repository -->
            <li class="list-group-item">
              <div class="row">
                <div class="col-10 col-lg-9">
                  <div class="repository-title">
                    <a class="disable-deco" href="#">qemu</a>
                  </div>
                  <div class="repository-desc mb-8px">
                    Official QEMU mirror. Please see http://wiki.qemu.org/Contribute/SubmitAPatch for how to submit changes to QEMU. Pull Requests are ignored. Please only use release tarballs from the QEMU website.
                  </div>
                  <div class="mb-8px">
                    <span class="badge badge-pill badge-secondary">jlpt</span>
                    <span class="badge badge-pill badge-secondary">n2</span>
                    <span class="badge badge-pill badge-secondary">reading</span>
                  </div>
                  <div class="repository-info">
                    <span class="mr-3">
                      <span class="badge badge-pill badge-info">&nbsp;</span>
                      link
                    </span>
                    <span class="mr-3">
                      <i class="far fa-star"></i> 3
                    </span>
                    <span class="mr-3">
                      Created 2 hour ago
                    </span>
                  </div>
                </div>
                <div class="col-2 col-lg-3">
                  <button type="button" class="btn btn-light btn-sm fz-12px">
                    <i class="far fa-star mr-6px"></i>Star
                  </button>
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