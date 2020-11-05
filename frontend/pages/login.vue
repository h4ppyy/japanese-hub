<template>
  <div>

    <h2 class="text-center mb-24px">Sign In</h2>
    
    <div class="auth-box">
      <div class="card-body">
        <div class="form-group">
          <label for="exampleInputEmail1">account or email address</label>
          <input
            type="text"
            class="form-control"
            id="account"
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
          <button class="btn btn-success w-100p">Sign In</button>
        </div>
      </div>
    </div>

    <div class="auth-box">
      <div class="card-body">
        <NuxtLink to="/password_reset">
          <button type="button" class="btn btn-light w-100p">Forgot password?</button>
        </NuxtLink>
      </div>
    </div>

    <div class="auth-box">
      <div class="card-body">
        <NuxtLink to="/join">
          <button type="button" class="btn btn-light w-100p">Create an account.</button>
        </NuxtLink>
      </div>
    </div>

    <!-- only dev mode -->
    <div class="auth-box">
      <div class="card-body">
        <NuxtLink to="/password_change">
          <button type="button" class="btn btn-light w-100p">[dev] password_change</button>
        </NuxtLink>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  layout: "no_footer",
};
</script>