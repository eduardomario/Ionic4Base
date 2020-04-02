import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsumeAPIPage } from './consume-api.page';

describe('ConsumeAPIPage', () => {
  let component: ConsumeAPIPage;
  let fixture: ComponentFixture<ConsumeAPIPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumeAPIPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsumeAPIPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
