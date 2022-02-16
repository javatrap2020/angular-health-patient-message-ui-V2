import {DisplayBoardComponent} from "./display-board.component";
import {async, ComponentFixture, TestBed} from "@angular/core/testing";

describe('DisplayBoardComponent', () => {
  let component: DisplayBoardComponent;
  let fixture: ComponentFixture<DisplayBoardComponent>;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
      declarations: [DisplayBoardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should crate', () => {
    expect(component).toBeTruthy();
  })
})
