var mainApp = new Vue({
    el: '#mainApp',
    data: {
      name: '',
      avatar: '',
      isAvatarSelected: false,
      color: '',
      title: '',
      description: '',
      idea: {
        title: '',
        description: ''
      },
      isActionable: true,
      canBeDoneTwoMin: true,
      sendActionable: '',
      sendNonActionable: '',
      titles: {
        title: '',
        description: ''
      },
      profile: {
        name: 'Anonymous',
        avatar: '(1)',
        color: '#BFA2DB'
      },
      doQuickList: [],
      doLaterList: [],
      waitingList: [],
      someDayList: [],
      referencesList: [],
      trashList: [],
      errorMessage: ''
    },
    methods: {
      addIdea: function () {
        if(this.validate('addIdeaModal')){
          let idea = {
            title: this.title,
            description: this.description
          }

          if (this.isActionable == true) {
            if (this.canBeDoneTwoMin == true){
              this.doQuickList.push(idea);
              this.updateLocalStorage('doQuickList');
            }
            else{
              if (this.sendActionable == 'toDo') {
                this.doLaterList.push(idea);
                this.updateLocalStorage('doLaterList');
              }
              else{
                this.waitingList.push(idea);
                this.updateLocalStorage('waitingList');
              } 
            }
          }
          else {
            switch (this.sendNonActionable) {
              case 'someDay':
                this.someDayList.push(idea);
                this.updateLocalStorage('someDayList');
                break;

              case 'references':
                this.referencesList.push(idea);
                this.updateLocalStorage('referencesList');
                break;

              case 'trash':
                this.trashList.push(idea);
                this.updateLocalStorage('trashList');
                break;
            
              default:
                break;
            }
          }
          
          this.closeModal('addIdeaModal');
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
        this.updateLocalStorage(arrayToUpdate);

      },
      deleteIdea: function (list, itemIndex) {
        switch (list) {
          case 'doQuickList':
            this.doQuickList.splice(itemIndex, 1);
            this.updateLocalStorage('doQuickList');
            break;
          case 'doLaterList':
            this.doLaterList.splice(itemIndex, 1);
            this.updateLocalStorage('doLaterList');
            break;
          case 'waitingList':
            this.waitingList.splice(itemIndex, 1);
            this.updateLocalStorage('waitingList');
            break;
          case 'someDayList':
            this.someDayList.splice(itemIndex, 1);
            this.updateLocalStorage('someDayList');
            break;
          case 'referencesList':
            this.referencesList.splice(itemIndex, 1);
            this.updateLocalStorage('referencesList');
            break;
          case 'trashList':
            this.trashList.splice(itemIndex, 1);
            this.updateLocalStorage('trashList');
            break;
        
          default:
            break;
        }
      },
      openModal: function (modalName, list, itemIndex) {
        let targetModal = document.getElementById(modalName);

        if (modalName == 'gtdInfoModal') {
          switch (list) {
            case 'doQuickList':
              this.titles = {
                title: 'About doing things quickly',
                description: 'If you can do something in about two minutes or less (as an approx.) simply just do it. And free your mind of those ideas.',
              };
              break;
            case 'doLaterList':
              this.titles = {
                title: 'About deferring tasks',
                description: 'If you know you have to do something but you can\'t do it at the time, you can schedule that idea for later.',
              };
              break;
            case 'waitingList':
              this.titles = {
                title: 'About delegating tasks',
                description: 'If you want to finish a task but you can\'t continue doing it because you have to wait for someone else to do something, then you have to delegate the task.',
              };
              break;
            case 'someDayList':
              this.titles = {
                title: 'About incubating ideas',
                description: 'Here belongs non actionable ideas that may become actions or tasks some day, but you don\'t know when.',
              };
              break;
            case 'referencesList':
              this.titles = {
                title: 'About saving ideas as references',
                description: 'Ideas that are not actionable but can be valuable and useful for future tasks or projects.',
              };
              break;
            case 'trashList':
              this.titles = {
                title: 'About trash ideas',
                description: 'Worthless ideas that come to your mind, free it of those!!',
              };
              break;
          
            default:
              break;
          }
        }
        else if (modalName == 'updateProfileInfoModal'){
          this.restartValues();
        }
        else if (modalName == 'aboutIdeaModal'){
          switch (list) {
            case 'doQuickList':
              this.idea = {
                title: this.doQuickList[itemIndex].title,
                description: this.doQuickList[itemIndex].description,
              };
              break;
            case 'doLaterList':
              this.idea = {
                title: this.doLaterList[itemIndex].title,
                description: this.doLaterList[itemIndex].description,
              };
              break;
            case 'waitingList':
              this.idea = {
                title: this.waitingList[itemIndex].title,
                description: this.waitingList[itemIndex].description,
              };
              break;
            case 'someDayList':
              this.idea = {
                title: this.someDayList[itemIndex].title,
                description: this.someDayList[itemIndex].description,
              };
              break;
            case 'referencesList':
              this.idea = {
                title: this.referencesList[itemIndex].title,
                description: this.referencesList[itemIndex].description,
              };
              break;
            case 'trashList':
              this.idea = {
                title: this.trashList[itemIndex].title,
                description: this.trashList[itemIndex].description,
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
        this.errorMessage = '';
        this.restartValues();
      },
      setAvatar: function (index){
        this.avatar= '(' + index +')'
      },
      updateProfile: function () {
        if (this.validate('updateProfileInfoModal')){
          this.profile = {
            name: this.name,
            avatar: this.avatar,
            color: this.color
          };
          this.changePrimaryColor();
          this.updateLocalStorage('profile');
          this.closeModal('updateProfileInfoModal');
        }
      },
      getLocalStorage: function () {
        let doQuick = JSON.parse(localStorage.getItem('doQuickList'));
        let doLater = JSON.parse(localStorage.getItem('doLaterList'));
        let waiting = JSON.parse(localStorage.getItem('waitingList'));
        let someDay = JSON.parse(localStorage.getItem('someDayList'));
        let references = JSON.parse(localStorage.getItem('referencesList'));
        let trash = JSON.parse(localStorage.getItem('trashList'));
        let profile = JSON.parse(localStorage.getItem('profile'));

        doQuick == null ? this.doQuickList = [] : this.doQuickList = doQuick;
        doLater == null ? this.doLaterList = [] : this.doLaterList = doLater;
        waiting == null ? this.waitingList = [] : this.waitingList = waiting;
        someDay == null ? this.someDayList = [] : this.someDayList = someDay;
        references == null ? this.referencesList = [] : this.referencesList = references;
        trash == null ? this.trashList = [] : this.trashList = trash;

        if (profile == null){
          this.createProfile();
        }
        else{
          this.profile = profile;
          this.changePrimaryColor();
        }
      },
      updateLocalStorage: function (arrayToUpdate){
        switch (arrayToUpdate) {
          case 'profile':
            localStorage.setItem(arrayToUpdate, JSON.stringify(this.profile));
            break;

          case 'doQuickList':
            localStorage.setItem(arrayToUpdate, JSON.stringify(this.doQuickList));
            break;

          case 'doLaterList':
            localStorage.setItem(arrayToUpdate, JSON.stringify(this.doLaterList));
            break;

          case 'waitingList':
            localStorage.setItem(arrayToUpdate, JSON.stringify(this.waitingList));
            break;

          case 'someDayList':
            localStorage.setItem(arrayToUpdate, JSON.stringify(this.someDayList));
            break;

          case 'referencesList':
            localStorage.setItem(arrayToUpdate, JSON.stringify(this.referencesList));
            break;

          case 'trashList':
            localStorage.setItem(arrayToUpdate, JSON.stringify(this.trashList));
            break;
        
          default:
            break;
        }
      },
      createProfile: function () {
        this.updateLocalStorage('profile');
      },
      changePrimaryColor: function () {
        document.documentElement.style.setProperty('--primary-color', this.profile.color);
      },
      validate: function (modalToValidate) {
        if (modalToValidate === 'addIdeaModal'){
          if (this.title === null || this.title === ''){
            this.errorMessage = 'Title is mandatory.';
            return false;
          }
          else {
            this.errorMessage = '';
            return true;
          }
        }
        else if (modalToValidate === 'updateProfileInfoModal'){
          if (this.name == null || this.name == '') {
            this.errorMessage = 'Name is mandatory.';
            this.restartValues();
            return false;
          }
          else {
            this.errorMessage = '';
            return true;
          }
        }
      },
      restartValues: function () {
        this.name = this.profile.name;
        this.avatar = this.profile.avatar;
        this.color = this.profile.color;
      }
    },
    created: function () {
      this.getLocalStorage();
    },
  })