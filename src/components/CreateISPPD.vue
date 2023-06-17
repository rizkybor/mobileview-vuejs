<script setup>
import { IconChevronRight, IconCalendarEvent, IconPaperclip } from '@tabler/icons-vue';
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';


const router = useRouter();
const selectSppdType = () => {
  console.log('SPPD Type clicked');
  router.push('/sppd-type')
};

const selectTripTypeStatutory = () => {
  console.log('Trip Type Statutory clicked');
};

const selectStartTrip = () => {
  console.log('Start Trip clicked');
}

const selectEndTrip = () => {
  console.log('End Trip clicked');
}

const selectDetailTrip = () => {
  console.log('Detail Trip clicked');
}

const insertFile = () => {
  console.log('Insert File clicked');
}

const submit = () => {
  console.log('Submit clicked');
}

</script>

<template>
  <div>
    <label>SPPD Type</label>
    <div class="selectAction" @click="selectSppdType" >
      <h4>Select Type</h4>
      <IconChevronRight  />
    </div>
    <hr/>
    <label>Trip, Type, Statutory</label>
    <div class="selectAction" @click="selectTripTypeStatutory">
      <h4>Select Trip, Type, Statutory</h4>
      <IconChevronRight />
    </div>
    <hr/>
    <label>Start Trip</label>
    <div class="selectAction" @click="selectStartTrip">
      <h4>Select Date</h4>
      <IconCalendarEvent style="color: #306BDD;" />
    </div>
    <hr/>
    <label>End Trip</label>
    <div class="selectAction" @click="selectEndTrip">
      <h4>Select Date</h4>
      <IconCalendarEvent style="color: #306BDD;" />
    </div>
    <hr/>
    <label>Detail Trip</label>
    <div class="selectAction" @click="selectDetailTrip">
      <h4>Input Detail</h4>
      <IconChevronRight  />
    </div>
    <hr/>
    <div class="selectAction">
      <h5>File*</h5>
      <h6>*Optional</h6>
    </div>
    <div >
      
      <h5 class="box-insert-file">
        <IconPaperclip @click="insertFile" style="margin-right: 5px; padding-top: 5px; color: #306BDD;" />Insert File</h5>
    </div>
    <h6 style="text-align: end;">Insert pdf, jpg, png filemax 5Mb</h6>



    
    <div class="submit-button">
    <button class="btn-submit" @click="submit">Submit</button>
  </div>
  </div>
</template>
