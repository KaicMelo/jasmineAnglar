import { element } from 'protractor';
import { PhotoFrameModule } from './photo-frame.module';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { PhotoFrameComponent } from './photo-frame.component';

describe(`${PhotoFrameComponent.name}`, () => {
  let fixture: ComponentFixture<PhotoFrameComponent> = null;
  let component: PhotoFrameComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoFrameModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoFrameComponent);
    component = fixture.componentInstance;
  });

  it(`should be create when called`, () => {
    expect(component).toBeTruthy();
  });

  it(`${PhotoFrameComponent.prototype.like.name} should trigger (@output liked) once when called multiple times within debounce time`, fakeAsync(() => {
    fixture.detectChanges();
    let like = 0;
    component.liked.subscribe(() => like++);

    component.like();
    component.like();

    tick(500);

    expect(like).toBe(1);
  }));

  it(`${PhotoFrameComponent.prototype.like.name} should trigger (@output liked) two times when called outside times`, fakeAsync(() => {
    fixture.detectChanges();
    let like = 0;

    component.liked.subscribe(() => like++);

    component.like();
    tick(500);

    component.like();
    tick(500);

    expect(like).toBe(2);
  }));

  it(`(D) Should display number of likes when (@Input likes) is increment`, () => {
    fixture.detectChanges();
    component.likes++;
    fixture.detectChanges();

    const element: HTMLElement =
      fixture.nativeElement.querySelector('.like-counter');
    expect(element.textContent.trim()).toBe('1');
  });

  it(`(D) Should update aria-label when (@Input likes) is incremented`, () => {
    fixture.detectChanges();
    component.likes++;
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement.querySelector('span');
    expect(element.getAttribute('aria-label')).toBe('1: people liked');
  });

  it(`(D) Should have aria-label with 0 default (@Input likes)`, () => {
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement.querySelector('span');
    expect(element.getAttribute('aria-label')).toBe('0: people liked');
  });

  it(`(D) Should display image with src and description when bound to properties`, () => {
    const description = 'some text';
    const src =
      'https://static.buson.com.br/public-3693/_v2/static/img/logo-buson.svg';

    component.src = src;
    component.description = description;

    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement.querySelector('img');
    expect(element.getAttribute('src')).toBe(src);
    expect(element.getAttribute('alt')).toBe(description);
  });

  it(`(D) Should display number of likes when ENTER key is pressed`, (done) => {
    fixture.detectChanges();

    component.liked.subscribe(() => {
      component.likes++;
      fixture.detectChanges();

      const element: HTMLElement =
        fixture.nativeElement.querySelector('.like-counter');
      expect(element.textContent.trim()).toBe('1');
      done();
    });

    const likeWidgetContainerEl: HTMLElement =
      fixture.nativeElement.querySelector('.like-widget-container');
    const event = new KeyboardEvent('keyup', { key: 'Enter' });

    likeWidgetContainerEl.dispatchEvent(event);

  });
});
