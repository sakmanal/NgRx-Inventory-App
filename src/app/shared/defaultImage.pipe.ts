import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {
  transform(imageUrl: string, forceHttps: boolean = false): string {
    let image = '';
    if (imageUrl) {
      image = imageUrl;
    } else {
      image = 'https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png';
    }

    if (forceHttps) {
      if (image.indexOf('https') === -1) {
        image = image.replace('http', 'https');
      }
    }

    return image;
  }
}
