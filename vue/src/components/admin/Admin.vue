<template>
<div class="row p-4">
    <div class="col-1 bg-secondary p-2">
        <router-link class="btn btn-primary" to="/admin/employees"> Employees </router-link>
    </div>
    <div class="col-2 bg-secondary p-2">
        <router-link class="btn btn-dark" to="/admin/pages"> Pages </router-link>
    </div>
<div class="col">
    <router-view />
</div>
</div>
</template>