<template>
    <div class="index">
        <div class="card margin-bottom-8">
            <h2 class="text-algin-center">欢迎来到作答页面!</h2>
        </div>

        <div class="card" v-if="!start">
            <button class="btn margin-bottom-8" @click="startAnswer">
                答题开始
            </button>
            <img src="../assets/img/indexImg.gif" alt="想不明白" style="width : 100%">
        </div>

        <Question v-if="start"
            :questions = "currentExam"
        />
    </div>
</template>

<script setup lang="ts">
import Question from "./Question.vue"
import { ref , Ref} from 'vue'
import _ from "lodash"

// 题目获取
import  questions  from "../data/questions"

// 设置当前套题
const currentExam : Ref<QuestionType[]> = ref([])

currentExam.value = _.sampleSize(questions,10)

// 判断答题是否开始
const start = ref(false)

// 开始答题
const startAnswer = function() {
    start.value = true
}
</script>

<style scoped>
.btn {
    width: 80%;
    padding: 12px;
    border: 0;
    font-size: 20px;
    color: #fff;
    background-color: aquamarine;
    display: block;
    margin: 0 auto;
}

.btn:hover {
    cursor: pointer;
}
</style>

