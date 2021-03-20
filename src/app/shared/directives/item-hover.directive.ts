import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appItemHover]',
})
export class ItemHoverDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter')
  setBackground(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background', '#E0F7FA');
  }

  @HostListener('mouseleave')
  removeBackground(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background', 'none');
  }
}
