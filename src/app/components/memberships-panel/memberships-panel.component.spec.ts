import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipsPanelComponent } from './memberships-panel.component';

describe('MembershipsPanelComponent', () => {
  let component: MembershipsPanelComponent;
  let fixture: ComponentFixture<MembershipsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembershipsPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembershipsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
