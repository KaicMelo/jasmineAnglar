import { ActionDiretiveModule } from './actions.module';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ActionDiretive } from './actions.directive';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

describe(ActionDiretive.name, () => {
  let fixture: ComponentFixture<ActionDiretiveTestComponent>;
  let component: ActionDiretiveTestComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActionDiretiveTestComponent],
      imports: [ActionDiretiveModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ActionDiretiveTestComponent);
    component = fixture.componentInstance;
  });

  it(`(D) (@Output appAction) should emit event with payload when ENTER is pressed`, () => {
    // const divEl: HTMLElement =
    //   fixture.nativeElement.querySelector('.dummy-component');
    const divEl: HTMLElement =
      fixture.debugElement.query(By.directive(ActionDiretive)).nativeElement;

    const event = new KeyboardEvent('keyup', { key: 'Enter' });

    divEl.dispatchEvent(event);
    expect(component.hasEvent()).toBe(true);
  });

  it(`(D) (@Output appAction) should emit event with payload when clicked`, () => {
    const divEl: HTMLElement =
      fixture.nativeElement.querySelector('.dummy-component');
    const event = new KeyboardEvent('click');

    divEl.dispatchEvent(event);
    expect(component.hasEvent()).toBe(true);
  });
});

@Component({
  template: `<div
    class="dummy-component"
    (appAction)="actionHandler($event)"
  ></div>`,
})
export class ActionDiretiveTestComponent {
  private event: Event = null;

  public actionHandler(event: Event) {
    this.event = event;
  }

  public hasEvent(): boolean {
    return !!this.event;
  }
}
