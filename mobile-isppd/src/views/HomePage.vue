<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container">
        <ion-label>iSPPD Type</ion-label>
        <ion-item button detail="true" @click="openActionSheet('type')">
          <ion-label>Select Type</ion-label>
        </ion-item>
        <ion-label>Type, Trip, Statutory</ion-label>
        <ion-item button detail="true" @click="openActionSheet('statutory')">
          <ion-label>Select trip, type, statutory</ion-label>
        </ion-item>
      </div>

      <ion-action-sheet
        :is-open="isOpen"
        header="Actions"
        :buttons="actionSheetButtons"
        @didDismiss="setOpen(false)"
      ></ion-action-sheet>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { ref } from "vue";
import { IonActionSheet, IonItem, IonLabel } from "@ionic/vue";

export default {
  components: { IonActionSheet, IonItem, IonLabel },
  setup() {
    const isOpen = ref(false);
    const actionSheetButtons = ref<any[]>([]);

    const setOpen = (state: boolean) => {
      isOpen.value = state;
    };

    const openActionSheet = (type: string) => {
      if (type === "type") {
        actionSheetButtons.value = [
          {
            text: "Type 1",
            handler: () => {
              console.log("Type 1 selected");
            },
          },
          {
            text: "Type 2",
            handler: () => {
              console.log("Type 2 selected");
            },
          },
        ];
      } else if (type === "statutory") {
        actionSheetButtons.value = [
          {
            text: "Statutory 1",
            handler: () => {
              console.log("Statutory 1 selected");
            },
          },
          {
            text: "Statutory 2",
            handler: () => {
              console.log("Statutory 2 selected");
            },
          },
        ];
      }

      setOpen(true);
    };

    return {
      actionSheetButtons,
      isOpen,
      setOpen,
      openActionSheet,
    };
  },
};
</script>

<style scoped>
#container {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  height: 100%;
}

#container ion-label,
#container ion-text,
#container ion-button {
  margin-bottom: 10px;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
