var mainApp = new Vue({
    el: '#mainApp',
    data: {
      title: '',
      description: '',
      isActionable: true,
      canBeDoneTwoMin: true,
      sendActionable: '',
      sendNonActionable: '',
      titles: {
        title: '',
        description: ''
      },
      profile: {
        name: '',
        avatar: '',
        color: "#ffffff"
      },
      doQuickList: [
        /*{
          title: 'Comer mucho pan',
          description: 'porque tengo hambre'
        },
        {
          title: 'Comer mucha yaroa',
          description: 'porque tengo hambre'
        },
        {
          title: 'Comer mucha berenjena',
          description: 'porque tengo hambre'
        }*/
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
            localStorage.setItem('doQuickList', JSON.stringify(this.doQuickList));
          }
          else{
            if (this.sendActionable == 'toDo') {
              this.doLaterList.push(idea);
              localStorage.setItem('doLaterList', JSON.stringify(this.doLaterList));
            }
            else{
              this.waitingList.push(idea);
              localStorage.setItem('waitingList', JSON.stringify(this.waitingList));
            } 
          }
        }
        else {
          switch (this.sendNonActionable) {
            case 'someDay':
              this.someDayList.push(idea);
              localStorage.setItem('someDayList', JSON.stringify(this.someDayList));
              break;

            case 'references':
              this.referencesList.push(idea);
              localStorage.setItem('referencesList', JSON.stringify(this.referencesList));
              break;

            case 'trash':
              this.trashList.push(idea);
              localStorage.setItem('trashList', JSON.stringify(this.trashList));
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
      openModal: function (modalName, list) {
        let targetModal = document.getElementById(modalName);

        if (modalName == 'gtdInfoModal') {
          switch (list) {
            case 'doQuickList':
              this.titles = {
                title: 'About doing things quickly',
                description: 'something',
              };
              break;
            case 'doLaterList':
              this.titles = {
                title: 'About deferring tasks',
                description: 'something',
              };
              break;
            case 'waitingList':
              this.titles = {
                title: 'About delegating tasks',
                description: 'something',
              };
              break;
            case 'someDayList':
              this.titles = {
                title: 'About incubating ideas',
                description: 'something',
              };
              break;
            case 'referencesList':
              this.titles = {
                title: 'About saving ideas as references',
                description: 'something',
              };
              break;
            case 'trashList':
              this.titles = {
                title: 'About trash ideas',
                description: 'something',
              };
              break;
          
            default:
              break;
          }
        }
        
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
        localStorage.setItem('profile', JSON.stringify(this.profile));
        this.closeModal('updateProfileInfoModal');
      },
      updateLocalStorage: function (){
        //localStorage.setItem('gtdData', JSON.stringify(this.localStorageData));
        console.log(this.localStorageData)
      },
      getLocalStorage: function () {
        let doQuick = JSON.parse(localStorage.getItem('doQuickList'));
        let doLater = JSON.parse(localStorage.getItem('doLaterList'));
        let waiting = JSON.parse(localStorage.getItem('waitingList'));
        let someDay = JSON.parse(localStorage.getItem('someDayList'));
        let references = JSON.parse(localStorage.getItem('referencesList'));
        let trash = JSON.parse(localStorage.getItem('trashList'));

        
        doQuick == null ? this.doQuickList = [] : this.doQuickList = doQuick;
        doLater == null ? this.doLaterList = [] : this.doLaterList = doLater;
        waiting == null ? this.waitingList = [] : this.waitingList = waiting;
        someDay == null ? this.someDayList = [] : this.someDayList = someDay;
        references == null ? this.referencesList = [] : this.referencesList = references;
        trash == null ? this.trashList = [] : this.trashList = trash;
      }
    },
    created: function () {
      this.getLocalStorage();
    },
  })