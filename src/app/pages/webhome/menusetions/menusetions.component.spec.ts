import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenusetionsComponent } from './menusetions.component';

describe('MenusetionsComponent', () => {
  let component: MenusetionsComponent;
  let fixture: ComponentFixture<MenusetionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenusetionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenusetionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
