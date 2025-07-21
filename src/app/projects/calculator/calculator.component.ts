import {CommonModule} from "@angular/common";
import {Component} from "@angular/core";

@Component({
	selector: "app-calculator",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./calculator.component.html",
	styleUrls: ["./calculator.component.scss"],
})
export class CalculatorComponent {
	currentNum: number = 0;
	displayNum: number = 0;
	currentOperator: string = "";
	decimal: boolean = false;
	displayText: string = "0";
	
	numberInput(number: number): void {
		let go = true;
		let count = 1;
		
		if(this.decimal) {
			while( go ) {
				if(this.displayNum % 1 !== 0) {
					this.displayNum *= 10;
					count++;
				} else {
					go = false;
				}
			}
			this.displayNum = this.displayNum * 10 + number;
			this.displayNum /= Math.pow(10, count);
		} else {
			this.displayNum = this.displayNum * 10 + number;
		}
		this.displayOutput();
	}
	
	operatorInput(operator: string): void {
		this.currentNum = this.displayNum;
		this.displayNum = 0;
		this.decimal = false;
		
		if(this.currentOperator === "") {
			this.currentOperator = operator;
		} else {
			this.sumInput();
		}
		this.displayOutput();
	}
	
	sumInput(): void {
		this.calculateInput();
		this.displayOutput();
	}
	
	signInput(): void {
		if(this.displayNum === 0) {
			this.currentNum = this.currentNum * -1;
		} else {
			this.displayNum = -this.displayNum;
		}
		this.displayOutput();
	}
	
	decimalInput(): void {
		this.decimal = true;
	}
	
	allClear(): void {
		this.currentNum = 0;
		this.displayNum = 0;
		this.decimal = false;
		this.currentOperator = "";
		this.displayOutput();
	}
	
	private calculateInput(): void {
		switch( this.currentOperator ) {
			case "+":
				this.displayNum = this.currentNum + this.displayNum;
				break;
			case "-":
				this.displayNum = this.currentNum - this.displayNum;
				break;
			case "*":
				this.displayNum = this.currentNum * this.displayNum;
				break;
			case "/":
				this.displayNum = this.currentNum / this.displayNum;
				break;
			case "%":
				this.displayNum = this.currentNum % this.displayNum;
				break;
		}
		this.currentNum = 0;
		this.currentOperator = "";
	}
	
	private displayOutput(): void {
		if(this.currentNum === 0) {
			this.displayText = this.displayNum.toString();
		} else if(this.displayNum === 0) {
			this.displayText = this.currentNum + " " + this.currentOperator;
		} else {
			this.displayText = this.currentNum + " " + this.currentOperator + " " + this.displayNum;
		}
	}
}