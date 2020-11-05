<template>
  <div>

    <h2 class="text-center mb-24px">Sign Up</h2>
    
    <div class="auth-box">
      <div class="card-body">
        <div class="form-group">
          <label for="exampleInputEmail1">Account</label>
          <input
            type="text"
            class="form-control"
            id="account"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email</label>
          <input
            type="text"
            class="form-control"
            id="email"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
          />
        </div>
        <div>
          <button class="btn btn-primary w-100p">Sign Up</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  layout: "no_footer",
};
</script>