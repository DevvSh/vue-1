const app = Vue.createApp({
  data() {
    return {
      showMessage: true,
      showElse: true,
      title: 'Dev Chintanbhai Shah ', 
      Else: 'Show name ',
      items: ['SIT 120', 'Pass task', '2.1C', 'Student id - 222362772'],
      message: [
        { id: 1, name: 'Box', show: true },
        { id: 2, name: 'Cat', show: false },
        { id: 3, name: 'Ball', show: true }
      ],
      formData: {
        name: '',
        email: ''
      }
      
    }
  },
  methods: {
    toggleShowBooks(){
      this.showMessage = !this.showMessage
    }
  },
  submitForm() {
    console.log('Form submitted with data:', this.formData);
  }
}) 

app.mount('#app')
