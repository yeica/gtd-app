var mainApp = new Vue({
    el: '#mainApp',
    data: {
      title: '',
      description: '',
      isActionable: true,
      canBeDoneTwoMin: true,
      sendActionable: '',
      sendNonActionable: '',
      profile: {
        name: '',
        avatar: '',
        color: ''
      },
      doQuickList: 
      [
        {
          title: 'Hornear Pan',
          description: 'Con mi novio'
        },
        {
          title: 'Hacer la tarea',
          description: 'Con mi novio'
        },
        {
          title: 'Comer yaroa',
          description: 'Con mi novio'
        }
      ],
      doLaterList: [],
      waitingList: [],
      someDayList: [],
      referencesList: [],
      trashList: [],
    },
    methods: {
      addIdea: function () {

        let idea = {
          title: this.title,
          description: this.description
        }

        if (this.isActionable == true) {
          if (this.canBeDoneTwoMin == true){
            this.doQuickList.push(idea);
          }
          else{
            this.sendActionable == 'toDo' ? this.doLaterList.push(idea) : this.waitingList.push(idea);
          }
        }
        else {
          switch (this.sendNonActionable) {
            case 'someDay':
              this.someDayList.push(idea);
              break;

            case 'references':
              this.referencesList.push(idea);
              break;

            case 'trash':
              this.trashList.push(idea);
              break;
          
            default:
              break;
          }
        }
        this.closeModal('addIdeaModal');
      },
      moveIdea: function (whereToMove, arrayToUpdate, actualIndex, idea) {
        switch (arrayToUpdate) {
          case 'doQuickList':
            if (whereToMove == 'up'){
              this.doQuickList.splice(actualIndex, 1);
              this.doQuickList.splice(actualIndex - 1, 0, idea);
            }
            else {
              this.doQuickList.splice(actualIndex, 1);
              this.doQuickList.splice(actualIndex + 1, 0, idea);
            }
            break;

          case 'doLaterList':
            if (whereToMove == 'up'){
              this.doLaterList.splice(actualIndex, 1);
              this.doLaterList.splice(actualIndex - 1, 0, idea);
            }
            else {
              this.doLaterList.splice(actualIndex, 1);
              this.doLaterList.splice(actualIndex + 1, 0, idea);
            }
            break;

          case 'waitingList':
            if (whereToMove == 'up'){
              this.waitingList.splice(actualIndex, 1);
              this.waitingList.splice(actualIndex - 1, 0, idea);
            }
            else {
              this.waitingList.splice(actualIndex, 1);
              this.waitingList.splice(actualIndex + 1, 0, idea);
            }
            break;

          case 'someDayList':
            if (whereToMove == 'up'){
              this.someDayList.splice(actualIndex, 1);
              this.someDayList.splice(actualIndex - 1, 0, idea);
            }
            else {
              this.someDayList.splice(actualIndex, 1);
              this.someDayList.splice(actualIndex + 1, 0, idea);
            }
            break;

          case 'referencesList':
            if (whereToMove == 'up'){
              this.referencesList.splice(actualIndex, 1);
              this.referencesList.splice(actualIndex - 1, 0, idea);
            }
            else {
              this.referencesList.splice(actualIndex, 1);
              this.referencesList.splice(actualIndex + 1, 0, idea);
            }
            break;

          case 'trashList':
            if (whereToMove == 'up'){
              this.trashList.splice(actualIndex, 1);
              this.trashList.splice(actualIndex - 1, 0, idea);
            }
            else {
              this.trashList.splice(actualIndex, 1);
              this.trashList.splice(actualIndex + 1, 0, idea);
            }
            break;
        
          default:
            break;
        }

      },
      openModal: function (modalName) {
        console.log('hete')
        let targetModal = document.getElementById(modalName);
        targetModal.style.display = "block";
  
      },
      closeModal: function (modalName) {
        let targetModal = document.getElementById(modalName);
        targetModal.style.display = "none";
      },
      setAvatar: function (index){
        this.profile.avatar= 'assets/avatars/' + index + '.svg';
        console.log(this.profile.avatar);
      },
      updateProfile: function () {
        console.log(this.profile);
      }
    }
  })