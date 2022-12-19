<template>
    <div class="card">
        {{ currentQuestionNum }}、{{ question.name }} ({{question.type === 'single' ? '单选题' : '多选题'}})

        <!-- 单选题 -->
        <nut-cell-group v-if="question.type === 'single'">
            <nut-cell>
                <nut-radiogroup v-model="currentAnswer[currentQuestionNum - 1][0]">
                  <nut-radio 
                  v-for="(option , idx) in question.options"
                  :key="idx"
                  :label="option.key"
                  icon-font-class-name="iconfont" 
                  icon-class-prefix="icon" 
                  icon-name="danxuankuang"
                  icon-active-name="danxuankuang-xuanzhong"  
                  >
                    {{ `${option.key}. ${option.value}`}}
                  </nut-radio>
                </nut-radiogroup>
            </nut-cell>
        </nut-cell-group>

        <!-- 多选题 -->
        <nut-cell-group v-else>
            <nut-cell>                
                <nut-checkboxgroup v-model="currentAnswer[currentQuestionNum - 1]">
                    <nut-checkbox
                    class="margin-bottom-5" 
                    v-if="question.type === 'multiple'" 
                    v-for="(option , idx) in question.options"
                    :key="idx"
                    :label="option.key"
                    icon-font-class-name="iconfont" 
                    icon-class-prefix="icon" 
                    icon-name="duoxuanweixuan"
                    icon-active-name="guifanduoxuanxuanzhong"   
                    >
                        {{ `${option.key}. ${option.value}` }}
                    </nut-checkbox>
                </nut-checkboxgroup>
            </nut-cell>
        </nut-cell-group>
        
        <!-- 下一题 -->
        <nut-button 
        v-if="currentQuestionNum < questions.length"
        block 
        type="primary" 
        color="#1A79C3" 
        shape="square"
        class="margin-bottom-8"
        @click="nextQuestion"
        :disabled="currentAnswer[currentQuestionNum - 1].length === 0"
        >    
            下一题
        </nut-button>

        <!-- 提交 -->
        <nut-button 
        v-if="currentQuestionNum >= questions.length"
        block 
        type="primary" 
        color="#D09A99" 
        shape="square"
        class="margin-bottom-8"
        @click="douSumit"
        :disabled="currentAnswer[currentQuestionNum - 1].length === 0"
        >    
            提交
        </nut-button>

        <!-- 上一题 -->
        <nut-button 
        v-if="currentQuestionNum > 1"
        block 
        type="primary" 
        shape="square"
        @click="preQuestion"
        >
            上一题
        </nut-button>

        <!-- 进度条 -->
        <nut-cell>
            <nut-progress 
            :percentage="currentQuestionNum / questions.length * 100"
            size="small"
            :show-text="false" stroke-height="24"
            stroke-color="#ccc"
            />
        </nut-cell>

    </div>
</template>

<script setup lang="ts">
import { ref , computed , toRefs } from 'vue'
import { useRouter } from "vue-router"
import _ from "lodash"

const router = useRouter()

// 当前题目
const currentQuestionNum = ref(1)

// 接收父组件传送的值
interface Props {
  questions : QuestionType[]
}

const props = withDefaults(defineProps<Props>(), {
  questions : () => []
})

const { questions } = toRefs(props);

// 创建用于存储用户答案的数组
const answers : string[][] = questions.value.map(() => {
    return [];
})

// 用户当前答案
const currentAnswer = ref(answers)

// 一题一题提取题目
const question = computed(() => {
    return questions.value[currentQuestionNum.value -1]
})

// 下一题
const nextQuestion = function() {
    if(currentQuestionNum.value < questions.value.length)
    currentQuestionNum.value++
}

// 上一题
const preQuestion = function() {
    currentQuestionNum.value--
}

let score : number = 0;

// 提交结果
const douSumit = function() {
    router.replace('/result')
    questions.value.forEach((question,idx) => {
        const myAnswer = currentAnswer.value[idx]

        if( myAnswer.length === _.union(myAnswer , question.answer).length) 
            score += 1
    })

    window.sessionStorage.setItem("score",String(score))
    window.sessionStorage.setItem("total",String(questions.value.length))
}
</script>

<style scoped>

</style>