import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformExampleComponent } from './transform-example.component';

describe('TransformExampleComponent', () => {
  let component: TransformExampleComponent;
  let fixture: ComponentFixture<TransformExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransformExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransformExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
