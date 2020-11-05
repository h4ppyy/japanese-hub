<template>
  <div>

    <h2 class="text-center mb-24px">Reset your password</h2>
    
    <div class="auth-box">
      <div class="card-body">
        <div class="form-group">
          <label for="exampleInputEmail1">Enter your user account's verified email address and we will send you a password reset link.</label>
          <input
            type="text"
            class="form-control"
            id="account"
            placeholder="Enter your email address"
          />
        </div>
        <div>
          <button class="btn btn-success w-100p">Send password reset email</button>
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