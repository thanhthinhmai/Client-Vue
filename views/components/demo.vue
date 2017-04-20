<!-- TODO: Hãy viết thành một component hoàn chỉnh -->
<template lang="html">
    <div id="img">
    <div class="row">

    <div  class="col-md-3" v-for="item in items">
    <img :src="'/public/image/' + item.photo" :alt="item.name" width="128" height="128">
        <p>{{item.name}}</p>
        <!--<p>{{item.type}}</p>-->
     </div>
    </div>
    </div>
</template>

<script>
export default {
    props: ['items']
}
</script>

<style lang="css">
</style>