import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Highlight } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-code-block',
  standalone: true,
  imports: [CommonModule, Highlight, HighlightLineNumbers, NgIcon],
  templateUrl: './code-block.component.html',
  styleUrls: ['./code-block.component.scss']
})
export class CodeBlockComponent {
  @Input() code: string = '';
  @Input() language: string = 'text';
  @Input() fileName?: string;
  @Input() showLineNumbers: boolean = true;
  
  wrapLines: boolean = false;

  toggleWrap(): void {
    this.wrapLines = !this.wrapLines;
  }

  copyCode(): void {
    if (this.code) {
      navigator.clipboard.writeText(this.code).then(() => {
        // Could add a toast notification here in the future
      }).catch(err => {
        console.error('Failed to copy code: ', err);
      });
    }
  }
}