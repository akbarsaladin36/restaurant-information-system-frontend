<template>
    <div class="mt-5 text-center">
        <h1>All Messages</h1>
    </div>

    <router-link to="/buyer/all-messages/create" class="btn btn-primary mt-5">New Message</router-link>

    <div class="mt-5">
    <table class="table table-bordered border-dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Message Title</th>
          <th>Sent To</th>
          <th>Message Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Test123</td>
          <td>Test123</td>
          <td>Test123</td>
          <td>
            Test123
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
    name: 'BuyerAllMessages'
}
</script>

<style>

</style>