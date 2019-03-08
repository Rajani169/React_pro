function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const data = [{ id: "accordion", letter: 'Q', src: "http://www.lessonsense.com/games/sounds/05-accordion.wav" },
{ id: "agogo", letter: 'W', src: "http://www.denhaku.com/r_box/sr16/sr16perc/hi%20agogo.wav" },
{ id: "banjo", letter: 'E', src: "http://cd.textfiles.com/sbsw/BEEPCHMS/BANJOBI.WAV" },
{ id: "bass", letter: 'A', src: "http://dight310.byu.edu/media/audio/FreeLoops.com/4/4/Korg%20Bass%20Lick%202-2739-Free-Loops.com.mp3" },
{ id: "bassdrum", letter: 'S', src: "http://amath.colorado.edu/pub/matlab/music/wav/bass_drum.wav" },
{ id: "bassoon", letter: 'D', src: "http://www.notam02.no/DSP/lyder/fagott.wav" },
{ id: "beatboxing", letter: 'Z', src: "http://dight310.byu.edu/media/audio/FreeLoops.com/1/1/Beat%20Box%20Snare-3183-Free-Loops.com.mp3" },
{ id: "bongos", letter: 'X', src: "http://cd.textfiles.com/maxsounds/WAV/INSTRUM/BONGO.WAV" },
{ id: "brass", letter: 'C', src: "http://greatpptgames.weebly.com/uploads/2/1/7/5/2175126/press_your_luck_here_it_is_your_grand_total.wav" }];


class DrumPad extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "handleKeyDown",








    e => {
      if (e.keyCode === this.props.letter.charCodeAt())
      {
        this.audio.play();
        this.audio.currentTime = 0;
        this.props.handleDisplay(this.props.id);
      }
    });_defineProperty(this, "handleClick",
    () => {
      this.audio.play();
      this.audio.currentTime = 0;
      this.props.handleDisplay(this.props.id);
    });}componentDidMount() {document.addEventListener("keydown", this.handleKeyDown);window.focus();}componentWillUnmount() {document.removeEventListener("keydown", this.handleKeyDown);}

  render() {
    return (
      React.createElement("div", { className: "drum-pad", id: this.props.id,
        onClick: this.handleClick },
      React.createElement("h1", null, this.props.letter),
      React.createElement("audio", {
        id: this.props.letter,
        src: this.props.src,
        className: "clip",
        ref: ref => this.audio = ref })));



  }}
;

class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleDisplay",




    display => this.setState({ display }));this.state = { display: 'click or enter any key from the keys given below' };}

  render() {
    return (
      React.createElement("div", { id: "drum-machine" },
      React.createElement("div", { id: "display" }, this.state.display),
      React.createElement("div", { id: "drum-pads" },
      data.map((d) =>
      React.createElement(DrumPad, {
        id: d.id,
        src: d.src,
        letter: d.letter,
        handleDisplay: this.handleDisplay })))));





  }}
;

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));