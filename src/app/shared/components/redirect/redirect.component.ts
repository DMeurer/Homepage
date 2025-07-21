import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-redirect',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss']
})
export class RedirectComponent implements OnInit, OnDestroy {
  @Input() redirectUrl: string = '';
  @Input() projectName: string = 'Project';
  @Input() redirectDelay: number = 3000; // 3 seconds default
  
  countdown: number = 0;
  private intervalId?: number;
  private timeoutId?: number;
  private destroyed = false;

  ngOnInit(): void {
    if (!this.redirectUrl) {
      console.error('RedirectComponent: redirectUrl is required');
      return;
    }

    this.countdown = Math.ceil(this.redirectDelay / 1000);
    this.startCountdown();
    this.scheduleRedirect();
  }

  ngOnDestroy(): void {
    this.destroyed = true;
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  private startCountdown(): void {
    this.intervalId = window.setInterval(() => {
      if (this.destroyed) {
        clearInterval(this.intervalId);
        return;
      }
      this.countdown--;
      if (this.countdown <= 0) {
        clearInterval(this.intervalId);
      }
    }, 1000);
  }

  private scheduleRedirect(): void {
    this.timeoutId = window.setTimeout(() => {
      if (!this.destroyed) {
        this.redirectNow();
      }
    }, this.redirectDelay);
  }

  redirectNow(): void {
    if (this.redirectUrl && !this.destroyed) {
      window.location.href = this.redirectUrl;
    }
  }
}