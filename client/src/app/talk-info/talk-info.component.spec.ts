import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkInfoComponent } from './talk-info.component';

describe('TalkInfoComponent', () => {
  let component: TalkInfoComponent;
  let fixture: ComponentFixture<TalkInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalkInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalkInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
