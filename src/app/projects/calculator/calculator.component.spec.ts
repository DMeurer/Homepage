import {ComponentFixture, TestBed} from "@angular/core/testing";
import {CalculatorComponent} from "./calculator.component";

describe("CalculatorComponent", () => {
	let component: CalculatorComponent;
	let fixture: ComponentFixture<CalculatorComponent>;
	
	beforeEach(async() => {
		await TestBed.configureTestingModule({
			imports: [CalculatorComponent],
		}).compileComponents();
		
		fixture = TestBed.createComponent(CalculatorComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	
	it("should create", () => {
		expect(component).toBeTruthy();
	});
	
	it("should initialize with correct default values", () => {
		expect(component.currentNum).toBe(0);
		expect(component.displayNum).toBe(0);
		expect(component.currentOperator).toBe("");
		expect(component.decimal).toBe(false);
		expect(component.displayText).toBe("0");
	});
	
	it("should handle number input", () => {
		component.numberInput(5);
		expect(component.displayNum).toBe(5);
		expect(component.displayText).toBe("5");
	});
	
	it("should handle multiple number inputs", () => {
		component.numberInput(1);
		component.numberInput(2);
		component.numberInput(3);
		expect(component.displayNum).toBe(123);
		expect(component.displayText).toBe("123");
	});
	
	it("should handle operator input", () => {
		component.numberInput(5);
		component.operatorInput("+");
		expect(component.currentNum).toBe(5);
		expect(component.displayNum).toBe(0);
		expect(component.currentOperator).toBe("+");
	});
	
	it("should perform addition", () => {
		component.numberInput(5);
		component.operatorInput("+");
		component.numberInput(3);
		component.sumInput();
		expect(component.displayNum).toBe(8);
	});
	
	it("should perform subtraction", () => {
		component.numberInput(10);
		component.operatorInput("-");
		component.numberInput(3);
		component.sumInput();
		expect(component.displayNum).toBe(7);
	});
	
	it("should perform multiplication", () => {
		component.numberInput(4);
		component.operatorInput("*");
		component.numberInput(5);
		component.sumInput();
		expect(component.displayNum).toBe(20);
	});
	
	it("should perform division", () => {
		component.numberInput(15);
		component.operatorInput("/");
		component.numberInput(3);
		component.sumInput();
		expect(component.displayNum).toBe(5);
	});
	
	it("should clear all values", () => {
		component.numberInput(123);
		component.operatorInput("+");
		component.numberInput(456);
		component.allClear();
		expect(component.currentNum).toBe(0);
		expect(component.displayNum).toBe(0);
		expect(component.currentOperator).toBe("");
		expect(component.decimal).toBe(false);
		expect(component.displayText).toBe("0");
	});
	
	it("should handle sign change", () => {
		component.numberInput(5);
		component.signInput();
		expect(component.displayNum).toBe(-5);
	});
	
	it("should enable decimal mode", () => {
		component.decimalInput();
		expect(component.decimal).toBe(true);
	});
});