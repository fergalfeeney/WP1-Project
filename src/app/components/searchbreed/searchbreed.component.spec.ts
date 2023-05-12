import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbreedComponent } from './searchbreed.component';

describe('SearchbreedComponent', () => {
  let component: SearchbreedComponent;
  let fixture: ComponentFixture<SearchbreedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchbreedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchbreedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
