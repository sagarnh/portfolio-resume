import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarTwoComponent } from './sidebar-two.component';

describe('SidebarTwoComponent', () => {
  let component: SidebarTwoComponent;
  let fixture: ComponentFixture<SidebarTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
