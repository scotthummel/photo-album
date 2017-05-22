namespace node.Services {

    export class FileService {
        public FileResource;

        public saveFile(photo, file) {
            photo['url'] = file.url;

            return this.FileResource.save(photo);
        }

        public getPhotos() {
            return this.FileResource.query();
        }

        public removePhoto(id) {
            return this.FileResource.delete({id: id});
        }

        public getPhotoById(id) {
            return this.FileResource.get({id : id});
        }

        public constructor(
            public $resource
        ) {

           this.FileResource = $resource('/api/photos/:id');
        }
    }

    angular.module('node').service('fileService', FileService);

}
