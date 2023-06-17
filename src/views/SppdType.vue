
<script setup>
import { IconChevronLeft } from '@tabler/icons-vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();

const selectDomestic = () => {
  console.log('Select Domestic');
};

const selectInternational = () => {
  console.log('Select International');
}

const navigateBack = () => {
  // Call router.back to navigate back to the previous route
  router.back();
};

</script>

<template>
  <div>
    <label class="subtitle">
      <IconChevronLeft  @click="navigateBack" style="cursor: pointer; margin-bottom: -5px;" />
      SPPD Type</label>
    <div class="selectAction" @click="selectDomestic" >
      <h4>Domestic</h4>
    </div>
    <hr/>
    <div class="selectAction" @click="selectInternational" >
      <h4>International</h4>
    </div>

  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
