// import { HttpClientModule } from '@angular/common/http';
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { PhotoListModule } from './photo-list.module';
// import { PhotoListComponent } from './photo-list.component';
// import { PhotoBoardService } from 'src/app/shared/components/photo-board/services/photo-board.service';
// import { buildPhotoList } from 'src/app/shared/components/photo-board/test/build-photos';
// import { of } from 'rxjs';

// describe(PhotoListComponent.name, () => {
//   let fixture: ComponentFixture<PhotoListComponent>;
//   let component: PhotoListComponent;
//   let service: PhotoBoardService;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [PhotoListModule, HttpClientModule],
//     }).compileComponents();

//     fixture = TestBed.createComponent(PhotoListComponent);
//     component = fixture.componentInstance;
//     service = TestBed.inject(PhotoBoardService);
//   });

//   it('should create component', () => {
//     expect(component).toBeTruthy();
//   });

//   it('(D) Should display board when data arrives', async () => {
//     fixture.detectChanges();
//     const photos = buildPhotoList();
//     spyOn(service, 'getPhotos').and.returnValue(of(photos));

//     fixture.detectChanges();
//     const board: HTMLElement =
//       fixture.nativeElement.querySelector('app-photo-board');
//     const loader: HTMLElement = fixture.nativeElement.querySelector('.loader');

//     expect(loader).not.toBeNull();
//     expect(board).toBeNull();
//   });
// });
