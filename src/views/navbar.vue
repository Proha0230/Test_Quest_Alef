<template>

    <div class="mainNavbar">
        <div class="logoAlef"></div>
        <div class="navBarButton">
            <button @click="goForm">Форма</button>
            <button @click="goPrevios">Превью</button>
        </div>
        <div class="borderBottom"></div>
    </div>


</template>

<script>
import { useRouter } from 'vue-router';
export default{
    setup(){

        const router = useRouter()

        const goForm = () => {
            router.push('/')
        }

        const goPrevios = () => {
            router.push('/previos')
        }


        return{goForm, goPrevios}
    }
}


</script>

<style>

.logoAlef{
    width: 10rem;
    height: 4rem;
    background-image: url('../assets/logoAlef.png');
    background-size: cover;
    padding-bottom: 1rem;
    margin-left: 6%;
}

.mainNavbar{
    display: flex;
    width: -webkit-fill-available;
    height: 5.5rem;
}

.navBarButton{
    align-self: center;
    margin-left: 45%;
    width: 10rem;
    height: 1.5rem;
    display: flex;
    position: absolute;
}

.navBarButton button{
    margin: 0rem 0.5rem;
    border-color: transparent;
    background-color: #FFFFFF;
    cursor: pointer;
    color: rgba(17, 17, 17, 0.48);
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
}

.borderBottom{
    display: flex;
    width: -webkit-fill-available;
    height: 10px;
    position: absolute;
    margin-top: 4.5rem;
    box-shadow: 0px 1px 0px rgba(17, 17, 17, 0.1);
}

</style>