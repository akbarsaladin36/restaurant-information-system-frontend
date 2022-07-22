<template>
  <div class="mt-5">
    <div class="text-center">
        <h1>Create A Message</h1>
    </div>
  </div>

  <form action="#" method="post">
    <div class="form-group">
        <label for="receiver_id">To</label>
        <input type="text" name="receiver_id" id="receiver_id" class="form-control">
    </div>
    <div class="form-group mt-3">
        <label for="message_title">Title</label>
        <input type="text" name="message_title" id="message_title" class="form-control">
    </div>
    <div class="form-group mt-3">
        <label for="message_desc">Description</label>
        <textarea name="message_desc" id="message_desc" class="form-control" rows="10"></textarea>
    </div>
    <button type="submit" class="form-control btn btn-success mt-3">Send</button>
  </form>

</template>

<script>
export default {
    name: "BuyerCreateMessage"
}
</script>

<style>

</style>