<template>
  <div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <div>
      <form form>
        <label for="company_name">COMPANY NAME</label>
        <input
          class="input-item"
          type="text"
          name="company name"
          id="company_name"
          placeholder="e.g. Your Company Name"
          v-model="name"
        />
        <label for="company_spend">COMPANY SPEND</label>
        <input
          class="input-item"
          type="text"
          name="company spend"
          id="company_spend"
          placeholder="e.g. $150.000"
          v-model="spend"
        />

        <label for="company_spend_ability">COMPANY SPEND ABILITY</label>
        <input
          class="input-item"
          type="text"
          name="company spend ability"
          id="company_spend_ability"
          placeholder="e.g. $150.000 - $330.000"
          v-model="spendAbility"
        />
        <label for="notes">NOTES</label>
        <textarea
          @focus="getFormData()"
          @click="getFormData()"
          class="input-item-area"
          name="notes"
          id="notes"
          cols="30"
          placeholder="Good Tech Company"
          rows="10"
          v-model="notes"
        ></textarea>
        <app-modal-notes v-show="isModal" :formData="formData" v-on:notes="notesBack"></app-modal-notes>
      </form>
    </div>
  </div>
</template>

<script>
import AppModalNotes from "./ModalNotes";
export default {
  name: "CompanyData",
  data() {
    return {
      formData: {},
      name: "",
      spend: "",
      spendAbility: "",
      notes: "",
      isModal: false
    };
  },
  methods: {
    getFormData() {
      this.formData.name = this.name;
      this.formData.spend = this.spend;
      this.formData.spendAbility = this.spendAbility;
      this.openModal();
    },
    openModal() {
      this.isModal = !this.isModal;
    },
    notesBack(value) {
      this.notes = value;
      this.openModal();
      this.alertSuccess();
    },
    alertSuccess() {
      alert(`company name from store: ${this.getCompanyData.name}`);
    }
  },
  computed: {
    getCompanyData() {
      return this.$store.getters["companyData/getCompanyData"];
    }
  },
  components: {
    AppModalNotes
  }
};
</script>

<style scoped>
[form] {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.input-item {
  min-width: 350px;
  margin-bottom: 30px;
}

.input-item-area {
  width: 100%;
}

.input-item,
.input-item-area {
  border-radius: 5px;
  border: 1px solid #d5dae4;
  padding: 10px;
}

label {
  margin-bottom: 5px;
  font-size: 0.9em;
}

p {
  padding-bottom: 30px;
  text-align: left;
  font-size: 0.9em;
  line-height: 1.5em;
}
</style>