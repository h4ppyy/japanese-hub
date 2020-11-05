<template>
  <div>

    <div>
      <img class="img-50x50" src="/img/sample/undraw1.png" />
    </div>

    <div>change password</div>
    
    <div class="card">
      <div class="card-body">
        <div class="form-group">
          <label for="exampleInputPassword1">new password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div>
          <button class="btn btn-primary">change password</button>
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