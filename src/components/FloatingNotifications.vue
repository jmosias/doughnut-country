<template>
  <div v-if="list" class="z-40 fixed top-4 right-4">
    <transition-group name="fade" tag="ul" class="flex flex-col gap-1">
      <li
        v-for="(notification, index) in list"
        :key="notification.id"
        @click="REMOVE_NOTIFICATION(index)"
        class="notification cursor-pointer p-2 text-xs bg-c-white text-c-tertiary border border-c-secondary rounded"
      >
        {{ notification.message }}
      </li>
    </transition-group>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'FloatingNotifications',
  methods: {
    ...mapMutations('notifications', ['REMOVE_NOTIFICATION']),
  },
  computed: {
    ...mapState('notifications', ['list']),
  },
};
</script>

<style scoped>
.notification {
  z-index: 100;
  max-width: 60vw;
}
</style>