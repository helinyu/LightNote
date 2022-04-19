<template>
    <div class="container">
        
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            count: 0,
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>

.container {
    background-color: red;
    height: 50px;
    width: 500px;
    position: absolute;
    bottom: 0px;
}

</style>