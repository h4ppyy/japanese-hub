<template>
  <div>

    <h2 class="text-center mb-24px">Change Password</h2>
    
    <div class="auth-box">
      <div class="card-body">
        <div class="form-group">
          <label for="exampleInputPassword1">New Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
          />
        </div>
        <div>
          <button class="btn btn-success w-100p">Change Password</button>
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