import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubsShopsPanelComponent } from './clubs-shops-panel.component';

describe('ClubsShopsPanelComponent', () => {
  let component: ClubsShopsPanelComponent;
  let fixture: ComponentFixture<ClubsShopsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubsShopsPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubsShopsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
