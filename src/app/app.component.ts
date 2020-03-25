import { Component, ViewChild, ElementRef, AfterViewInit, HostListener, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import * as Tone from 'tone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  // synth: any;

  linePt1: SVGPoint;
  linePt2: SVGPoint;
  @ViewChild('circle1', { read: ElementRef })
  circle1: ElementRef;
  @ViewChild('circle2', { read: ElementRef })
  circle2: ElementRef;
  @ViewChild('svg', { read: ElementRef })
  svg: ElementRef;

  // @HostListener( 'document:click', [ '$event' ] )
  // onTest(event: MouseEvent) {
  //   console.log('event: ', event);
  // }

  constructor() {
    // synth.triggerAttackRelease('C4', '8n');
    // this.synth = new Tone.PolySynth(1, Tone.Synth).toMaster();
  }

  // chorus() {
  //   var chorus = new Tone.Chorus(4, 2.5, 0.5);
  //   this.synth = new Tone.PolySynth(4, Tone.MonoSynth).toMaster().connect(chorus);
  // }

  // reverb(){
  //   var reverb = new Tone.JCReverb(0.9).connect(Tone.Master);
  //   var delay = new Tone.FeedbackDelay(0.2);
  //   this.synth = new Tone.DuoSynth().chain(delay, reverb);
  // }

  // phaser(){
  //   var phaser = new Tone.Phaser({
  //     'frequency' : 2,
  //     'octaves' : 2,
  //     'baseFrequency' : 55
  //   }).toMaster();

  //   this.synth.connect(phaser);
  // }

  // msover(note){
  //   if(this.msdown){
  //     this.play(note);
  //   }
  // }

  // play(note) {
  //   this.synth.triggerAttackRelease(note, '8n');
  // }

  ngAfterViewInit() {
    const svg = this.svg.nativeElement;
    const c1 = this.circle1.nativeElement as SVGCircleElement;
    const c2 = this.circle2.nativeElement as SVGCircleElement;

    const matrix1 = c1.getCTM();
    const matrix2 = c2.getCTM();

    const pt = svg.createSVGPoint();
    this.linePt1 = pt.matrixTransform(matrix1);
    this.linePt2 = pt.matrixTransform(matrix2);
  }

  click(event: MouseEvent){
    console.log('linePt1: ', this.linePt1);
    console.log('linePt2: ', this.linePt2);
  }

  playNote() {
    const synth = new Tone.Synth().toMaster();
    // synth.triggerAttackRelease('C4', '8n');
    synth.triggerAttackRelease('C4', '8n');
  }

}
