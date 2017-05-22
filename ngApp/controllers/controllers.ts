namespace node.Controllers {

    export class HomeController {
        public photos;

        public deletePhoto(id) {
            this.fileService.removePhoto(id);
        }

        public constructor(private fileService: Services.FileService, private $scope: ng.IScope) {
            this.photos = this.fileService.getPhotos();
        }
    }


    export class AddController {
       public file;
       public photo;

       public upload() {
           this.filepickerService.pick(
               { mimetype: 'image/*' },
               this.fileUploaded.bind(this)
           );
       }

       public fileUploaded(file) {
           // save file url to database
           this.file = file;
           this.$scope.$apply(); // force page to update
       }

       public save(file) {
           this.fileService.saveFile(this.photo, file);
           this.$state.go('home')
           this.$scope.$apply();
       }

       constructor(private filepickerService, private $scope: ng.IScope, private fileService: Services.FileService, private $state) {

       }
    }

    export class EditController {
        public photo;
        public file;
        public id;

        public upload() {
            this.filepickerService.pick(
                { mimetype: 'image/*' },
                this.fileUploaded.bind(this)
            );
        }

        public fileUploaded(file) {
            // save file url to database
            this.file = file;
            this.$scope.$apply(); // force page to update
        }

        public save(file) {
            this.photo.id = this.id;
            this.fileService.saveFile(this.photo, file);
            this.$state.go('home')
            this.$scope.$apply();
        }

        public constructor(private filepickerService, private $scope: ng.IScope, private fileService: Services.FileService, private $state, private $stateParams) {
            this.photo = this.fileService.getPhotoById($stateParams['id']);
            this.id = $stateParams['id'];
        }

    }
 }
