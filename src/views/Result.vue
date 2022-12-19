<template>
    <div class="card">
        <nut-row class="margin-bottom-8">
            <nut-col :span="8">
              <div class="flex-content">     
                <nut-icon font-class-name="iconfont" class-prefix="icon" name="chenggong" color="#78C326"/>
                正确 : {{ score }}
              </div>
            </nut-col>
            <nut-col :span="8">
              <div class="flex-content">
                <nut-icon font-class-name="iconfont" class-prefix="icon" name="cuowu" color="#E22D2D"/>
                错误 : {{ total - score}}</div>
            </nut-col>
            <nut-col :span="8">
              <div class="flex-content">
                <nut-icon font-class-name="iconfont" class-prefix="icon" name="gaishuai" color="#F4EA2A"/>
                正确率 : {{ score / total * 100}} %</div>
            </nut-col>
        </nut-row>

        <img src="../assets/img/success.gif" style="width: 100%;">
        <!-- 重新测试 -->
        <nut-button 
        block 
        type="primary" 
        color="#1989FA" 
        shape="square"
        @click="rePlay"
        >    
            重新测试
        </nut-button>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()

function rePlay() {
    router.replace({
        path : '/'
    })
}

// 题目总数
const total : number = Number(window.sessionStorage.getItem("total"))

// 得分
const score : number= Number(window.sessionStorage.getItem("score"))

</script>

<style lang="scss" scoped>
.nut-row {
  overflow: hidden;
  &:not(:last-child) .nut-col {
    margin-bottom: 15px;
  }
  margin-bottom: 15px;
}
.flex-content {
  line-height: 40px;
  color: #000;
  text-align: center;
  border-radius: 6px;
  background: #fff;
  &.flex-content-light {
    background: #ffc7c4;
  }
  &.flex-content-height {
    height: 50px;
  }
}

.nut-icon:before {
  position: static;
}
</style>