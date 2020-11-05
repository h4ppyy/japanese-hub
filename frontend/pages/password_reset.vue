<template>
  <div>

    <div>
      <img class="img-50x50" src="/img/sample/undraw1.png" />
    </div>

    <div>Reset your password</div>
    
    <div class="card">
      <div class="card-body">
        <div class="form-group">
          <label for="exampleInputEmail1">Enter your user account's verified email address and we will send you a password reset link.</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div>
          <button class="btn btn-primary">Send password reset email</button>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  layout: "empty",
};
</script>