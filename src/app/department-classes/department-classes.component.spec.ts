import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentClassesComponent } from './department-classes.component';

describe('DepartmentClassesComponent', () => {
  let component: DepartmentClassesComponent;
  let fixture: ComponentFixture<DepartmentClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentClassesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
