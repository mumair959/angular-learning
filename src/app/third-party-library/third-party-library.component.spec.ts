import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdPartyLibraryComponent } from './third-party-library.component';

describe('ThirdPartyLibraryComponent', () => {
  let component: ThirdPartyLibraryComponent;
  let fixture: ComponentFixture<ThirdPartyLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdPartyLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdPartyLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
