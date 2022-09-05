import { PhotoBoardMockService } from './../../shared/components/photo-board/services/photo-board-mock.service';
import { Photo } from './../../shared/components/photo-board/interfaces/photo';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoListModule } from './photo-list.module';
import { PhotoListComponent } from './photo-list.component';
import { PhotoBoardService } from 'src/app/shared/components/photo-board/services/photo-board.service';
import { buildPhotoList } from 'src/app/shared/components/photo-board/test/build-photos';
import { of, Observable } from 'rxjs';

describe(PhotoListComponent.name + ' Mock Provider', () => {
  let fixture: ComponentFixture<PhotoListComponent>;
  let component: PhotoListComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoListModule, HttpClientModule],
      providers: [
        {
          provide: PhotoBoardService,
          useClass:PhotoBoardMockService
        //   useValue: {
        //     getPhotos(): Observable<Photo[]> {
        //       return of(buildPhotoList());
        //     },
        //   },
        //   userC
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('(D) Should display board when data arrives', async () => {
    fixture.detectChanges();

    const board: HTMLElement =
      fixture.nativeElement.querySelector('app-photo-board');
    const loader: HTMLElement = fixture.nativeElement.querySelector('.loader');

    expect(board).withContext('Should display board').not.toBeNull();
    expect(loader).withContext('Should not display loader').toBeNull();
  });
});
