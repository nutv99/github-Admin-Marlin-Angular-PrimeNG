import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Item228Component } from './item228.component';

describe('Item228Component', () => {
  let component: Item228Component;
  let fixture: ComponentFixture<Item228Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Item228Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Item228Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
