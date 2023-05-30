<template>
<div class="mainForm">
<div class="childForm">
    <div class="formInputInfo">
        <div class="datah4">
            <h4>Персональные данные</h4>
        </div>
            <form @change.prevent="addInfoUser"> 
                <div class="formName">
                    <label id="nameUser"><p>Имя</p></label>
                    <input type="text" placeholder="Введите ваше имя" id="nameUser" name="nameUser" v-model="nameUser">
                </div>
                
                <div class="formAge">
                    <label id="ageUser"><p>Возраст</p></label>
                    <input type="text" placeholder="Введите ваш возраст" id="ageUser" name="ageUser" v-model="ageUser">
                </div>
            </form>
    </div>
    <div class="childInfo">
        <div class="childAdd">
        <h4>Дети (макс.5)</h4>
        <button @click.prevent="openAddChild = !openAddChild"><span class="plusChild"> +&nbsp; </span> Добавить ребенка</button>
        </div>

        <form class="childInputs" v-if="openAddChild && $store.state.childrenUser.length <= 4" @submit.prevent="childrenAdd">
                <div class="nameChildForm">
                    <label id="nameChild">Имя</label>
                    <input type="text" id="nameChild" placeholder="Имя" v-model="childrenName" name="nameChild">
                </div>

                <div class="ageChildForm">
                    <label id="ageChild">Возраст</label>
                    <input type="text" id="ageChild" placeholder="Возраст" v-model="childrenAge" name="ageChild">
                </div>
                <button class="AddedChild">Добавить</button>
        </form>

        <div class="childInputs" v-for="item in $store.state.childrenUser" :key="item">
                <div class="nameChildForm">
                    <label id="nameChild">Имя</label>
                    <p id="nameChild">{{ item.name }}</p>
                </div>

                <div class="ageChildForm">
                    <label id="ageChild">Возраст</label>
                    <p id="ageChild">{{ item.age }}</p>
                </div>
                <button class="deleteChild" @click="deleteChild(item.id)">Удалить</button>
        </div>
        <button class="sendAllForm">Сохранить</button>
    </div>
</div>
</div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { v4 as uuidv4 } from 'uuid';

export default{
    setup(){

        const store = useStore()
        const openAddChild = ref(false)
        const childrenName = ref()
        const childrenAge = ref()
        const childUser = ref()
        const nameUser = ref()
        const ageUser = ref()

        const childrenAdd = ()=> {
            childUser.value = {
                name: childrenName.value,
                age: childrenAge.value,
                id: uuidv4()
            }
            if(store.state.childrenUser.length <= 4){
            store.state.childrenUser.push(childUser.value)
            openAddChild.value = false
            childrenName.value = ''
            childrenAge.value = ''
            childUser.value = ''
            }
        }

        const deleteChild = (id)=> {
            store.state.childrenUser = store.state.childrenUser.filter(child => child.id !== id)
        }

        const addInfoUser = () => {
            store.state.infoUser = [{
                name: nameUser.value,
                age: ageUser.value
            }]
            console.log(store.state.infoUser)
        }

        return{openAddChild, childrenAdd, childrenAge, childrenName, deleteChild, nameUser, ageUser, addInfoUser}
    }
}
</script>

<style>

.datah4{
    display: inline-block;
}

.mainForm{
    margin-left: 20%;
    width: 60%;
}

.formInputInfo{
    width: 100%;
    height: 15rem;
}

.formInputInfo h4{
    float: left;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin: 1rem 0rem;
}

.formName{
    width: 90%;
    margin-left: 1rem;
    height: 3.2rem;
    border: 1px solid rgba(17, 17, 17, 0.10);
    border-radius: 10px;
    margin-bottom: 0.5rem;
}

.formName input{
    width: 95%;
    height: 1rem;
    border-color: transparent;
    margin-left: 0.2rem;
}

.formName input:focus{
    outline: none !important;
}

.formName input:valid{
    background-color: white;
}

.formName label{
    width: 98%;
    height: 1rem;
    display: block;
    float: left;
    margin-top: -0.2rem;
    margin-bottom: 0.7rem;
    margin-left: 0.5rem;
    font-family: 'Montserrat';
    font-size: 13px;
    line-height: 16px;
    opacity: 50%;
}

.formAge{
    width: 90%;
    margin-left: 1rem;
    height: 3.2rem;
    border: 1px solid rgba(17, 17, 17, 0.10);
    border-radius: 10px;
    margin-bottom: 0.5rem;
}

.formAge input{
    width: 95%;
    height: 1rem;
    border-color: transparent;
    margin-left: 0.2rem;
}

.formAge input:focus{
    outline: none !important;
}

.formAge input:valid{
    background-color: white;
}



.formAge input:-internal-autofill-selected{
    background-color: transparent;
}

.formAge label{
    width: 98%;
    height: 1rem;
    display: block;
    float: left;
    margin-top: -0.2rem;
    margin-bottom: 0.7rem;
    margin-left: 0.5rem;
    font-family: 'Montserrat';
    font-size: 13px;
    line-height: 16px;
    opacity: 50%;
}

.childAdd button{
    display: flex;
    align-items: center;
    text-align: center;
    border-color: #01A7FD;
    color: #01A7FD;
    height: 2rem;
    border-radius: 3rem;
    padding: 1rem;
    margin-left: 30%;
    background-color: transparent;
}

.childAdd{
    display: flex;
}

.childAdd h4{
    margin: 0rem 0rem;
    display: flex;
    align-items: center;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
}

.plusChild{
    font-size: 1.5rem;
}

.childInfo{
    display: block;
    height: 3rem;
    margin-top: 1rem;
}

.childList{
    display: block;
    width: 90%;
    margin-top: 1rem;
}

.childInputs{
    display: flex;
    margin-top: 1rem;
    margin-left: 1rem;
}

.nameChildForm{
    width: 30%;
    height: 3.2rem;
    border: 1px solid rgba(17, 17, 17, 0.10);
    border-radius: 10px;
}

.ageChildForm{
    width: 30%;
    height: 3.2rem;
    border: 1px solid rgba(17, 17, 17, 0.10);
    border-radius: 10px;
    margin: 0rem 1rem;
}

.nameChildForm input{
    border-color: transparent;
    margin-left: 0.1rem;
}

.nameChildForm input:focus{
    outline: none !important;
}

.nameChildForm label{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    display: flex;
    align-items: center;
    color: rgba(17, 17, 17, 0.50);
    margin-left: 0.3rem;
    margin-top: 0.5rem;
}

.ageChildForm input{
    border-color: transparent;
    margin-left: 0.1rem;
}

.ageChildForm input:focus{
    outline: none !important;
}

.ageChildForm label{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    display: flex;
    align-items: center;
    color: rgba(17, 17, 17, 0.50);
    margin-left: 0.3rem;
    margin-top: 0.5rem;
}

.AddedChild{
    border-radius: 1rem;
    height: 2rem;
    align-self: center;
    border-color: green;
    background-color: transparent;
    cursor: pointer;
}

.deleteChild{
    border-radius: 1rem;
    height: 2rem;
    align-self: center;
    border-color: transparent;
    background-color: transparent;
    cursor: pointer;
    color: #01A7FD;
}

.nameChildForm p{
    margin: 0rem 0rem;
    margin-left: 0.3rem;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
}

.ageChildForm p{
    margin: 0rem 0rem;
    margin-left: 0.3rem;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
}

.sendAllForm{
    position: absolute;
    height: 2.5rem;
    width: 7rem;
    margin-top: 2rem;
    border-radius: 2rem;
    background-color: #01A7FD;
    color: white;
    border-color: transparent;
}


</style>