var mainApp = new Vue({
    el: '#mainApp',
    data: {
      ideasList: [
        {
          title: 'Hornear Pan',
          description: 'Con mi novio',
          belongsTo: 'd'
        },
        {
          title: 'Hacer la tarea',
          description: 'Con mi novio',
          belongsTo: ''
        },
        {
          title: 'Comer yaroa',
          description: 'Con mi novio',
          belongsTo: ''
        }
      ],
      doQuickList: [],
      doLaterList: [],
      waitingList: [],
      someDayList: [],
      referencesList: [],
      trashList: [],
      title: '',
      description: '',
      isActionable: true,
      canBeDoneTwoMin: true,
      sendActionable: '',
      sendNonActionable: '',
      belongsTo: '',
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
      }
    }
  })