import { async, ComponentFixture, ComponentFixtureAutoDetect, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';



describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[NoopAnimationsModule, ReactiveFormsModule, FormsModule],
      providers:[{provide: ComponentFixtureAutoDetect, useValue: true
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Test-01 Click_login', fakeAsync( ()=> {
    spyOn(component, 'onLogin');
    let capt = fixture.debugElement.nativeElement.querySelector('button');
    capt.click();
    tick();
    expect(component.onLogin).toHaveBeenCalled();
  }));

  it('Test-02 login', ()=> {
    component.user.nombre = 'admin';
    component.user.password = 'admin';
    component.onLogin();
    expect(component.mensaje).toEqual("Correcto");
  });
});
