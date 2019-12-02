export class GlobalService {

    widthInput = 10;
    heightInput = 10;

    solid = false;

    templateNumber = 2;

    selectedImage: string;

    getExportWidth() {

        return <number>this.widthInput * 37.79527559055118;
    }

    getExportHeight() {

        return <number>this.heightInput * 37.79527559055118;
    }

    setWidthInput(input: number) {

        this.widthInput = input;
    }


    setHeightInput(input: number) {

        this.heightInput = input;
    }

    setTemplateNumber(number: number) {

        this.templateNumber = number;
    }

    getTemplateNumber() {

        return this.templateNumber;
    }

    setStyle(solid: boolean) {

        this.solid = solid;
    }

    getStyle() {

        return this.solid;
    }

    setSelectedImage(image: string) {

        this.selectedImage = image;
    }

    getSelectedImage() {

        return this.selectedImage;
    }
}