<template>
  <div>

    <div>
      <img class="img-50x50" src="/img/sample/undraw1.png" />
    </div>

    <div>sign in</div>
    
    <div class="card">
      <div class="card-body">
        <div class="form-group">
          <label for="exampleInputEmail1">account or email address</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" class="form-text text-muted"
            >We'll never share your email with anyone else.</small
          >
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div>
          <button class="btn btn-primary">sign in</button>
        </div>
      </div>
    </div>

    <div class="card">
      Forgot password?
    </div>

    <div class="card">
      New to GitHub? Create an account.
    </div>

  </div>
</template>

<script>
export default {
  layout: "empty",
};
</script>