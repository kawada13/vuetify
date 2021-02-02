<template>
  <div>
    <v-app>
       <v-card>
      <v-card-title>STEP:0 フォーム</v-card-title>
      <v-card-text>
        <v-form ref="test_form">
          <v-text-field
            v-model="text1"
            label="入力必須で文字数制限のあるテキストフィールド"
            :rules="[required, limit_length]"
            counter="10"
          >
          </v-text-field>
          <v-text-field
            v-model="text2"
            label="入力必須のみあるテキストフィールド"
            :rules="[required]"
          >
          </v-text-field>
          <v-text-field
            v-model="text3"
            label="なんの制約もないテキストフィールド"
          >
          </v-text-field>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn text v-on:click="submit">送信する</v-btn>
        <span v-if="success">送信成功！</span>
      </v-card-actions>
    </v-card>
    </v-app>
  </div>
</template>

<script>
  export default {
    data: () => ({
      text1: "",
      text2: "",
      text3: "",
      success: false,
      required: val => !!val || '必ず入力してください',
      limit_length: val => val.length <= 10 || '10文字以下で入力してください'
    }),
    methods: {
      submit() {
        if(this.$refs.test_form.validate()) {
          this.success = true
        } else {
          this.success = false
        }
    }
    }
  }
</script>