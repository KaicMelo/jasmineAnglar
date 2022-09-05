import { buildPhotoList } from 'src/app/shared/components/photo-board/test/build-photos';
import { PhotoBoardService } from 'src/app/shared/components/photo-board/services/photo-board.service';
import { Photo } from './../interfaces/photo';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class PhotoBoardMockService extends PhotoBoardService {
  public getPhotos(): Observable<Photo[]> {
    return of(buildPhotoList());
  }
}
