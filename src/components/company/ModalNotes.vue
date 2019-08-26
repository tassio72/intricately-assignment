<template>
  <div class="modal">
    <div class="content-modal">
      <label for="notes">ADDITIONAL NOTES</label>
      <textarea
        class="input-item-area"
        name="notes"
        id="notes"
        cols="30"
        placeholder="e.g. Good Tech Company"
        rows="10"
        v-model="notes"
      ></textarea>
      <div class="btn-content">
        <div class="btn" @click="submit()">SAVE</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    formData: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      data: null,
      notes: ""
    };
  },
  methods: {
    submit() {
      this.companydata();
      this.$emit("notes", this.notes);
    },
    companydata() {
      this.data.notes = this.notes;
      this.$store.dispatch("companyData/saveCompanyData", this.data);
    }
  },
  created() {
    this.data = this.formData;
  }
};
</script>

<style scoped>
.modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 270%;
  background: rgba(0, 0, 0, 0.5);
}

.content-modal {
  padding: 40px 30px;
  top: 25%;
  left: 42%;
  position: relative;
  width: 550px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

label {
  margin-bottom: 5px;
  font-size: 0.9em;
}

.input-item-area {
  width: 100%;
  border-radius: 5px;
  border: 1px solid #d5dae4;
  padding: 10px;
}

.btn-content {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}
.btn {
  background: #5d699a;
  color: white;
  font-size: 0.7em;
  padding: 10px 20px;
  border-radius: 4px;
  margin-top: 20px;
  cursor: pointer;
}
</style>