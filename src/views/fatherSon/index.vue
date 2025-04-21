<template>
// 由于下面所有例子的子组件都是用props.msg方式来使用和修改msg，违反了单向传递原则，所以例子都需要重构！！！！
    <div class="outerDiv">
        <div class="fatherDiv">
            <h4>父组件通过:key=传给子组件Msg对象信息,给了{{ sonAMsg.money }}元</h4>
            <h4>父组件通过:key=传给子组件简单类型的信息,simpleValue是{{simpleValue }}</h4>
            <el-button @click="sonAMsg.money=sonAMsg.money+1">父给子加money</el-button>
            <sonA 
            :simpleValue="simpleValue"
            :sonAMsg="sonAMsg">
        </sonA>
        </div>
        <div class="fatherDiv">
            <h4>父组件使用v-model语法糖传信息,给了{{ sonBMsg.money }}元</h4>
            <el-button @click="sonBMsg.money=sonBMsg.money+1">父给子加money</el-button>
            <sonB
            v-model:sonBMsg="sonBMsg"
            />
        </div>
        <div class="fatherDiv">
            <h4>父组件使用@function="function"传递方法</h4>
            <sonC
            :sonCMsg="sonCMsg"
            @testCallBack="testCallBack"
            />
        </div>
        <div class="fatherDiv">
            <h4>父组件使用ref=""传递引用,给了{{ sonDMsg.money }}元</h4>
            <sonD
            :sonDMsg="sonDMsg"
            @testCallBack2="testCallBack2"
            ref="sonDRef"/>
        </div>
        <div class="fatherDiv">
            <h4>父子复用store中状态,父给子{{ msg.money }}元</h4>
            <el-button @click=testDouble2>父给子加money</el-button>
            <sonE
            :sonEMsg="msg"
            />
        </div>
        <div class="fatherDiv">
            <h4>使用插槽父给子传入标签元素</h4>
            <sonF>
                <h5>父组件传递过来的内容,父组件的money:{{ msg.money }} </h5>
                <h5>父组件传递过来的内容,name:{{ msg.name }} </h5>
            </sonF>
        </div>
    </div>
</template>

<script lang="ts" setup>  
import sonA from '@/components/fatherSon/sonA.vue'
import sonB from '@/components/fatherSon/sonB.vue'
import sonC from '@/components/fatherSon/sonC.vue'
import sonD from '@/components/fatherSon/sonD.vue'
import sonE from '@/components/fatherSon/sonE.vue'
import sonF from '@/components/fatherSon/sonF.vue'
import { ref,reactive,unref} from 'vue'


// 父组件通过props传值给子组件，sonA中使用defineProps接收并默认是响应式
// 适用于父组件传递给子组件数据但子组件不需要修改父组件的数据，且父组件也不care子组件是否更新
// 如果子组件之只展示不修改，建议直接copy 一个对象，不要直接使用 reactive对象
const sonAMsg = reactive({
    name:"sonA",
    money:1
});
const simpleValue = ref(1)


// v-model:sonBMsg="sonBMsg" 实际上是 :sonBMsg="sonBMsg" 和 @update:sonBMsg 的组合。
// 子组件使用defineProps接收数据，使用defineEmits接收父组件的监听update函数
// 如果sonBMsg是reactive的，那么直接修改 props.sonBMsg 触发父组件响应式更新，即使你没有显式调用 emit，
const sonBMsg = reactive({
    name:"sonB",
    money:10
});


// 父组件使用@function="function"传递方法，子组件通过defineEmits接收父组件的监听testCallBack函数
// 上面的v-model相当于父默认给子传了update的监听方法
const sonCMsg = reactive({
    name:"sonC",
    money:100
});
function testCallBack(a:String,b:Number){
    console.log("testClick----------->,儿子不听话收回所有");
    sonCMsg.money = 0;
    sonCMsg.name="?";
}

// 父组件使用ref=""传递引用后子组件使用defineExpose暴露方法，父组件可以直接调用
const sonDMsg = reactive({
    name:"sonD",
    money:100
});
// 定义 ref
const sonDRef = ref<InstanceType<typeof sonD>>();
// 子调用父的testCallBack2方法来实现调用自己的加钱方法
function testCallBack2(){
    console.log("testClick----------->,sonD havue no money");
    const sonDInstance = unref(sonDRef);
    console.log("调用子的方法给他加钱");
    if (sonDInstance) {
        console.log("sonDInstance.updateValue()");
        sonDInstance.updateValue();
    }}


// 父子公用store状体，使用store中方法修改state
import useSonMsg from "@/stores/useSonMsg"
const useSonStore =useSonMsg();
const {msg} = useSonStore.state;
// 实际上是store暴露的方法
function testDouble2(){
    useSonStore.addMoney();
    useSonStore.modifyName();
}




</script>

<style scoped lang="scss">
.outerDiv {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 10px;
}

.fatherDiv {
    box-sizing: border-box; /* 添加 box-sizing: border-box; */
    display: flex;
    flex-direction: column; /* 垂直排列 */
    justify-content: center;
    align-items: center;
    background-color: rgb(170, 235, 235);
    width: calc(33.33% - 20px); /* 调整宽度以适应三列布局 */
    height: 300px;
    border-radius: 5%;
    border: 1px solid black; /* 添加边框 */
    text-align: center;
    margin: 10px; /* 添加间距 */
}
.myDiv{
    background-color: rgb(152, 147, 226);
    width: 300px;
    height: 150px;
}
</style>