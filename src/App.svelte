<script>
  let users = [
    {
      id: 1,
      userName: "rmcKay",
      firstName: "Robert",
      lastName: "McKay",
      role: "Admin",
      email: "Robert.Mckay@webmethod.com"
    },
    {
      id: 2,
      userName: "dgudibandi",
      firstName: "Dinesh",
      lastName: "Gudibandi",
      role: "SuperAdmin",
      email:"Dinesh.Gudibandi@webmethod.com"
    }
  ];

  let data = {
    userName: "",
    firstName: "",
    lastName: "",
    role: "Select A Role",
    email: "",
    id: null
  };
  let closeModal = () => {
  jQuery('#addModal').modal('hide');
  }
  let addUser = () => {
    const newUser = {
      id: users.length + 1,
      userName: data.userName,
      firstName: data.firstName,
       lastName: data.lastName,
      role: data.role,
      email: data.email
    };
    if(data.userName !== '' && data.firstName !== '' && data.lastName !== '' && data.email !== '' && data.role !== 'Select A Role')
    {
        users = users.concat(newUser);
        data = {
          id: null,
          userName: "",
          firstName: "",
          lastName: "",
          role: "Select A Role",
          email: ""
        };
        console.log(users);
        closeModal();
    } else {
    alert("please fill out all required fields");
    }
  };

  let isEdit = false;

  let editUser = user => {
    isEdit = true;
    data = user;
  };

  let updateUser = () => {
    isEdit = !isEdit;
    let userDB = {
      userName: data.userName,
      firstName: data.firstName,
      lastName: data.lastName,
      role: data.role,
      email: data.email,
      id: data.id
    };
      if(data.userName !== '' && data.firstName !== '' && data.lastName !== '' && data.email !== '' && data.role !== 'Select A Role')
        {
    let objIndex = users.findIndex(obj => obj.id == userDB.id);
    console.log("Before update: ", users[objIndex]);
    users[objIndex] = userDB;
    data = {
      id: null,
      userName: "",
      firstName: "",
      lastName: "",
      role: "Select A Role",
      email: ""
    };
    closeModal();
    }else {
     alert("please fill out all required fields");
    }
  };

  let deleteUser = id => {
    console.log(id);
    users = users.filter(user => user.id !== id);
  };
</script>

<style>
  @import url("https://fonts.googleapis.com/css?family=Nunito&display=swap");

  * {
    font-family: "Nunito", sans-serif;
  }
</style>

<section>
  <div class="container">
    <div class="row mt-5 ">

      <div class="modal fade" id="addModal" role="dialog" aria-hidden="true">
       <div class="modal-dialog modal-lg">
          <div class="modal-content">
        <div class="card p-2 shadow">
          <div class="card-body">
            <h5 class="card-userName mb-4">Add New User</h5>
            <form role="form" data-toggle="validator">
              <div class="form-group">
                <label for="userName">User Name*</label>
                <input
                  bind:value={data.userName}
                  type="text"
                  class="form-control"
                  id="text"
                  placeholder="User Name"
                   required
                   />
              </div>
              <div class="form-group">
                              <label for="firstName">First Name*</label>
                              <input
                                bind:value={data.firstName}
                                type="text"
                                class="form-control"
                                id="text"
                                placeholder="First Name"
                                 required
                                 />
                            </div>
                             <div class="form-group">
                                                          <label for="lastName">Last Name*</label>
                                                          <input
                                                            bind:value={data.lastName}
                                                            type="text"
                                                            class="form-control"
                                                            id="text"
                                                            placeholder="Last Name"
                                                             required
                                                             />
                                                        </div>
              <div class="form-group">
                <label for="role">Role *</label>
                <select
                  class="form-control"
                  id="role"
                  required
                  bind:value={data.role}>
                  <option selected disabled>Select A Role</option>
                  <option value="SuperAdmin">SuperAdmin</option>
                  <option value="Admin">Admin</option>
                  <option value="Basic">Basic</option>
                </select>
              </div>
              <div class="form-group">
                <label for="email">email*</label>
                <textarea
                  bind:value={data.email}
                  class="form-control"
                  id="email"
                  rows="3"
                  placeholder="user email"
                   required
                   />
              </div>
              {#if isEdit === false}
                <button
                  type="submit"
                  on:click|preventDefault={addUser}
                  class="btn btn-primary"

                  >
                  Add user
                </button>
              {:else}
                <button
                  type="submit"
                  on:click|preventDefault={updateUser}
                  class="btn btn-info"

                  >
                  Edit user
                </button>
              {/if}
            </form>
          </div>

        </div>
      </div>
      </div>
      </div>
      <div class="table">
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addModal">
        Add User
      </button>
      <table class="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
        {#each users as user}
       <tr>
      <th scope="row">{user.id}</th>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.userName}</td>
      <td>{user.email}</td>
       <td>{user.role}</td>
       <td> <button class="btn btn-info" on:click={editUser(user)}  data-toggle="modal" data-target="#addModal">
                           Edit
                         </button>

                         <button class="btn btn-danger" on:click={deleteUser(user.id)}>
                           Delete
                         </button>
                         </td>
    </tr>
        {/each}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>
