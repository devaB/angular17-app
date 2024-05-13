import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlFlowExampleComponent } from './control-flow-example.component';

describe('ControlFlowExampleComponent', () => {
  let component: ControlFlowExampleComponent;
  let fixture: ComponentFixture<ControlFlowExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlFlowExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ControlFlowExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
