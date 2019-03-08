<template>
    <div>
        <div
            :class="className"
            v-if="isVisible"
            :disabled="isDisabled"
        >
            <div
                class="kuc-notify-title" 
                @click="handleClick"
            >{{ text }}
            </div>
            <div
                class="kuc-close-button" 
                @click="handleClick"
            >
                <IconButton :onClick="handleClosePopup" 
                    type="close"
                    :color="styleByType.color"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import IconButton from "./IconButton.vue";
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: "normal"
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    isVisible: {
      type: Boolean,
      default: true
    },
    onClick: {
      type: Function,
      default: () => {}
    }
  },
  computed:{
      className(){
        const className = [
            'kuc-notify',
            this.isVisible === false ? '' : 'show',
            this.styleByType.bgClass,

        ];
        return className.join(' ').trim();
      },
     styleByType() {
      const style = {
        bgClass: '',
        color: ''
      };
      switch (this.type) {
        case 'success':
          style.bgClass = 'bg-success';
          style.color = 'green';
          break;
        case 'infor':
          style.bgClass = 'bg-infor';
          style.color = 'blue';
          break;

        default:
          style.bgClass = 'bg-danger';
          style.color = 'red';
      }
      return style;
    }
  },
  methods: {
    handleClick: function() {
      this.onClick();
    },
    handleClosePopup() {
        if (this.isDisabled){
            return false;
        }
        this.isVisible = false;
        return true;
    }
  },
  components: {
      IconButton
  }
};
</script>

<style scoped>
.kuc-notify {
    user-select: none;
    top: 0;
    left: 50%;
    transform: translate(-50%, -100%);
    min-height: 70px;
    max-height: 150px;
    min-width: 170px;
    max-width: 500px;
    position: fixed;
    overflow: auto;
    z-index: 2000;
    transition: all 0.25s;
}
.kuc-notify.show {
    top: 30px;
    transform: translate(-50%, 0%);
}
.kuc-notify.bg-danger {
    background: #e74c3c;
}
.kuc-notify.bg-success {
    background: #91C36C;
}
.kuc-notify.bg-infor {
    background: #3897d9;
}
.kuc-notify .kuc-notify-title {
    font-family: HelveticaNeueW02-45Ligh,Arial,'Hiragino Kaku Gothic ProN',Meiryo,sans-serif;
    padding: 16px 56px 16px 24px;
    text-shadow: 1px -1px 0 rgba(0,0,0,.5);
    font-size: 16px;
    line-height: 1.5;
    color: white;
    min-width: 80px;
}
.kuc-notify .kuc-close-button {
    right: 10px;
    top: 15px;
    position: absolute;
    cursor:pointer;
    width:30px;
}
</style>
