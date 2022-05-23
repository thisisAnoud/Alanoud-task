import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertficationsPanelComponent } from './certfications-panel.component';

describe('CertficationsPanelComponent', () => {
  let component: CertficationsPanelComponent;
  let fixture: ComponentFixture<CertficationsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertficationsPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertficationsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
