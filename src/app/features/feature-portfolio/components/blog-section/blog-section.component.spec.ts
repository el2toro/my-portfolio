/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BlogSectionComponent } from './blog-section.component';

describe('BlogSectionComponent', () => {
  let component: BlogSectionComponent;
  let fixture: ComponentFixture<BlogSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
