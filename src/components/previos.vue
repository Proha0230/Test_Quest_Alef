<template>

    <div class="mainPrevios">
        <div class="previosInfo">
            <h3>Персональные данные</h3>
            <div v-for="user in userInfo" :key="user" class="userPrevios">
                <h4>{{ user.name }}, {{ user.age }} лет</h4>
            </div>
            <h3>Дети</h3>
            <div v-for="child in childUser" :key="child" class="childPrevios">
                <h4>{{ child.name }}, {{ child.age }} лет</h4>
            </div>
        </div>
    </div>


</template>

<script>
import { useStore } from 'vuex';
import { ref } from 'vue';

export default{

    setup(){
        const store = useStore()
        const userInfo = ref(store.state.infoUser)
        const childUser = ref(store.state.childrenUser)

        return{userInfo, childUser}
    }

}

</script>

<style>


.mainPrevios{
    margin-left: 30%;
    width: 50%;
}

.previosInfo h3{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
}

.previosInfo h4{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    margin-left: 0.5rem;
}

.childPrevios{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 10rem;
    align-items: center;
    height: 2rem;
    background: #F1F1F1;
    border-radius: 5px;
    margin: 1rem 0rem;
}

</style>