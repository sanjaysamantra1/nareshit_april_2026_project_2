import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitTestingDemo } from './unit-testing-demo';

describe('UnitTestingDemo', () => {
  let component: UnitTestingDemo;
  let fixture: ComponentFixture<UnitTestingDemo>;
  let currentTime: string;

  beforeAll(() => {
    // 1
    console.log('Before All...');
    currentTime = new Date().toLocaleTimeString();
    // 1 time initialization, instance creation
  });
  beforeEach(async () => {
    console.log('Before Each...');
    // if we want some logic to be excuted before Every it()
    await TestBed.configureTestingModule({
      imports: [UnitTestingDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(UnitTestingDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });
  afterEach(() => {
    console.log('After Each...');
    // if we want some logic to be excuted after Every it()
  });
  afterAll(() => {
    console.log('After All...');
    // if we want some logic to be excuted after all the it()
    // clear interval , clear subscriptions
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    console.log('It-1', currentTime);
  });

  it('Should verify add function', () => {
    expect(component.add(10, 20)).toBe(30);
    expect(component.add(-10, 20)).toBe(10);
    expect(component.add(-10, -20)).toBe(-30);
    expect(component.add(10, -20)).toBe(-10);
    console.log('It-2', currentTime);
  });

  it('Should verify isEven function', () => {
    expect(component.isEven(4)).toBe(true);
    expect(component.isEven(4)).not.toBe(false);
    expect(component.isEven(5)).toBe(false);
    expect(component.isEven(5)).not.toBe(true);
    console.log('It-3');
  });

  it('Should verify sumOfDigits function', () => {
    expect(component.sumOfDigits(125)).toBe(8);
    console.log('It-4');
  });

  it('Should verify addNewCar function', () => {
    expect(component.cars).toBeDefined();
    expect(component.cars).toBeInstanceOf(Array);
    expect(component.cars.length).toBe(3);
    expect(component.cars).toContain('Tata');
    expect(component.cars).not.toContain('Audi');
    expect(component.cars).toEqual(['Tata', 'Honda', 'Maruti']);

    component.addNewCar('Hyundai');
    expect(component.cars).toBeDefined();
    expect(component.cars).toBeInstanceOf(Array);
    expect(component.cars.length).toBe(4);
    expect(component.cars).toContain('Tata');
    expect(component.cars).toContain('Hyundai');
    expect(component.cars).not.toContain('Audi');
    expect(component.cars).toEqual(['Tata', 'Honda', 'Maruti', 'Hyundai']);
    console.log('It-5');
  });

  it('Should verify fetchData function', () => {
    const processDataSpy = vi.spyOn(component, 'processData'); // Spy For processData function
    const result = component.fetchData();
    expect(processDataSpy).toHaveBeenCalled(); // Verify processData was called
    expect(processDataSpy).toHaveBeenCalledWith(['item1', 'item2', 'item3']); // Verify correct arguments
    expect(result).toBe(3); // Verify the return value
  });
});
