import { Component } from '@angular/core';
import * as Tone from 'tone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'angular-tonejs';
  // notes: string[] = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  // octives: number[] = [1, 2, 3, 4, 5, 6];
  // msdown = false;
  synth: any;

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

  playNote() {
    this.synth = new Tone.Synth().toMaster();
    this.synth.triggerAttackRelease('C4', '8n');
  }

}
